import styled from "styled-components";
import { useState, useRef, useEffect, useCallback } from "react";
import React from "react";
import TextareaAutosize from 'react-textarea-autosize'; // npm install react-textarea-autosize


const ProfileEditPage = () =>{
    const [email, setEmail] = useState('');
    const [nickname, setNickname] = useState('');
    const [blogname, setBlogname] = useState('');
    const [info, setInfo] = useState('dddddddddddddddddddddddddddddddddddrrrrrrrrwwwllllllllllllllsmsmsmsmsmsmsmsmsmsm');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(nickname);
        alert(blogname);
        alert(info);
    };
    const onEmailHandler = (e) => {
        setEmail(e.currentTarget.value);
    }
    const nicknameHandler = (e) => {
        setNickname(e.currentTarget.value);
    }
    const blognameHandler = (e) => {
        setBlogname(e.currentTarget.value);
    }
    const infoHandler = (e) => {
        setInfo(e.currentTarget.value);
    }

    return(
        <div>
            <PageName>My Profile</PageName>
            <Wrap>
                <ProfileImageWrap>
                    <Image>

                    </Image>
                </ProfileImageWrap>

                <InfoWrap>
                    <Wrap2>
                        <Title> 이메일 </Title>
                        <Email>haniyong@gmail.com</Email>
                    </Wrap2>
                    <Wrap2>
                        <Title>닉네임</Title>
                        <NicknameWrap>
                            <NicknameBasic>@</NicknameBasic>
                            <NicknameInputEdit type='text' value={nickname} onChange={nicknameHandler}/>
                        </NicknameWrap>
                    </Wrap2>
                    <Wrap2>
                        <Title>블로그명</Title>
                        <InputEdit type='text' value={blogname} onChange={blognameHandler}/>
                    </Wrap2>
                    <Wrap2>
                        <Title>블로그 소개</Title>
                        <InfoEdit type='text' value={info} style={{ overflow: 'hidden' }} onChange={infoHandler}/>
                    </Wrap2>
                    <Wrap2 style={{alignItems:'flex-end'}}>
                        <SubmitButton onClick={handleSubmit}>Submit</SubmitButton>
                    </Wrap2>
                </InfoWrap>
            </Wrap>
        </div>
    );
};

export default ProfileEditPage;

const PageName = styled.div`
    display: flex;
    padding: 0rem 0rem 1.25rem 6.25rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.625rem;
    align-self: stretch;

    color: var(--black, #000);

    /* L-bold-45 */
    font-family: Pretendard;
    font-size: 2.8125rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`

const Wrap = styled.div`
    // display: flex;
    // padding: 3.75rem 8rem;
    // justify-content: space-between;
    // align-items: flex-start;
    // align-content: flex-start;
    // // row-gap: 3.75rem;
    // align-self: stretch;
    // flex-wrap: wrap;

    display: flex;
    padding: 3.75rem 8rem;
    justify-content: center;
    align-items: center;
    // row-gap: 3.75rem;
    align-self: stretch;
    flex-wrap: wrap;
`
const ProfileImageWrap = styled.div`
    display: flex;
    padding: 2rem 5rem;
    align-items: center;
    gap: 1.25rem;
`
const Image = styled.img`
    width: 28.125rem;
    height: 28.125rem;
    border-radius: 23.125rem;
    background: url(<path-to-image>), lightgray 50% / cover no-repeat;
`

const InfoWrap = styled.div`
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
const Title = styled.div`
    width: 8.4375rem;
    height: 1.75rem;
    color: var(--gray_bold, #4A4A4A);

    /* S-bold-25 */
    font-family: Pretendard;
    font-size: 1.5625rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`
const Email = styled.div`
    display: flex;
    padding: 0.6875rem 1.4375rem;
    align-items: center;
    gap: 0.625rem;
    align-self: stretch;
    border-bottom: 1.5px solid var(--gray_bold, #4A4A4A);
    color: var(--gray_light, #939393);

    /* S-regular_30(txt) */
    font-family: Pretendard;
    font-size: 1.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 3.125rem; /* 166.667% */
    letter-spacing: 0.01875rem;
`

const NicknameWrap = styled.div`
    display: flex;
    padding: 0.6875rem 1.4375rem;
    align-items: center;
    gap: 0.625rem;
    align-self: stretch;
    border-bottom: 1.5px solid var(--gray_bold, #4A4A4A);
`
const NicknameBasic = styled.div`
    color: var(--gray_light, #939393);

    /* S-regular_30(txt) */
    font-family: Pretendard;
    font-size: 1.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 3.125rem; /* 166.667% */
    letter-spacing: 0.01875rem;
`
const NicknameInputEdit = styled.input`
    border:none;
    color: var(--gray_bold, #4A4A4A);
    width: 40rem;

    /* S-regular_30(txt) */
    font-family: Pretendard;
    font-size: 1.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 3.125rem; /* 166.667% */
    letter-spacing: 0.01875rem;
`
const InputEdit = styled.input`
width: 44.625rem;
    display: flex;
    padding: 0.6875rem 1.4375rem;
    align-items: center;
    gap: 0.625rem;
    align-self: stretch;
    border: none;
    border-bottom: 1.5px solid var(--gray_bold, #4A4A4A);

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

const SubmitButton = styled.button`
    border:none;
    display: flex;
    padding: 0.75rem 4.0625rem;
    align-items: center;
    gap: 0.9375rem;
    background-color: black;
    color: var(--white, #FFF);
    text-align: justify;

    cursor: pointer;

    /* S-bold-25 */
    font-family: Pretendard;
    font-size: 1.5625rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

    &:hover{
        background-color: white;
        color: black;
        border: 4px solid var(--black, #000);
    }
    &:active{
        box-shadow: 1px 1px 0 rgb(0,0,0,0.5);
        position: relative;
        top:2px;
    }
`