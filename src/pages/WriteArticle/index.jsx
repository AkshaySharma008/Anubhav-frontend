
import { Component } from 'react';
import './index.scss';
import ArticleEditor from '../../Component/ArticleEditor';
import axios from 'axios';
import InputTags from '../../Component/InputTags';
import OverlayModal from '../../Component/OverlayModal';

export class WriteArticle extends Component {
    state = {
        articleDetails: {
            title: '',
            companyName: '',
            name: '',
            contact: '',
        },
        errors: {
            title: '',
            companyName: '',
            name: '',
            contact: '',
        },
        articleText: '',
        AllTags: ['Interview-experience'],
        isChange: false,
        showModal : false,
        modalTextStatus : '',
        modalContent : {
            heading : '',
            icon : '',
            text : '',
        }
    }

    handleInputValue = key => e => {
        const { articleDetails, errors } = this.state;
        articleDetails[key] = e.target.value;
        errors[key] = null
        this.setState({ articleDetails, errors })
        this.setState({ isAnyChange: true })
    }
    handleEditorInputChange = (data) => {
        this.setState({ articleText: data })

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
    handleSubmitForm = (e) => {

        e.preventDefault();
        if (e.keyCode === 13) {
            e.preventDefault();
        }
        const { articleDetails, articleText, AllTags, modalContent } = this.state;
        modalContent['heading'] = "Uploading"
        modalContent['icon']="fa-upload"
        modalContent['text']="Have patience....."
        this.setState({showModal : true},()=>{
            this.setState({modalContent})
        })

       
        
        if (this.checkEmptyFields()) {
            
            this.setState({ AllTags: [...AllTags, e.target.value] })
            const payload = {
                "title": articleDetails.title,
                "typeOfArticle": "Interview-experience",
                "companyName": articleDetails.companyName,
                "description": articleText,
                "articleTags": AllTags,
                "author": {
                    "name": articleDetails.name,
                    "contact": articleDetails.contact,
                }
            }
            //alert(JSON.stringify(payload))
            const apiUrl = '/api/v1/article/';

            axios.post(apiUrl, payload).then((res) => {
                //alert("Successfully uploaded");
                modalContent['heading'] = "Successfully uploaded"
                modalContent['icon']="fa-smile-o"
                modalContent['text']="Thank you for sharing your experience. Once verified it will be available on Anubhav."
                this.setState({showModal : true},()=>{
                    this.setState({modalContent})
                })
                setTimeout(() => {
                    window.location = "/";
                }, 5000);
                
            }).catch((err) => {
                //alert("Error while uploading")
                console.log(err);
                modalContent['heading'] = "Error while uploading"
                modalContent['icon']="fa-frown-o"
                modalContent['text']="Sorry for this inconvenience.Kindly retry "
                this.setState({showModal : true},()=>{
                    this.setState({modalContent})
                })
            })
        }
    }


    render() {
        const { errors } = this.state;
        return (
            <div className="container my-3 px-0 write-article">
                <div className="col-md-8 mx-auto">
                    <div >
                        <div className="form-group">
                            <label htmlFor="exampleFormControlInput1">Title</label>
                            <input type="text" className="form-control" id="exampleFormControlInput1" required onChange={this.handleInputValue('title')} />
                            <span>{errors.title}</span>
                        </div>
                        <div className="row">

                            <div className="form-group col">
                                <label htmlFor="exampleFormControlInput2">Company Name</label>
                                <input type="text" className="form-control" id="exampleFormControlInput2" required onChange={this.handleInputValue('companyName')} />
                                <span>{errors.companyName}</span>
                            </div>
                            <div className="form-group col">
                                <label htmlFor="exampleFormControlInput3">Your Name</label>
                                <input type="text" className="articleRequestTextBox form-control" id="exampleFormControlInput3" required onChange={this.handleInputValue('name')} />
                                <span>{errors.name}</span>

                            </div>

                        </div>
                        <div className="row">


                            <div className="form-group col">
                                <label htmlFor="exampleFormControlInput4">Contact Info <small> (for verification)</small></label>
                                <input type="text" className="form-control" id="exampleFormControlInput4" placeholder="college email/social media link " required onChange={this.handleInputValue('contact')} />
                                <span>{errors.contact}</span>
                            </div>

                        </div>
                        <label>Share your experience here</label>
                        <ArticleEditor
                            handleInputChange={this.handleEditorInputChange} />

                        <div className="mt-2">
                            <label htmlFor="exampleFormControlInput1">Tags</label>
                            <InputTags
                                selectedTags={this.selectedTags} tags={this.state.AllTags}
                            />

                        </div>
                        <button type="submit" className="col-12 mx-auto btn btn-primary my-2" onClick={this.handleSubmitForm}>Submit</button>
                    </div>
                </div>
              
                    <OverlayModal
                    modalContent={this.state.modalContent}
                    show={this.state.showModal}
                    onHide={() => {this.setState({showModal : false})}}/>
            
            </div>
        )
    }
}

export default WriteArticle

