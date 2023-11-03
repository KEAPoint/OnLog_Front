import styled from "styled-components";
import Card from "../home/Card";

const MypagePost = () => {
    return(
            <PageWrap>
                <CateWrap>
                    <Category>
                        <CateTitle>나의 잡담</CateTitle>
                        {/* <CateTopic>#lifestyle</CateTopic> */}
                    </Category>
                    <Category>
                        <CateTitle>나의 IT 이야기</CateTitle>
                        {/* <CateTopic>#tech</CateTopic> */}
                    </Category>
                </CateWrap>
                <PostWrap>
                    <Card category="lifestyle"/>
                </PostWrap>
            </PageWrap>
    );
};

export default MypagePost;

const PageWrap = styled.div`
    display: flex;
    padding: 0rem 6.25rem;
    // align-items: flex-start;
    // align-content: flex-start;
    // align-self: stretch;
    // flex-wrap: wrap;
    // flex-direction: row;

    /* 
    @media ${({ theme }) => theme.windowSize.test} {
        background-color: pink;
    } */
`

const CateWrap = styled.div`
    display: flex;
    width: 29.8125rem;
    // height: 135.25rem;
    // padding: 1.625rem 0rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.25rem;
    // border-right: 1px solid var(--gray_bold, #4A4A4A);
    background: #FFF;
`
const Category = styled.button`
    cursor: pointer;
    display: flex;
    padding: 1.5rem 1.25rem 1.5rem 2.5rem;
    margin-right: 1rem;
    justify-content: space-between;
    align-items: flex-start;
    align-self: stretch;
    flex-direction: column;

    border-top: 1px solid var(--gray_bold, #4A4A4A);
    border-bottom: 1px solid var(--gray_bold, #4A4A4A);
    border-left: 1px solid var(--gray_bold, #4A4A4A);
    border-right: 1px solid var(--gray_bold, #4A4A4A);
    background: #FFF;
`
const CateTitle = styled.div`
    color: black;
    /* S-bold-25 */
    font-family: Pretendard;
    font-size: 1.5625rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-bottom: 0.625rem;
    `
const CateTopic = styled.div`
    color: var(--tag_lifestyle, #FF7575);

    /* XS-semibold-20 */
    font-family: Pretendard;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
`

const PostWrap = styled.div`
    width: 90rem;
    height: 100%;
    // display: flex;
    // padding: 1.875rem 0.5rem;
    // flex-direction: row;
    border-left: 1px solid var(--gray_bold, #4A4A4A);

`


