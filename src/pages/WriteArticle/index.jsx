import { Component } from 'react';
import './index.scss';
import ArticleEditor from '../../Component/ArticleEditor';
import axios from 'axios';
import SweetAlert from 'sweetalert-react';
import '../../../node_modules/sweetalert/dist/sweetalert.css'
import InputTags from '../../Component/InputTags';
import OverlayModal from '../../Component/OverlayModal';
import { Prompt } from 'react-router-dom';
import FeedbackModal from '../../Component/feedbackModal/index';

export class WriteArticle extends Component {
    
    state = {
        articleDetails: {
            title: 'll',
            companyName: '',
            name: '',
            contact: '',
            showName: true,
        },
        errors: {
            title: '',
            companyName: '',
            name: '',
            contact: '',
        },
        articleText: '',
        AllTags: [],
        formIsHalfFilledOut: false,
        isAnyChange: false,
        showModal: false,
        modalTextStatus: '',
        modalContent: {
            heading: '',
            icon: '',
            text: '',
        },
        isShowPreSubmit: false,
        feedbackshow: false,
        articleIDForFeedback: '',
    }

    // getSavedDraft = () => {
        
    // }

    // patchSavedData = () => {
    //     console.log(this.state)
    // }

    componentDidMount(){
        const { articleDetails } = this.state;
        const data = JSON.parse(localStorage.getItem("anubhavExperience"))
        console.log(data,data.title)
        articleDetails['title'] = data.title;
        articleDetails['companyName'] = (data.companyName) ? data.companyName : '' ;
        articleDetails['name'] = (data.name) ? data.name : '';
        articleDetails['contact'] = (data.contact) ? data.contact : ''; 
       
        this.setState({articleDetails, articleText : data.description,});
        

        let arr = ['Interview-experience','io']
        arr.push(...data.articleTags)
        console.log(arr)
        this.setState({AllTags : [...arr]})
    }

    handledata(){

    }

    handleInputValue = key => e => {
        const { articleDetails, errors } = this.state;
        articleDetails[key] = e.target.value;
        errors[key] = null
        this.setState({ articleDetails, errors })
        //this.setState({ isAnyChange: true })
        this.setState({ formIsHalfFilledOut: true })
    }

    handleEditorInputChange = (data) => {
        this.setState({ articleText: data })
        this.setState({ formIsHalfFilledOut: true })
    }

    handleCheckBoxInput = key => e => {
        const { articleDetails } = this.state;
        articleDetails[key] = e.target.checked;
        this.setState({ articleDetails })
    }

    selectedTags = tags => {
        this.setState({ AllTags: tags })
    }

    checkEmptyFields = () => {
        const { articleDetails, errors } = this.state
        let valid = true
        for (const val in articleDetails) {
            if (articleDetails[val] === '') {
                errors[val] = `Can't be empty`
                valid = false;
                window.scrollTo(0, 0);
            }
        }
        this.setState({ errors })
        if (valid) return true
        return false
    }

    handlePreSubmit = () => {
        if (this.checkEmptyFields()) {
            this.setState({ isShowPreSubmit: true })
        }

    }

    handleSubmitForm = (e) => {
        // e.preventDefault();        This part was causing issues
        const { articleDetails, articleText, AllTags, modalContent } = this.state;
        modalContent['heading'] = "Uploading"
        modalContent['icon'] = "fa-upload"
        modalContent['text'] = "Have patience....."
        this.setState({ showModal: true }, () => {
            this.setState({ modalContent })
        })

        const payload = {
            "title": articleDetails.title,
            "typeOfArticle": "Interview-experience",
            "companyName": articleDetails.companyName,
            "description": articleText,
            "articleTags": AllTags,
            "author": {
                "name": articleDetails.name,
                "contact": articleDetails.contact,
            },
            "showName":articleDetails.showName,
        }
        //alert(JSON.stringify(payload))
        const apiUrl = '/api/v1/article/';

        axios.post(apiUrl, payload).then((res) => {
            //alert("Successfully uploaded");
            //console.log(res.data, res.data.article._id)

            this.setState({ showModal: false, feedbackshow: true }, () => {
                this.setState({ articleIDForFeedback: res.data.article._id })
            })

        }).catch((err) => {
            //alert("Error while uploading")
            console.log(err);
            modalContent['heading'] = "Error while uploading"
            modalContent['icon'] = "fa-frown-o"
            modalContent['text'] = "Sorry for this inconvenience.Kindly retry "
            this.setState({ showModal: true, feedbackshow: false }, () => {
                this.setState({ modalContent })
            })
        })

    }


