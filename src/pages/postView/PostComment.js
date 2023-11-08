import styled from "styled-components";
import Comment from "./Comment";
import ReplyComment from "./ReplyComment";
import CommentWrite from "./CommentWrite";
import { useRef, useState } from "react";

// 댓글 목록
const  PostComment = ({post}) => {
    // const [isClicked, setIsClicked] = useState(false);
    const commentWriteRef = useRef(null); // 댓글달기 버튼 누르면 댓글 창 뜬 곳으로 scroll 하게


    // const buttonHandler = () => {
    //     setIsClicked(!isClicked);
    //     commentWriteRef.current.scrollIntoView({ behavior: 'smooth' });
    // }

    return (
        <div>
            <CommentWrap ref={commentWriteRef}>
                <Comment post={post}/>
                <ReplyComment/>
            </CommentWrap>
            {/* {isClicked && <CommentWrite style={{padding:"0rem 0rem 0rem 0rem"}}/>} */}
            {/* <CommentWrite style={{padding:"0rem 0rem 0rem 0rem"}}/> */}
        </div>
    );
};

export default PostComment;

const Wrap = styled.div`
    display: flex;
    // padding: 0rem 11.875rem 1.25rem;
    margin-right: 2rem;
    margin-bottom: 1rem;
    padding-bottom: 1rem;
    flex-direction: column;
    align-items: flex-end;
    gap: 0.625rem;
    align-self: stretch;
    border-bottom: 1px solid var(--gray_lighter, #DCDCDC);
`
const CommentBtn = styled.button`
    display: flex;
    padding: 0.75rem 4rem;
    margin-Top: 1.25rem;
    align-items: center;
    gap: 0.9375rem;
    background: var(--black, #000);
    color: var(--white, #FFF);
    text-align: justify;
    border : 3px solid black;
    cursor: pointer;
    
    /* S-bold-25 */
    font-family: Pretendard;
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

    &:hover {
        background: white;
        color: black;

        transition: 0.3s;
    }
    // 클릭 액션
    &:active{
        transform: scale(0.95);
    }
`

const CommentWrap = styled.div`
    display: flex;
    // padding: 0rem 11.875rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.625rem;
    align-self: stretch;
    
`