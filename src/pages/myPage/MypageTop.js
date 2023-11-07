import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { L_bold_32, S_bold_19_2, S_bold_25, S_regular_20_8, S_regular_30 } from '../../components/style/Styled';
import HaniProfile from '../../assets/images/Profile.jpeg';
import { Get_Profile } from "../../apis/API_MyPage";
import { useEffect, useState } from "react";

const MypageTop = () => {
    const navigate = useNavigate();
    const [profile, setProfile] = useState({}); 

    useEffect(() => {
        Get_Profile()
        .then((data) => {

            setProfile({
                ...profile,
                blogId: data.data.blogName,
                blogName: data.data.blogName,
                blogNickname: data.data.blogNickname,
                blogProfileImg: data.data.blogProfileImg,
                likeCount: data.data.likeCount,
                postCount: data.data.postCount,
                subscriberCount: data.data.subscriberCount,
                blogIntro: data.data.blogIntro,

            })
        })
        .catch((error) => {
            console.log(error);
        });
    },[]);
    

    const handlePostButtonClick = (e) => {
        e.preventDefault();
        navigate('/mypage/postwrite');
    };
    const handleEditButtonClick = (e) => {
        e.preventDefault();
        navigate('/mypage/edit');

    };

    return (
        <PageWrap>
            <Wrap1>
                <Left>
                    <Menu>
                        <ProfileImg $proflieImg={profile.blogProfileImg}/>
                        <TitleWrap>
                            <BlogTitle>{profile.blogName}</BlogTitle>
                            <Name>@{profile.blogNickname}</Name>
                        </TitleWrap>
                    </Menu>
                </Left>

                <Right>
                    <Box>
                        <Title> 작성한 글 </Title>
                        <Num>{profile.postCount}</Num>
                    </Box>
                    <Box>
                        <Title> 좋아요 수 </Title>
                        <Num>{profile.likeCount}</Num>
                    </Box>
                    <Box style={{borderRight:"none"}}>
                        <Title> 구독자 수 </Title>
                        <Num>{profile.subscriberCount}</Num>
                    </Box>
                </Right>
            </Wrap1>
            <Wrap2>
                <ProfileInfo>
                    {profile.blogIntro}
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
    background: ${props => `url(${props.proflieImg}) lightgray 50% / cover no-repeat`};
    margin-right: 2.81rem;
`;
const TitleWrap = styled.div`
    display: flex; 
    flex-direction: column;
`;
const BlogTitle = styled(L_bold_32)`
    color: var(--black, #000);
`;
const Name = styled(S_regular_30)`
    color: var(--gray_bold, #4A4A4A);
    text-align: justify;
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
const Title = styled(S_regular_20_8)`
    color: var(--gray_bold, #4A4A4A);
    text-align: justify;

`
const Num = styled(L_bold_32)`
    color: var(--black, #000);
    text-align: justify;


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
const ProfileInfo = styled(S_regular_30)`
    color: var(--gray_bold, #4A4A4A);

`
const Button = styled(S_bold_19_2).attrs({as:'button'})`
    display: flex;
    padding: 0.75rem 6.03125rem;
    align-items: center;
    gap: 0.9375rem;
    background: var(--black, #000);
    border: 4px solid black;
    cursor: pointer;

    color: var(--white, #FFF);
    text-align: justify;


    &:hover{
        background: white;
        color: black;
        transition: 0.3s;
    }
    &:active{
        transform: scale(0.95);
    }
`