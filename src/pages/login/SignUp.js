import Header from '../../components/common/HeaderNormal';
import styled from 'styled-components';
import { S_bold_25 } from '../../components/style/Styled';
import React, { useState } from 'react';

import "./Login.css";

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [nickname, setNickname] = useState('');
    const [blogname, setBlogname] = useState('');
    const [info, setInfo] = useState('');

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
            <Header/>
            <LoginInner>
                <form>
                    <Parent>
                            <FieldName>이메일</FieldName>
                                <div className="emailField"><div>이메일값</div></div>
                            <FieldName>닉네임</FieldName>
                                <div className="field"><input type='text' value={nickname} onChange={nicknameHandler}/></div>
                            <FieldName>블로그명</FieldName>
                                <div className="field"><input type='text' value={blogname} onChange={blognameHandler}/></div>
                            <FieldName>블로그 소개</FieldName>
                                <div className="field"><input type='text' value={info} onChange={infoHandler}/></div>
                    </Parent>
                
                    <StyledButton onClick={handleSubmit}> Sign In </StyledButton>
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