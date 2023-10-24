import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import UserProfile, { Profile_Name,Profile_ProfileImg,Profile_Title,Profile_TitleWrap,Profile_Wrap } from '../../components/common/UserProfile';
import { IconWrap, L_semibold_40, M_regular_38, S_regular_30 } from '../../components/style/Styled';
import {ReactComponent as Heart} from '../../assets/images/Icons/Heart.svg';
import {ReactComponent as Comment} from '../../assets/images/Icons/Comment.svg';
import CardItemHover from './CardItemHover';
import SkeletonItem from './SkeletonItem';

const CardItem = ({info}) => {
    const [isHovering, setIsHovering] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    // Loading skeleton animation
    setTimeout(() => {
        setIsLoading(false);
    }, 2000);

    return (
        <PageWrap
            onMouseOver={() => setIsHovering(1)}
            onMouseOut={() => setIsHovering(0)} 
        >
            
            {!isHovering ? (
                <Wrap>
                    {isLoading ? (
                        <SkeletonItem/>
                    ) : (
                        <>
                        {/* <Main> */}
                            <UserProfile info={info}/>
        
                            <TextWrap>
                                <Title>{info.title}</Title>
                                <Date>{info.date}</Date>
                                <Category>#{info.category}</Category>
                            </TextWrap>
                        {/* </Main> */}
        
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
                </Wrap>
            ) : (
                // <Test></Test>
                // <>seojin</>
                <CardItemHover info={info}/>
            )}

        </PageWrap>

        
    );
};

export default CardItem;

const PageWrap = styled.div`
    
`;
const Wrap = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    width: 23.0625rem;
    height: 37.5625rem;

    padding: 1.875rem 1.25rem 3.75rem 1.25rem;
    box-sizing: border-box;
    
    // box style
    border-radius: 1.875rem;
    border: 0.5px solid var(--gray_bold, #4A4A4A);
    background: rgba(255, 255, 255, 0.70);
    box-shadow: 6px 7px 7px 0px rgba(0, 0, 0, 0.50);
`;

const Main = styled.div`
    background-color: pink;

    display: flex;
    flex-direction: column;
    gap: 9.125rem;
    
    padding: 0rem 3rem;

`;
export const TextWrap = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
`;
export const Title = styled(M_regular_38)`
    color: var(--black);
    word-break: break-all;

    display: -webkit-box;
    -webkit-line-clamp: 4; /* 원하는 라인 수 */
    -webkit-box-orient: vertical;
    overflow: hidden;

`;
export const Date = styled(S_regular_30)`
    color: var(--gray_bold, #4A4A4A);

`;
export const Category = styled(L_semibold_40)`
    color: var(--gray_bold, #4A4A4A);
`;
export const Second = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6.25rem;

`;
export const Icon = styled(S_regular_30)`
    display: flex;
    align-items: center;
`;


