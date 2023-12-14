import React, { useCallback } from 'react';
import styled from 'styled-components';
import { ReactComponent as LogoText } from '../../assets/images/LogoText.svg';
import { landingData } from '../../assets/datas/categoryData';
import LandItem from './LandItem';
import Footer from '../../components/common/Footer';
import { useNavigate } from 'react-router-dom';
import { SBold25 } from '../../components/style/Styled';

const LandingPage = () => {
    const accessToken = window.localStorage.getItem("accessToken");
    const navigate = useNavigate();

    const handleClick = useCallback((e) => {
        if (e.currentTarget.name === "signin") navigate('/login');
    }, [navigate]);

    const landItems = useCallback(() => landingData.map(item => <LandItem key={item.id} info={item}/>), []);

    return (
        <div style={{padding:"1rem"}}>
            <FixWrap>
                <LogoFix/>
                {accessToken === null && <SignInBtn name="signin" onClick={handleClick}>로그인</SignInBtn>}
            </FixWrap>
            <Wrap>
                {landItems}
            </Wrap>
            <Footer/>
        </div>
    );
};

export default LandingPage;

const FixWrap = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    display: flex;
    flex-direction: column;
    align-items: center;
`;
const LogoFix = styled(LogoText)`
`;

const SignInBtn = styled(SBold25).attrs({ as: 'button' })`
    padding: 1rem 4rem;
    font-size: 1.5rem;
    background-color: var(--white);
    color: var(--black);
    border: 4px solid black;

    cursor: pointer;

    &:hover{
        background-color: var(--black);
        color: var(--white);
        transition: 0.5s;
    }

    &:active{
        transform: scale(0.95);
    }
`;
const Wrap = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 29.0625rem);
    justify-content: center;
    gap: 0.62rem;
`;



