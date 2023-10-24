import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Category, Date, Icon, Second, TextWrap, Title } from './CardItem';
import { IconWrap } from '../../components/style/Styled';
import { Profile_Name, Profile_ProfileImg, Profile_Title, Profile_TitleWrap, Profile_Wrap } from '../../components/common/UserProfile';

const SkeletonItem = () => {
    return (
        <div>
            {/* <Main> */}
                {/* <UserProfile info={info}/> */}
                <Profile_Wrap>
                    <Profile_ProfileImg2>
                        <Skeleton width="3rem" height="3rem" borderRadius="2.5rem"/>
                    </Profile_ProfileImg2>
                    <Profile_TitleWrap>
                        <Profile_Title><Skeleton width="12rem" height="2rem"/></Profile_Title>
                        <Profile_Name><Skeleton width="5.5rem" height="1rem"/></Profile_Name>
                    </Profile_TitleWrap>
                </Profile_Wrap>
                
                <TextWrap>
                    <Title><Skeleton width="22rem" height="6rem"/></Title>
                    <Date><Skeleton width="7rem" height="3rem"/></Date>
                    <Category><Skeleton width="10rem" height="3rem"/></Category>
                </TextWrap>
            {/* </Main> */}

            <Second>
                <Icon>
                    <Skeleton width="6.5rem" height="2rem"/>
                </Icon>
                <Icon>
                    <Skeleton width="6.5rem" height="2rem"/>
                </Icon>
            </Second>   
        </div>
    );
};

export default SkeletonItem;

///////
// Skeleton loading animation keyframes
const Profile_ProfileImg2 = styled(Profile_ProfileImg)`
    background: none;
`;

const skeletonAnimation = keyframes`
    0% {
        background-color: rgba(0, 0, 0, 0.05);
    }
  
    50% {
        background-color: rgba(0, 0, 0, 0.15);
    }
  
  	100% {
    	background-color: rgba(255,255 ,255 , .7)
  	}
`;

// Skeleton item component for loading animation
const Skeleton = styled.div`
  	width: ${({ width }) => width || '100%'};
	height: ${({ height }) => height || '1rem'};
	border-radius: ${({ borderRadius }) => borderRadius || '4px'};
	background-color: var(--gray_bold); /* Or any desired color */
	animation-duration: ${({ duration }) => duration || '1s'};
	animation-fill-mode: ${({ fillMode }) => fillMode || 'forwards'};
	animation-iteration-count: infinite;
	animation-name: ${skeletonAnimation};
	animation-timing-function: linear;
	margin-bottom:${({ marginBottom })=>marginBottom||'10px'}
`;