import styled from "styled-components";
import Comment from "./Comment";
import ReplyComment from "./ReplyComment";

const PostComment = () => {
    return (
        <div>
            <Wrap>
                <CommentDiv>
                    <CommentTab> Comment </CommentTab>
                </CommentDiv>
            </Wrap>
            <CommentWrap>
                <Comment/>
                <ReplyComment/>
            </CommentWrap>
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

const CommentDiv = styled.div`
    display: flex;
    padding: 1.25rem 0rem;
    flex-direction: column;
    align-items: flex-end;
    gap: 0.625rem;
    align-self: stretch;
    border-bottom: 1px solid var(--black, #000);
`
const CommentTab = styled.div`
    display: flex;
    padding: 0.75rem 4.0625rem;
    align-items: center;
    gap: 0.9375rem;
    background: var(--black, #000);
    color: var(--white, #FFF);
    text-align: justify;
    
    /* S-bold-25 */
    font-family: Pretendard;
    font-size: 1.5625rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`

const CommentWrap = styled.div`
    display: flex;
    padding: 0rem 11.875rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.625rem;
    align-self: stretch;
    
`