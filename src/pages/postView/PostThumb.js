import styled from "styled-components";
import ThumbImg from "../../assets/images/catogories/Tech.png"
import Profile from "../../assets/images/Profile.jpeg";
// import Parser from 'html-react-parser';


const PostThumb = () => {
    const sum = "오늘은 맹구가 전학 왔다. 맹구는 콧물이 정말 길다. 저 콧물은 진짜일까? 가짜일까? 모형일까? 뭘까?";

    return(
        <>
            <Menu>
                <ProfileImg></ProfileImg>
                <TitleWrap>
                    <BlogName>Hani Tech World</BlogName>
                    <NickName>@hanitech</NickName>
                </TitleWrap>
            </Menu>
            <Wrap>
                <ImageDiv>  </ImageDiv>
                <Summary>
                    {/* {Parser({title})} */}
                    {sum}
                </Summary>
            </Wrap>
        </>
    );
};

export default PostThumb;

const Menu = styled.div`
    // padding: 1.25rem 6.25rem;
    padding: 1rem 0rem 0rem 0rem;
    display: flex;
    align-items: center;
`;
const ProfileImg = styled.div`
    width: 3rem;
    height: 3rem;
    border-radius: 2.5rem;
    background: url(${Profile}) lightgray 50% / cover no-repeat;
    margin-right: 0.94rem;
`;
const TitleWrap = styled.div`
    text-decoration: none;
    color: var(--black);
`;
const BlogName = styled.div`
    text-align: justify;

    color: var(--black, #000);

    /* S-bold-25 */
    font-family: Pretendard;
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;
const NickName = styled.div`
    color: var(--gray_bold, #4A4A4A);
    text-align: justify;
    font-family: Pretendard;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.03375rem;
`;

const Wrap = styled.div`
    display: flex;
    // padding: 1.875rem 6.25rem;
    padding: 1rem 0rem;
    justify-content: flex-start;
    align-items: center;
    align-content: flex-start;
    gap: 2rem;
    align-self: stretch;
    flex-wrap: wrap;
`
const ImageDiv = styled.div`
    width: 20rem;
    height: 20rem;
    // border-radius: 1.875rem;
    background: url(${ThumbImg}), #FF7575 50% / cover no-repeat;

    /* style_shadow */
    // box-shadow: 6px 7px 7px 0px rgba(0, 0, 0, 0.50);
`

const Summary = styled.div`
    width: 30rem;
    color: var(--gray_bold, #4A4A4A);
    text-align: justify;

    line-height: 2.3rem;

    /* L-semibold-40 */
    font-family: Pretendard;
    font-size: 1.5rem;
    // font-size: 24px;
    font-style: normal;
    font-weight: 600;
`