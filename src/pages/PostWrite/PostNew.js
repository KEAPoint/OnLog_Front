import React, { useState } from "react";
import SunEditor from "suneditor-react";
import _ from 'lodash';
import "suneditor/dist/css/suneditor.min.css";

const PostNew = () => {
    const [content, setContent] = useState("");
    const [submittedContent, setSubmittedContent] = useState("");

    // onChange 발생 시 content에 저장 (디바운스 적용)
    const handleChange = _.debounce((newContent) => {
        setContent(newContent);
        console.log(newContent);
    }, 300); // 300ms 딜레이

   // 제출 버튼 클릭 시 content의 현재 내용을 submittedContent에 저장
   const handleSubmit = () => {
       setSubmittedContent(content);
       console.log(submittedContent);
   }

   return (
       <div className="text-editor">
           <SunEditor 
               width="150rem"
               height="50rem"
               setOptions={{
                   buttonList: [
                       [
                        'undo', 'redo',
                        'font', 'fontSize', 'formatBlock',
                        'paragraphStyle', 'blockquote',
                        'bold', 'underline', 'italic', 'strike', 'subscript', 'superscript',
                        'fontColor', 'hiliteColor', 'textStyle',
                        'removeFormat',
                        'outdent', 'indent',
                        'align', 'horizontalRule', 'list', 'lineHeight',
                        'table', 'link', 'image', 'video', 'audio',
                        'fullScreen', 'showBlocks', 'codeView',
                        'preview', 'print',
                        'save', 'template',
                       ]
                   ],
               }}
               onChange={handleChange}
           />
           <button onClick={handleSubmit}>제출</button>
       </div>
  );
};

export default PostNew;