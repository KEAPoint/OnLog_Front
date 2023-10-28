import styled from "styled-components";

const CommentWrite = () => {
    return(
        <Wrap>
            <WriteWrap>
                hello
            </WriteWrap>
        </Wrap>
    );
};

export default CommentWrite;

const Wrap = styled.div`
    display: flex;
    padding: 1rem 11.875rem 1.25rem;
    flex-direction: column;
    align-items: center;
    gap: 0.625rem;
    align-self: stretch;
`

const WriteWrap = styled.div`
    display: flex;
    padding: 2.5rem 1.875rem 2.5rem 3.125rem;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    align-self: stretch;
    background: black;
    color: white;
`
