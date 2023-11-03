import React, { useEffect } from 'react';
import styled from 'styled-components';
import {ReactComponent as Logo} from '../../assets/images/Logo.svg';
import Profile from '../../assets/images/Profile.jpeg';
import { S_bold_19_2, S_bold_25, XS_bold_13, XS_regular_16 } from '../style/Styled';
import { Link, useNavigate } from 'react-router-dom';
import { Get_Profile } from '../../apis/API_Header';

const Header = () => {
    const accessToken = window.localStorage.getItem("accessToken");

    useEffect(() => {
        Get_Profile()
        .then((data) => {
            console.log(data);
        })
        .catch((error) => {
            console.error(error);
        });
    },[]);

    const navigate = useNavigate();
    const handleClick = (e) =>   {
            switch(e.currentTarget.name) {
                case "logo" :
                    navigate('/main');
                    break;
                case "signin" :
                    navigate('/login');
                    break;
                default:
            }
    }

    return (
        <Wrap>
            <LogoL to={'/'}>
                <Logo/>
            </LogoL>

            {accessToken ? (
                <MenuWrap>
                    <Menu>
                        <MenuL to={'/subscribed'}>구독</MenuL>
                        <Alarm>10</Alarm>
                    </Menu>
                    <Menu>
                        <MenuL to={'/notification'}>알림</MenuL>
                        <Alarm>21</Alarm>
                    </Menu>


                    {/* <UserProfile/> */}
                    <Menu>
                        <ProfileImg></ProfileImg>
                        <TitleWrap to={'/mypage'}>
                            <Title>Hani Tech World</Title>
                            <Name>@hanitech</Name>
                        </TitleWrap>
                        {/* <Video/> */}
                    </Menu>
                </MenuWrap>
            ):(
                <SignInBtn name="signin" onClick={handleClick}>Sign in</SignInBtn>

            )}
        </Wrap>
    );
};

export default Header;

const Wrap = styled.div`
    background: var(--white);
    padding: 1.2rem 6.25rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {

    }
`;
const LogoL = styled(Link)``;
const MenuWrap = styled.div`
    display: flex;
    gap: 2.5rem;
    align-items: center;
`;
const Menu = styled(S_bold_19_2)`
    display: flex;
    align-items: center;
`;
const MenuL = styled(Link)`
    text-decoration: none;
    color: var(--black);
`;
const ProfileImg = styled.div`
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 2.5rem;
    background: url(${Profile}) lightgray 50% / cover no-repeat;
    margin-right: 0.94rem;
`;
const Alarm = styled(XS_bold_13)`
    color: #F00;
    align-self: flex-start;
`;
const TitleWrap = styled(Link)`
    text-decoration: none;
    color: var(--black);
`;
const Title = styled.div`
    text-align: justify;
`;
const Name = styled(XS_regular_16)`
    color: var(—gray_bold, #4A4A4A);
    text-align: justify;
`;
const SignInBtn = styled(S_bold_25).attrs({ as: 'button' })`
    padding: 0.55rem 2.1875rem;
    font-size: 1rem;
    background-color: var(—black);
    color: var(—white);

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