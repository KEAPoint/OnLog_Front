import styled from "styled-components";
import Card from "../home/Card";

const MypagePost = () => {
    return(
        // <Wrap>
            <PageWrap>
                <Card category="lifestyle"/>
            </PageWrap>
        // </Wrap>
    );
};

export default MypagePost;

const PageWrap = styled.div`
    margin: 0rem 6.25rem;
    /* box-sizing: border-box; */

/* 
    @media ${({ theme }) => theme.windowSize.test} {
        background-color: pink;
    } */
`
const Wrap = styled.div`
    display: flex;
    // padding: 1.875rem 6.25rem;
    padding: 3.125rem 17rem;
    justify-content: center;
    align-items: flex-start;
    align-content: flex-start;
    gap: 1.25rem;
    align-self: stretch;
    flex-wrap: wrap;
`

const CardWrap = styled.div`
    /* background-color: red; */
    position: relative;
`;