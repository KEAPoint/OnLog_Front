import styled from "styled-components";
import BlogItem from "../../components/common/BlogItem";
import Footer from "../../components/common/Footer";

const BlogSearch = () => {
    return(
        <div>
            <Wrap>
                <Left> 블로그 검색 결과 </Left>
                <Right><Num>1</Num>건</Right>
            </Wrap>
            <PageWrap>
            {[...Array(1)].map((_, index) => (
                    <BlogItem key={index} />
                ))}
            </PageWrap>
        </div>
    );
};

export default BlogSearch;

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
const Left = styled.div`
    display: flex;
    padding: 1.25rem 0rem;
    align-items: flex-start;
    gap: 0.625rem;

    color: var(--black, #000);

    /* M-regular-38 */
    font-family: Pretendard;
    font-size: 2rem;
    font-style: normal;
    font-weight: 400;
    line-height: 3.01875rem; /* 127.105% */
    
    // /* M-regular-38 */
    // font-family: Pretendard;
    // font-size: 2.375rem;
    // font-style: normal;
    // font-weight: 400;
    // line-height: 3.01875rem; /* 127.105% */
`
const Right = styled.div`
    display: flex;
    padding: 1.25rem 0rem;
    align-items: flex-end;
    gap: 0.375rem;

    color: var(--gray_bold, #4A4A4A);

    /* M-regular-38 */
    font-family: Pretendard;
    font-size: 2rem;
    font-style: normal;
    font-weight: 400;
    line-height: 3.01875rem; /* 127.105% */
`

const Num = styled.div`
    color: var(--black, #000);

    /* L-bold-45 */
    font-family: Pretendard;
    font-size: 2.3rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`
const BlogItemWrap = styled.div`
    display: flex;
    padding: 0rem 11.875rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.625rem;
    align-self: stretch;
`