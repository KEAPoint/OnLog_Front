import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import UserProfile, { Profile_Name,Profile_ProfileImg,Profile_Title,Profile_TitleWrap,Profile_Wrap } from '../../components/common/UserProfile';
import { IconWrap, L_semibold_40, M_regular_38, S_regular_30 } from '../../components/style/Styled';
import {ReactComponent as Heart} from '../../assets/images/Icons/Heart.svg';
import {ReactComponent as Comment} from '../../assets/images/Icons/Comment.svg';
import CardItemHover from './CardItemHover';

const CardItem = ({info}) => {
    const [isHovering, setIsHovering] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    // Loading skeleton animation
    setTimeout(() => {
        setIsLoading(false);
    }, 2000);

    return (
        <Wrap
            onMouseOver={() => setIsHovering(1)}
            onMouseOut={() => setIsHovering(0)}
        >
            {!isLoading ? (
                <>
                    {isHovering ? (
                        <CardItemHover info={info}/>
                    ) : (
                        <>
                            <Main>
                                <UserProfile info={info}/>

                                <TextWrap>
                                    <Title>{info.title}</Title>
                                    <Date>{info.date}</Date>
                                    <Category>#{info.category}</Category>
                                </TextWrap>
                            </Main>

                            <Second>
                                <Icon>
                                    <IconWrap><Heart/></IconWrap>
                                    <p>999</p>
                                </Icon>
                                <Icon>
                                    <IconWrap><Comment/></IconWrap>
                                    <p>100</p>
                                </Icon>
                            </Second>    
                        </>
                    )}
                </>
            ) : (
                
                // <SkeletonItem width="29.0625rem" height="45.1875rem"/>
                <>
                <Main>
                    {/* <UserProfile info={info}/> */}
                    <Profile_Wrap>
                        <Profile_ProfileImg2>
                            <SkeletonItem width="3rem" height="3rem" borderRadius="2.5rem"/>
                        </Profile_ProfileImg2>
                        <Profile_TitleWrap>
                            <Profile_Title><SkeletonItem width="12rem" height="2rem"/></Profile_Title>
                            <Profile_Name><SkeletonItem width="5.5rem" height="1rem"/></Profile_Name>
                        </Profile_TitleWrap>
                    </Profile_Wrap>


                    <TextWrap>
                        <Title><SkeletonItem width="22rem" height="6rem"/></Title>
                        <Date><SkeletonItem width="7rem" height="3rem"/></Date>
                        <Category><SkeletonItem width="10rem" height="3rem"/></Category>
                    </TextWrap>
                </Main>

                <Second>
                    <Icon>
                        <SkeletonItem width="6.5rem" height="2rem"/>
                    </Icon>
                    <Icon>
                        <SkeletonItem width="6.5rem" height="2rem"/>
                    </Icon>
                </Second>    
            </>
            )}
        </Wrap>

        
    );
};

export default CardItem;
const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /* align-items: center; */


    width: 29.1rem;
    height: 33.1rem;
    padding: 5.625rem 0rem;

    // box style
    border-radius: 1.875rem;
    border: 0.5px solid var(--gray_bold, #4A4A4A);
    background: rgba(255, 255, 255, 0.70);
    /* background-color: red; */
    box-shadow: 6px 7px 7px 0px rgba(0, 0, 0, 0.50);


    // display: flex;
    // flex-direction: column;
    // // justify-content: space-between;
    // /* align-items: center; */


    // width: 329px;
    // height: 511px;
    // padding: 60px 20px;

    // // box style
    // border-radius: 1.875rem;
    // border: 0.5px solid var(--gray_bold, #4A4A4A);
    // background: rgba(255, 255, 255, 0.70);
    // /* background-color: red; */
    // box-shadow: 6px 7px 7px 0px rgba(0, 0, 0, 0.50);
`;

const Main = styled.div`
    display: flex;
    flex-direction: column;
    gap: 9.125rem;
    
    padding: 0rem 3rem;

`;
const TextWrap = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
`;
const Title = styled(M_regular_38)`
    color: var(--black);
`;
const Date = styled(S_regular_30)`
    color: var(--gray_bold, #4A4A4A);

`;
const Category = styled(L_semibold_40)`
    color: var(--gray_bold, #4A4A4A);
`;
const Second = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6.25rem;

`;
const Icon = styled(S_regular_30)`
    display: flex;
    align-items: center;
`;


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
const SkeletonItem = styled.div`
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