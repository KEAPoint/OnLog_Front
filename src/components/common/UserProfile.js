import React from 'react';
import styled, { css } from 'styled-components';
import Profile from '../../assets/images/Profile.jpeg';

import { S_bold_17, XS_regular_16 } from '../style/Styled';

export const Profile_Wrap = styled(S_bold_17)`
    display: flex;
    /* justify-content: center; */
    /* align-content: center; */
`;
export const Profile_ProfileImg = styled.div`
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 2.5rem;
    background: ${props => `url(${props.$imgurl}) lightgray 50% / cover no-repeat`};
    flex-shrink: 0;
    margin-right: 0.94rem;
`;


export const Profile_TitleWrap = styled.div`
    display: flex;
    flex-direction: column;
    
    justify-content: center;
    align-content: center;
`;
export const Profile_Title = styled.div`
    /* text-align: justify; */
    word-break: break-all;

`;
export const Profile_Name = styled(XS_regular_16)`
    color: var(--gray_bold, #4A4A4A);
    text-align: left;
`;

const UserProfile = ({item}) => {
    // console.log(item)
    return (
        <Profile_Wrap>
            <Profile_ProfileImg $imgurl={item.blogProfileImg}></Profile_ProfileImg>
            <Profile_TitleWrap>
                <Profile_Title>{item.blogName}</Profile_Title>
                <Profile_Name>@{item.blogNickname}</Profile_Name>
            </Profile_TitleWrap>
        </Profile_Wrap>
    );
};

export default UserProfile;
