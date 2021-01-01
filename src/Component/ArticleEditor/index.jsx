
import React, { useState } from 'react';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './index.scss';
import draftToHtml from 'draftjs-to-html';
//import htmlToDraft from 'html-to-draftjs';

const ArticleEditor = ({handleInputChange}) => {
    const [editorState, setEditorState] = useState(
        () => EditorState.createEmpty(),
    );

    const changeEditorInput =(data)=>{
        setEditorState(data)
       const x = draftToHtml(convertToRaw(editorState.getCurrentContent()))
        handleInputChange(x);
    }
    return (
        <>
    
            <Editor
                editorState={editorState}
                onEditorStateChange={changeEditorInput}
                wrapperClassName="wrapper-class"
                editorClassName="editor-class"
                toolbarClassName="toolbar-class"
                placeholder="Write here....."
            />
        </>
    )
}

export default ArticleEditor
