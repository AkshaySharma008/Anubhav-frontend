
import { Component } from 'react';
import './index.scss';
import ArticleEditor from '../../Component/ArticleEditor';

export class WriteArticle extends Component {
    state = {
        articleDetails: {
            title: '',
            articleText: '',
            companyName: '',
            tags: '',
            name: '',
            email: '',
        },
        editorState: '',
        isChange: false
    }

    handleInputValue = key => e => {
        const { articleDetails } = this.state;
        articleDetails[key] = e.target.value;
        this.setState({ articleDetails })
        this.setState({ isAnyChange: true })
    }

    handleSubmitForm = (e) => {
    
        e.preventDefault();
        const { articleDetails } = this.state;

        let fstring = JSON.stringify(articleDetails);
        alert(fstring)

    }

    handleEditorInputChange = (data) => {
        console.log(data);
        const { articleDetails } = this.state;
        articleDetails['articleText'] = data;
        this.setState({ articleDetails })

    }

    render() {
        return (
            <div className="container my-3">
                <div className="col-md-8 mx-auto">
                <form onSubmit={this.handleSubmitForm}>
                <div className="form-group">
                        <label htmlFor="exampleFormControlInput1">Title</label>
                        <input type="text" className="form-control" id="exampleFormControlInput1" onChange={this.handleInputValue('title')} />
                    </div>
                    <div className="row">
                   
                    <div className="form-group col">
                        <label htmlFor="exampleFormControlInput2">Company Name</label>
                        <input type="text" className="form-control" id="exampleFormControlInput2" onChange={this.handleInputValue('companyName')} />
                    </div>
                    <div className="form-group col">
                        <label htmlFor="exampleFormControlInput1">Your Name</label>
                        <input type="text" className="form-control" id="exampleFormControlInput1" onChange={this.handleInputValue('name')} />
                    </div>
                    </div>
                    <label>Share your experience here</label>
                    <ArticleEditor
                        handleInputChange={this.handleEditorInputChange} />

                    <button type="submit" className="btn btn-primary my-2">Submit</button>
                </form>
                </div>
            </div>
        )
    }
}

export default WriteArticle

