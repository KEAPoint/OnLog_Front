import styled from "styled-components";
import Comment from "./Comment";
import ReplyComment from "./ReplyComment";

const PostComment = () => {
    return (
        <div>
            <CommentWrap>
                <Comment/>
                <ReplyComment/>
            </CommentWrap>
            <Wrap>
                <CommentBtn> 댓글 달기 </CommentBtn>
            </Wrap>
        </div>
    );
};

export default PostComment;

const Wrap = styled.div`
    display: flex;
    padding: 0rem 11.875rem 1.25rem;
    flex-direction: column;
    align-items: flex-end;
    gap: 0.625rem;
    align-self: stretch;
`
const CommentBtn = styled.button`
    display: flex;
    padding: 0.75rem 4.0625rem;
    margin-Top: 1.25rem;
    align-items: center;
    gap: 0.9375rem;
    background: var(--black, #000);
    color: var(--white, #FFF);
    text-align: justify;
    border : 4px solid black;
    cursor: pointer;
    
    /* S-bold-25 */
    font-family: Pretendard;
    font-size: 1.5625rem;
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
    padding: 0rem 11.875rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.625rem;
    align-self: stretch;
    
`