    saveDraft = () => {
        const { articleDetails, articleText, AllTags} = this.state;
        const payload = {
            "title": articleDetails.title ? articleDetails.title : "",
            "typeOfArticle": "Interview-experience",
            "companyName": articleDetails.companyName ? articleDetails.companyName : "",
            "description": articleText ? articleText : "",
            "articleTags": AllTags ? AllTags : "",
            "author": {
                "name": articleDetails.name ? articleDetails.name : "",
                "contact": articleDetails.contact ? articleDetails.contact : "" ,
            },
            "showName":articleDetails.showName ? articleDetails.showName : "",
        }
        localStorage.setItem("anubhavExperience" , JSON.stringify(payload))
    }

    

    render() {
        const { articleDetails,errors } = this.state;
        return (
            <>
                <Prompt
                    when={!!this.state.formIsHalfFilledOut}
                    message='You have unsaved changes, are you sure you want to leave?'
                />
                <div className="container my-3 px-0 write-article">
                    <div className="col-md-8 mx-auto">
                        <div >
                            <div className="form-group">
                                <label htmlFor="exampleFormControlInput1">Title</label>
                                <input type="text" className="form-control" id="exampleFormControlInput1"
                                value={articleDetails.title}
                                required onChange={this.handledata()} />
                                <span>{errors.title}</span>
                            </div>
                            <div className="row">

                                <div className="form-group col">
                                    <label htmlFor="exampleFormControlInput2">Company Name</label>
                                    <input type="text" className="form-control" id="exampleFormControlInput2" 
                                    value={articleDetails.companyName}
                                    required onChange={this.handleInputValue('companyName')} />
                                    <span>{errors.companyName}</span>
                                </div>
                                <div className="form-group col">
                                    <label htmlFor="exampleFormControlInput3">Your Name</label>
                                    <input type="text" className="articleRequestTextBox form-control" id="exampleFormControlInput3" 
                                     value={articleDetails.name}
                                    required onChange={this.handleInputValue('name')} />
                                    <span>{errors.name}</span>

                                    <div className="form-check show-name-checkbox d-flex">
                                        <input type="checkbox" className="form-check-input "
                                            checked={this.state.articleDetails.showName}
                                            onChange={this.handleCheckBoxInput('showName')}
                                            id="showNameCheck" />
                                        <label className="form-check-label" htmlFor="showNameCheck">display name with article</label>
                                    </div>

                                </div>

                            </div>
                            <div className="row">


                                <div className="form-group col">
                                    <label htmlFor="exampleFormControlInput4">Contact Info <small> (for verification)</small></label>
                                    <input type="text" className="form-control" id="exampleFormControlInput4" placeholder="college email/social media link " 
                                     value={articleDetails.contact}
                                    required onChange={this.handleInputValue('contact')} />
                                    <span>{errors.contact}</span>
                                </div>

                            </div>
                            <label>Share your experience here</label>

                            <ArticleEditor
                            //data={this.state.articleText}
                            handleInputChange={this.handleEditorInputChange} />

                            <div className="mt-2">
                                <label htmlFor="exampleFormControlInput1">Tags</label>
                                <InputTags
                                    selectedTags={this.selectedTags} tags={this.state.AllTags}
                                />

                            </div>
                            <div className="clearfix mx-2">
                            <button type="submit" className="col-5 mx-auto btn btn-primary my-3 float-left" onClick={this.saveDraft}>Save As Draft</button>
                            <button type="submit" className="col-5 mx-auto btn btn-primary my-3 float-right" onClick={this.handlePreSubmit}>Submit</button>
                            </div>
                            <SweetAlert
                                show={this.state.isShowPreSubmit}
                                title="Submit"
                                text="Do you want to submit this article ?"
                                showCancelButton
                                onConfirm={() => {
                                    this.setState({ isShowPreSubmit: false })
                                    this.handleSubmitForm()
                                }}
                                onCancel={() => this.setState({ isShowPreSubmit: false })}
                            />
                        </div>
                    </div>

                    <OverlayModal
                        modalContent={this.state.modalContent}
                        show={this.state.showModal}
                        onHide={() => {
                            this.setState({ showModal: false })
                        }}
                    />

                    <FeedbackModal
                        onHide={() => { this.setState({ feedbackshow: false }) }}
                        show={this.state.feedbackshow}
                        article={this.state.articleIDForFeedback}
                    />

                </div>
            </>
        )
    }
}

export default WriteArticle

