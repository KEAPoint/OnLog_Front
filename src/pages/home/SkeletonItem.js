import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Category, Date, Icon, Second, TextWrap, Title } from './CardItem';
import { IconWrap } from '../../components/style/Styled';
import { Profile_Name, Profile_ProfileImg, Profile_Title, Profile_TitleWrap, Profile_Wrap } from '../../components/common/UserProfile';

const SkeletonItem = () => {
    return (
        <Wrap>
            {/* <Main> */}
                {/* <UserProfile info={info}/> */}
                <Profile_Wrap>
                    <Profile_ProfileImg2>
                        <Skeleton width="2.5rem" height="2.5rem" $borderRadius="2.5rem"/>
                    </Profile_ProfileImg2>
                    <Profile_TitleWrap>
                        <Profile_Title><Skeleton width="8rem" height="1.1rem"/></Profile_Title>
                        <Profile_Name><Skeleton width="5.5rem" height="1.1rem"/></Profile_Name>
                    </Profile_TitleWrap>
                </Profile_Wrap>
                
                <TextWrap>
                    <Title><Skeleton width="100%" height="5rem"/></Title>
                </TextWrap>
                <Date><Skeleton width="5rem" height="1rem"/></Date>
                <Second>
                    <Icon>
                    <Skeleton width="5rem" height="2rem"/>
                    </Icon>
                    <Icon>
                    <Skeleton width="5rem" height="2rem"/>
                    </Icon>
                </Second>
        </Wrap>
    );
};

export default SkeletonItem;

///////
// Skeleton loading animation keyframes
const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;
`;
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
	height: ${({ height }) => height || '100%'};
	border-radius: ${({ borderRadius }) => borderRadius || '4px'};
	background-color: var(--gray_bold); /* Or any desired color */

	animation-duration: ${({ duration }) => duration || '1s'};
	animation-fill-mode: ${({ fillMode }) => fillMode || 'forwards'};
	animation-iteration-count: infinite;
	animation-name: ${skeletonAnimation};
	animation-timing-function: linear;
	margin-bottom:${({ $marginBottom })=>$marginBottom||'5px'}
`;