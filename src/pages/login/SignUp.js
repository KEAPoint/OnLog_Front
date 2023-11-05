import Header from '../../components/common/HeaderLogoOnly';
import styled from 'styled-components';
import { S_bold_25 } from '../../components/style/Styled';
import React, { useState } from 'react';

import "./Login.css";
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const {user} = useSelector((state) => state.profile); 
    const navigate = useNavigate();
    console.log(user.email)
    // console.log(user.email, user.userId);
    // console.log(user ? user.email : 'User not defined'); 


    const handleSubmit = async (e) => {
        e.preventDefault();
        const nickname = e.target.elements.nickname.value;
        const blogname = e.target.elements.blogname.value;
        const info = e.target.elements.info.value;

        if(!nickname || !blogname || !info) {
            alert('빈칸채워라');
            return;
        } else {

            try {
                const url = '/blog';
                const res = await axios({
                    method:"put",
                    url: url,
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
                    },
                    data: {
                        blogId: user.userId,
                        blogName: blogname,
                        blogNickname: nickname,
                        blogIntro: info 
                    }
                });

                console.log("signup")
                console.log(user.userId);
                console.log(res.data);
                if(res.data.success) {
                    navigate('/main');
                } else {
                    console.log("회원가입 서버 에러");
                }

            } catch(error) {
                console.log(error);
            }
    }

    };

    return(
        <div>
            <Header/>
            <LoginInner>
                <form onSubmit={handleSubmit}>
                    <Parent>
                            <FieldName>이메일</FieldName>
                                <div className="emailField">
                                    <div>{user.email}</div>
                                </div>
                            <FieldName>닉네임</FieldName>
                                <div className="field">
                                    <input type='text' name='nickname'/>
                                </div>
                            <FieldName>블로그명</FieldName>
                                <div className="field">
                                    <input type='text' name='blogname'/>
                                </div>
                            <FieldName>블로그 소개</FieldName>
                                <div className="field">
                                    <input type='text' name='info'/>
                                </div>
                    </Parent>
                
                    <StyledButton type='submit'> Sign In </StyledButton>
                </form>
            </LoginInner>
        </div>
    );
};

export default SignUp;

const Wrap = styled.div`
    padding: 7.125rem 6.25rem 0rem 6.25rem;
    display: grid;

    grid-template-columns: repeat(3, 29.0625rem);
    /* grid-template-rows: repeat(3, 45.1875rem); */
    /* grid-template-columns: 1fr 1fr 1fr; */

    justify-content: center;
    gap: 0.62rem;
`;
export const LoginInner = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5rem 36.25rem 0rem;
`;

export const Parent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-4xs);
`;
const FieldName = styled(S_bold_25)`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-top: 30px;
    gap: 0.5625rem;
    align-self: stretch;
    color: var(--gray_bold, #4A4A4A);

`
const StyledButton = styled.button`
    width: 15.375rem;
    height: 3.375rem;
    margin-top: 20px;
    position: relative;
    float: right;
    color: var(--white, #FFF);
    font-size: 20px;
    background-color: black;
    font-weight : 700;
    font-family: Pretendard;
    font-size: 1.5625rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    // transition: 0.3s all;
    border : none;

    &:active,
    &:hover,
    &:focus {
     background: white;
     color: black;
     border: 4px solid var(--black, #000);
    }

    &:disabled {
     cursor: default;
     opacity: 0.5;
    background: var(--button-bg-color, #025ce2);
    }   
`;