import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { M_regular_38, S_bold_25 } from '../../components/style/Styled';

const LoginItem = () => {
    const navigate = useNavigate();

    const handleClick = (e) =>   {
        switch(e.currentTarget.name) {
            case "signin" :
                navigate('/login');
                break;
            default:
        }
    }

    return (
        <Wrap>
            <div>매일 새로운 아티클을 구독해서 읽어보세요</div>
            <SignInBtn name="signin" onClick={handleClick}>로그인</SignInBtn>
        </Wrap>
    );
};

export default LoginItem;

const Wrap = styled(M_regular_38)`
    /* width: 100%; */
    width: 29.0625rem;
    height: 45.1875rem;
    font-size: 2rem;
    /* background-color: red; */
    display: flex;
    flex-direction: column;
    align-items: center;
    /* padding: 3.75rem 0rem 5.625rem 0rem; */
    padding: 9rem 6rem;
    gap: 1rem;
    /* gap: 20rem; */
    box-sizing: border-box;
    
`;

const SignInBtn = styled(S_bold_25).attrs({ as: 'button' })`
    /* flex-shrink: 0; */
    /* width: 15rem; */
    /* height: 3rem; */
    padding: 1rem 2.5rem;
    font-size: 1.5rem;
    background-color: var(--black);
    color: var(--white);

    border: 4px solid black;

    cursor: pointer;

    &:hover{
        background-color: white;
        color: black;
        transition: 0.5s;
    }

    &:active{
        transform: scale(0.95);
    }
`;
