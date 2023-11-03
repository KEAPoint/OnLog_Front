import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { S_bold_25 } from '../../components/style/Styled';
import HaniProfile from '../../assets/images/Profile.jpeg';




const MypageTop = () => {
    const movePage = useNavigate();

    const handlePostButtonClick = (e) => {
        e.preventDefault();
        movePage('/mypage/postwrite');
    };
    const handleEditButtonClick = (e) => {
        e.preventDefault();
        movePage('/mypage/edit');

    };

    return (
        <PageWrap>
            <Wrap1>
                <Left>
                    <Menu>
                        <ProfileImg></ProfileImg>
                        <TitleWrap>
                            <BlogTitle>Hani Tech World</BlogTitle>
                            <Name>@hanitech</Name>
                        </TitleWrap>
                    </Menu>
                </Left>
                <Right>
                    <Box>
                        <Title> 작성한 글 </Title>
                        <Num>999</Num>
                    </Box>
                    <Box>
                        <Title> 좋아요 수 </Title>
                        <Num>999</Num>
                    </Box>
                    <Box style={{borderRight:"none"}}>
                        <Title> 구독자 수 </Title>
                        <Num>999</Num>
                    </Box>
                </Right>
            </Wrap1>
            <Wrap2>
                <ProfileInfo>
                Hani Tech World 는 최신 기술 정보와 실용적인 IT 팁을 제공하는 블로그입니다.
                </ProfileInfo>
            </Wrap2>
            <Wrap2>
                <Button onClick={handlePostButtonClick}>글 작성</Button>
                <Button onClick={handleEditButtonClick}>프로필 수정</Button>
            </Wrap2>
        </PageWrap>
    );
};

export default MypageTop;

const PageWrap = styled.div`
    padding: 3.75rem 0rem 1.875rem 0rem;

`
const Wrap1 = styled.div`
    // display: flex;
    // padding-bottom: 1.88rem;
    // justify-content: center;
    // align-items: center;
    // align-content: flex-start;
    // align-self: stretch;
    // flex-wrap: wrap;

    display: flex;
    padding-bottom: 1.88rem;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    row-gap: 3.75rem;
    align-self: stretch;
    flex-wrap: wrap;
`

const Left = styled.div`
    display: flex;
    align-items: center;
    gap: 1.25rem;
    width: 35.5rem;
    padding-bottom: 2rem;
`
const Menu = styled(S_bold_25)`
    display: flex;
    align-items: center;
`;
// const Profile = styled.div`
//     display: flex;
//     flex-direction: column;
//     align-items: flex-start;
//     gap: 1.875rem;
//     display: flex;
//     padding: 2rem 0rem 0rem 18.8125rem;
//     gap: 0.625rem;
//     align-self: stretch;
//     background: url(ProfileImg), lightgray 50% / cover no-repeat;
// `
const ProfileImg = styled.div`
    width: 12.6875rem;
    height: 12.625rem;
    border-radius: 6.875rem;
    background: url(${HaniProfile}) lightgray 50% / cover no-repeat;
    margin-right: 0.94rem;
`;
const TitleWrap = styled.div`
    display: flex; 
    flex-direction: column;
`;
const BlogTitle = styled.div`
    color: var(--black, #000);

    /* L-bold-45 */
    font-family: Pretendard;
    font-size: 2.8125rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;
const Name = styled.div`
    color: var(--gray_bold, #4A4A4A);
    text-align: justify;

    /* S-regular_30 */
    font-family: Pretendard;
    font-size: 1.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;
const Right = styled.div`
    display: flex;
    padding-left: 0px;
    justify-content: center;
    align-items: center;
    gap: 0.75rem;
`
const Box = styled.div`
    display: flex;
    padding: 0rem 3.125rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-right: 1px solid var(--gray_light, #939393);
`
const Title = styled.div`
    color: var(--gray_bold, #4A4A4A);
    text-align: justify;

    /* S-regular-25 */
    font-family: Pretendard;
    font-size: 1.5625rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`
const Num = styled.div`
    color: var(--black, #000);
    text-align: justify;

    /* L-bold-45 */
    font-family: Pretendard;
    font-size: 2.8125rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`

const Wrap2 = styled.div`
    display: flex;
    // padding: 1.25rem 25rem 3.75rem 25rem;
    padding-bottom: 1.25rem;
    justify-content: center;
    align-items: center;
    gap: 0.625rem;
    align-self: stretch;
`
const ProfileInfo = styled.div`
    color: var(--gray_bold, #4A4A4A);

    /* S-regular_30 */
    font-family: Pretendard;
    font-size: 1.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`
const Button = styled.button`
    display: flex;
    padding: 0.75rem 6.03125rem;
    align-items: center;
    gap: 0.9375rem;
    background: var(--black, #000);
    border: 4px solid black;
    cursor: pointer;

    color: var(--white, #FFF);
    text-align: justify;
    /* S-bold-25 */
    font-family: Pretendard;
    font-size: 1.5625rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

    &:hover{
        background: white;
        color: black;
        transition: 0.3s;
    }
    &:active{
        transform: scale(0.95);
    }
`