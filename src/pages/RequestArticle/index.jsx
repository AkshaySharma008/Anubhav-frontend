
import React from 'react';

import './index.scss';

const RequestArticle = () => {
   
    return (
        <div>
            <div className="col-md-6 mx-auto">
                <h2 className= "requestArticleHeader text-center mx-auto my-3">Whose experience you wanna know?</h2>
                <div className="requestArticleBox col-md-10 mx-auto p-4">
                    <form>
                        <h2 className="requestArticleHeadLabel m-0">Basic Information</h2>
                        <p className="requestArticleParaLabel">This info is mandatory to fill to request an article</p>

                        <div className="row">
                            <div className="form-group col">
                                <input type="text" className="form-control" placeholder="Your Name"/>
                            </div>
                            <div className="form-group col">
                                <input type="text" className="form-control" placeholder="Senior's Name"/>
                            </div>
                        </div>

                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Company/Corporation Name"/>
                        </div>

                        <h2 className="requestArticleHeadLabel m-0">Social Links</h2>
                        <p className="requestArticleParaLabel">These links will be helpul for us to contact them. Not mandatory to fill</p>

                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="LinkedIn"/>
                        </div>

                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Facebook"/>
                        </div>

                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Instagram"/>
                        </div>

                        <button type="submit" className="btn btn-info my-2">Send Request <i className="fa fa-arrow-right" aria-hidden="true"></i></button>
                    </form>
                </div>

            </div>
          
        </div>
    )
}

export default RequestArticle
