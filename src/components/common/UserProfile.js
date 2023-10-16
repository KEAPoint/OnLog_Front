import React from 'react';
import styled, { css } from 'styled-components';
import Profile from '../../assets/images/Profile.jpeg';

import { S_bold_25 } from '../style/Styled';

const UserProfile = ({info}) => {
    return (
        <Wrap>
            <ProfileImg imgurl={info.profile}></ProfileImg>
            <TitleWrap>
                <Title>{info.blogName}</Title>
                <Name>{info.nickName}</Name>
            </TitleWrap>
        </Wrap>
    );
};

export default UserProfile;

const Wrap = styled(S_bold_25)`
    display: flex;
    align-items: center;
`;
const ProfileImg = styled.div`
    width: 3.375rem;
    height: 3.375rem;
    border-radius: 2.5rem;
    /* background: url(${Profile}) lightgray 50% / cover no-repeat; */
    background: ${props => `url(${props.imgurl}) lightgray 50% / cover no-repeat`};



    margin-right: 0.94rem;
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