import React from 'react';
import styled, { css } from 'styled-components';
import Profile from '../../assets/images/Profile.jpeg';

import { S_bold_25 } from '../style/Styled';

export const Profile_Wrap = styled(S_bold_25)`
    display: flex;
    align-items: center;
`;
export const Profile_ProfileImg = styled.div`
    width: 3.375rem;
    height: 3.375rem;
    border-radius: 2.5rem;
    /* background: url(${Profile}) lightgray 50% / cover no-repeat; */
    background: ${props => `url(${props.imgurl}) lightgray 50% / cover no-repeat`};



    margin-right: 0.94rem;
`;


export const Profile_TitleWrap = styled.div`
`;
export const Profile_Title = styled.div`
    text-align: justify;
`;
export const Profile_Name = styled.div`
    color: var(--gray_bold, #4A4A4A);
    text-align: justify;
    font-family: Pretendard;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.03375rem;
`;

const UserProfile = ({info}) => {
    return (
        <Profile_Wrap>
        <Profile_ProfileImg imgurl={info.profile}></Profile_ProfileImg>
        <Profile_TitleWrap>
            <Profile_Title>{info.blogName}</Profile_Title>
            <Profile_Name>{info.nickName}</Profile_Name>
        </Profile_TitleWrap>
        </Profile_Wrap>
    );
};

export default UserProfile;
