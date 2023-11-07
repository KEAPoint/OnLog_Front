import styled from "styled-components";
import Card from "../home/Card";
import { M_regular_32, L_bold_32 } from "../../components/style/Styled";

const PostSearch = () => {
    return(
        <div>
            <Wrap>
                <Left> 게시물 검색 결과 </Left>
                <Right><Num>3</Num>건</Right>
                
            </Wrap>
            {/* <PostWrap> */}
                <PageWrap>
                    <Card category="lifestyle"/>
                </PageWrap>
            {/* </PostWrap> */}

        </div>
    );
};

export default PostSearch;

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
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
    padding: 2.5rem 7rem 0rem 7rem;
`
const Left = styled(M_regular_32)`
    display: flex;
    padding: 1.25rem 0rem;
    align-items: flex-start;
    gap: 0.625rem;

    color: var(--black, #000);
`
const Right = styled(M_regular_32)`
    display: flex;
    padding: 1.25rem 0rem;
    align-items: flex-end;
    gap: 0.375rem;

    color: var(--gray_bold, #4A4A4A);
`

const Num = styled(L_bold_32)`
    color: var(--black, #000);
`

const PostWrap = styled.div`
display: flex;
padding: 3.125rem 6.25rem;
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