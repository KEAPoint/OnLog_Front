import styled from "styled-components";
import Card from "../home/Card";

const PostSearch = () => {
    return(
        <div>
            <Wrap>
                <Left> 게시물 검색 결과 </Left>
                <Right><Num>6</Num>건</Right>
                
            </Wrap>
            <PostWrap>
                <CardWrap>
                    <Card category="lifestyle"/>
                </CardWrap>
            </PostWrap>

        </div>
    );
};

export default PostSearch;

const Wrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
    padding: 2.5rem 15rem 0rem 15rem;
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