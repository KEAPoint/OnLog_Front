import React, { useState } from "react";
import SunEditor from "suneditor-react";
import _ from 'lodash';
import "suneditor/dist/css/suneditor.min.css";
import styled from "styled-components";
import TextareaAutosize from 'react-textarea-autosize'; // npm install react-textarea-autosize
import { S_bold_25 } from "../../components/style/Styled";
import Swal from "sweetalert2";


const PostNew = () => {
    const [content, setContent] = useState("");
    const [submittedContent, setSubmittedContent] = useState("");
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [tag, setTag] = useState("");

    const categories = ["lifestyle", "travel", "foodie", "entertainment", "tech", "sports", "news"]; // 카테고리 리스트

    // onChange 발생 시 content에 저장 (디바운스 적용)
    const handleChange = _.debounce((newContent) => {
        setContent(newContent);
        console.log(newContent);
    }, 300); // 300ms 딜레이

   // 제출 버튼 클릭 시 content의 현재 내용을 submittedContent에 저장
   const handleSubmit = () => {
       setSubmittedContent(content);
       console.log(submittedContent);
    //    alert(category);
   }

   // 제목 입력시 변경사항 반영
   const TitleHandler = (e) => {
    setTitle(e.currentTarget.value);
    }

    const TagHandler = (e) => {
        setTag(e.currentTarget.value);
    }

    const nextBtnHandler = () => {
        // 제목, 글 내용, 해시태그, 카테고리 모두 선택했는지 확인해야함

        Swal.fire(
            {
                title: "...",
                // icon: "success",
                text: "AI가 썸네일과 3줄요약을 생성 중입니다! 조금만 기다려주세요"
            }
        )
    }
   return (
    <Wrap>
        <WrapInner>
            <S_bold_25>제목</S_bold_25>
        </WrapInner>
        <Title type='text' value={title} style={{ overflow: 'hidden' }} placeholder="제목을 입력하세요" onChange={TitleHandler}/>

        <div className="text-editor">
            <SunEditor 
                width="100rem"
                height="70rem"
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
            {/* <button onClick={handleSubmit}>제출</button> */}
        </div>
        
        <WrapInner>
            <S_bold_25> 카테고리 선택 </S_bold_25>
            <div style={{paddingTop:"1rem", paddingBottom:"1rem"}}>
                {categories.map((cat) => (
                    <CategoryButton key={cat} onClick={() => setCategory(cat)} selected={category === cat}>
                        #{cat}
                    </CategoryButton> 
                ))}
            </div>
        </WrapInner>

        <WrapInner>
            <S_bold_25> 해시태그 입력 </S_bold_25>
            <Title type='text' value={tag} style={{ overflow: 'hidden' }} placeholder="해시태그를 입력해보세요" onChange={TagHandler}/>
        </WrapInner>

        <BtnWrap>
            <NextBtn onClick={nextBtnHandler}>다음</NextBtn>
        </BtnWrap>
               
    </Wrap>
  );
};

export default PostNew;

const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1.25rem 7.5rem;
    align-items: center;
    gap: 1.875rem;
    align-self: stretch;
`

const WrapInner = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`
const Title = styled(TextareaAutosize)`
    width: 100%;
    display: flex;
    padding: 0.6875rem 1.4375rem;
    align-items: center;
    gap: 0.625rem;
    align-self: stretch;
    border: none;
    border-bottom: 1.5px solid var(--gray_bold, #4A4A4A);

    resize: none;

    color: var(--gray_bold, #4A4A4A);

    /* S-regular_30(txt) */
    font-family: Pretendard;
    font-size: 1.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 3.125rem; /* 166.667% */
    letter-spacing: 0.01875rem;

    &:hover{
        box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.05);
    }
`

const CategoryButton = styled.button`
    color: ${props => props.selected ? 'white' : 'var(--gray_bold, #4A4A4A)'};
    background-color: ${props => props.selected ? '#FF7575' : 'white'};

    /* L-semibold-40 */
    font-family: Pretendard;
    font-size: 2rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;

    border: none;
    margin-right: 2rem;
    cursor: pointer;
    transition: transform 0.1s ease-in-out;
    
    &:hover {
        color: white;
        background: #FF7575;
        font-size: 2.2rem;
    }

    //버튼 클릭 시 애니메이션
    &:active {
        transform: scale(0.95);
    }
`

const BtnWrap = styled.div`
    padding-Top: 2rem;
    padding-Left:5rem;
    padding-Right:5rem;
`
const NextBtn = styled.button`
    display: flex;
    padding: 0.75rem 4.0625rem;
    align-items: center;
    gap: 0.9375rem;

    border: none;
    background: black;
    color: white;
    cursor: pointer;

    text-align: justify;

    /* S-bold-25 */
    font-family: Pretendard;
    font-size: 1.5625rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

    transition: 0.3s ease-in-out;

    &:hover{
        color: black;
        background: white;
        box-shadow: inset 0 0 0 5px black;
    }
`