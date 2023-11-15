import styled from "styled-components";
import { useState, useRef, useEffect, useCallback } from "react";
import React from "react";
import TextareaAutosize from 'react-textarea-autosize'; // npm install react-textarea-autosize
import Header from '../../components/common/Header';
import Profile from "../../assets/images/Profile.jpeg"
import { L_bold_32, S_bold_19_2, S_regular_20, S_regular_30 } from "../../components/style/Styled";
import { Get_Profile, Put_Profile } from "../../apis/API_MyPage";
import { useDispatch } from "react-redux";
import { profileAction } from "../../store/actions/profile";

const ProfileEditPage = () =>{
    const dismatch = useDispatch();

    const [user, setUser] = useState({
        blogName: "",
        nickName:"",
        profileImg:"",
        info: "",
        email: ""
    });

    useEffect(() => {
        Get_Profile()
        .then((data) => {
            console.log(data.data)
            setUser({
                ...user,
                // blogId는 안해도 될듯?
                blogName: data.data.blogName,
                nickName: data.data.blogNickname,
                profileImg: data.data.blogProfileImg,
                info: data.data.blogIntro,
                // email: data.data.email,
            })

        })
    },[]);

    const handleChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("handleSubmit")
        // console.log(user);
        Put_Profile(user)
        .then(() => {
            dismatch(
                profileAction({
                    blogName: user.blogName,
                    nickName: user.nickName,
                    profileImg: user.profileImg,
                    info: user.info,
                })
            )
        })
        .catch((error) => {
            console.log(error)
        })


    };


    return(
        <div>
            <Header/>
            <PageName>My Profile</PageName>
            <Wrap>
                <ProfileImageWrap>
                    <Image/>
                </ProfileImageWrap>
                
                <FormWrap onSubmit={handleSubmit}>
                    <Wrap2>
                        <Title> 이메일 </Title>
                        <Email>seojinangel@naver.com</Email>
                    </Wrap2>
                    <Wrap2>
                        <Title>닉네임</Title>
                        <NicknameWrap>
                            <NicknameBasic>@</NicknameBasic>
                            <NicknameInputEdit name='nickName' type='text' value={user.nickName} onChange={handleChange} />
                        </NicknameWrap>
                    </Wrap2>
                    <Wrap2>
                        <Title>블로그명</Title>
                        <InputEdit name='blogName' type='text' value={user.blogName} onChange={handleChange} />
                    </Wrap2>
                    <Wrap2>
                        <Title>블로그 소개</Title>
                        <S_regular_30 style={{color:"var(--gray_bold, #4A4A4A)"}}>
                            <InfoEdit name='info' type='text' value={user.info} style={{ overflow: 'hidden' }} onChange={handleChange} />
                        </S_regular_30>
                    </Wrap2>
                    <Wrap2 style={{alignItems:'flex-end'}}>
                        <SubmitButton type="submit">변경 완료</SubmitButton>
                    </Wrap2>
                </FormWrap>
            </Wrap>
        </div>
    );
};

export default ProfileEditPage;

const PageName = styled(L_bold_32)`
    display: flex;
    padding: 0rem 0rem 1.25rem 6.25rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.625rem;
    align-self: stretch;

    color: var(--black, #000);
`

const Wrap = styled.div`
    display: flex;
    padding: 3.75rem 8rem;
    justify-content: space-between;
    align-items: flex-start;

`
const ProfileImageWrap = styled.div`
    display: flex;
    padding: 0rem 2.5rem;
    align-items: center;
    gap: 1.25rem;
`
const Image = styled.img`
    width: 28.125rem;
    height: 28.125rem;
    border-radius: 25rem;
    background: url(${Profile}) lightgray 50% / cover no-repeat;
    margin-right: 0.94rem;
`

const FormWrap = styled.form`
    display: flex;
    width: 47.5rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2.0625rem;
`
const Wrap2 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5625rem;
    align-self: stretch;
`
const Title = styled(S_bold_19_2)`
    width: 8.4375rem;
    height: 1.75rem;
    color: var(--gray_bold, #4A4A4A);
`
const Email = styled(S_regular_20)`
    display: flex;
    padding: 0.6875rem 1.4375rem;
    align-items: center;
    gap: 0.625rem;
    align-self: stretch;
    border-bottom: 1.5px solid var(--gray_bold, #4A4A4A);
    color: var(--gray_light, #939393);
`

const NicknameWrap = styled(S_regular_20)`
    display: flex;
    padding: 0.6875rem 1.4375rem;
    align-items: center;
    gap: 0.625rem;
    align-self: stretch;
    border-bottom: 1.5px solid var(--gray_bold, #4A4A4A);
`
const NicknameBasic = styled(S_regular_20)`
    color: var(--gray_light, #939393);
`
const NicknameInputEdit = styled(S_regular_20).attrs({as:'input'})`
    border:none;
    color: var(--gray_bold, #4A4A4A);
    width: 40rem;
`
const InputEdit = styled(S_regular_20).attrs({as:'input'})`
width: 44.625rem;
    display: flex;
    padding: 0.6875rem 1.4375rem;
    align-items: center;
    gap: 0.625rem;
    align-self: stretch;
    border: none;
    border-bottom: 1.5px solid var(--gray_bold, #4A4A4A);

    color: var(--gray_bold, #4A4A4A);


    &:hover{
        /* background-color: #e5e5e5; */
        box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.05);
    }
`
const InfoEdit = styled(TextareaAutosize)`
width: 44.625rem;
    display: flex;
    padding: 0.6875rem 1.4375rem;
    align-items: center;
    gap: 0.625rem;
    align-self: stretch;
    border: none;
    border-bottom: 1.5px solid var(--gray_bold, #4A4A4A);

    resize: none;

    color: var(--gray_bold, #4A4A4A);

    /* S-regular_30(txt) */
    font-family: Pretendard;
    font-size: 1.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 3.125rem; /* 166.667% */
    letter-spacing: 0.01875rem;

    &:hover{
        /* background-color: #e5e5e5; */
        box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.05);
    }
`

const SubmitButton = styled(S_bold_19_2).attrs({as:'button'})`
    border:4px solid black;
    display: flex;
    padding: 0.75rem 4.0625rem;
    align-items: center;
    gap: 0.9375rem;
    background-color: black;
    color: var(--white, #FFF);
    text-align: justify;

    cursor: pointer;

    &:hover{
        background-color: white;
        color: black;
    }
    &:active{
        transform: scale(0.95);
    }
`