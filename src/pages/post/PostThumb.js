import styled from "styled-components";

const PostThumb = () => {
    return(
        <Wrap>
            <ImageDiv>  </ImageDiv>
            <Summary>
                캡틴아메리카 솔로무비를 보셨나요? 그렇다면 아이언맨과 캡틴아메리카의 싸움을 보셨겠네요. 로키의 세상으로 초대합니다.
            </Summary>
        </Wrap>
    );
};

export default PostThumb;

const Wrap = styled.div`
    display: flex;
    padding: 1.875rem 6.25rem;
    justify-content: center;
    align-items: center;
    align-content: center;
    gap: 1.875rem;
    align-self: stretch;
    flex-wrap: wrap;
`
const ImageDiv = styled.div`
    width: 41.75056rem;
    height: 31.9375rem;
    border-radius: 1.875rem;
    background: url(<path-to-image>), #FF7575 50% / cover no-repeat;
    /* style_shadow */
    box-shadow: 6px 7px 7px 0px rgba(0, 0, 0, 0.50);
`

const Summary = styled.div`
    display: flex;
    width: 40.5625rem;
    height: 31.9375rem;
    padding: 1.875rem 2.5rem;
    // margin: 10rem 0rem 0rem 5rem;
    align-self: stretch;

    flex-direction: column;
    align-items: center;
    gap: 0.9375rem;
    color: var(--black, #000);

    /* L-bold-45 */
    font-family: Pretendard;
    font-size: 2.8125rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

`