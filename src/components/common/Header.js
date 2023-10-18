import React from 'react';
import styled from 'styled-components';
import Logo from '../../assets/images/Logo.png';
import Profile from '../../assets/images/Profile.jpeg';
import { S_bold_25, XS_bold_13 } from '../style/Styled';
import UserProfile from './UserProfile';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <Wrap>
            <LogoL to={'/'}>
                <img src={Logo} style={{width:'6.875rem', height:'3.375rem'}}/>
            </LogoL>
            {/* 로그인 O */}
            <MenuWrap>
                <Menu>
                    <MenuL to={'/mypage/post'}>Subscribed</MenuL>
                    <Alarm>21</Alarm>
                </Menu>
                <Menu>
                    Notification
                    <Alarm>21</Alarm>
                </Menu>


                {/* <UserProfile/> */}
                <Menu>
                    <ProfileImg></ProfileImg>
                    <TitleWrap>
                        <Title>Hani Tech World</Title>
                        <Name>@hanitech</Name>
                    </TitleWrap>
                </Menu>
            </MenuWrap>
        </Wrap>
    );
};

export default Header;

const Wrap = styled.div`
    background: var(--white);
    padding: 1.88rem 6.25rem;    
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {

    }
`;
const LogoL = styled(Link)``;
const MenuWrap = styled.div`
    display: flex;
    gap: 3.62rem;
    align-items: center;
`;
const Menu = styled(S_bold_25)`
    display: flex;
    align-items: center;
`;
const MenuL = styled(Link)`
    text-decoration: none;
    color: var(--black);
`;
const ProfileImg = styled.div`
    width: 3.375rem;
    height: 3.375rem;
    border-radius: 2.5rem;
    background: url(${Profile}) lightgray 50% / cover no-repeat;
    margin-right: 0.94rem;
`;
const Alarm = styled(XS_bold_13)`
    color: #F00;
    align-self: flex-start;
`;
const TitleWrap = styled.div`
`;
const Title = styled.div`
    text-align: justify;
`;
const Name = styled.div`
    color: var(--gray_bold, #4A4A4A);
    text-align: justify;
    font-family: Pretendard;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.03375rem;
`;
