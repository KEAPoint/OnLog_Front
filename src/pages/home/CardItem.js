import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import UserProfile, { Profile_Name,Profile_ProfileImg,Profile_Title,Profile_TitleWrap,Profile_Wrap } from '../../components/common/UserProfile';
import { L_semibold_40, XS_semibold_16, S_bold_17, S_bold_19_2 } from '../../components/style/Styled';
import {ReactComponent as Heart} from '../../assets/images/Icons/Heart.svg';
import {ReactComponent as Comment} from '../../assets/images/Icons/Comment.svg';
import CardItemHover from './CardItemHover';
import SkeletonItem from './SkeletonItem';
import { useSelector } from 'react-redux';

const CardItem = ({item}) => {
    // const specificData = useSelector(state => state.cards.cards); 
    // const item = useSelector(state => state.cards.cards.find(card => card.postId === postId));
    // const item = data;

    const profileInfo = {
        blogName: item.writer.blogName,
        blogNickname: item.writer.blogNickname,
        blogProfileImg: item.writer.blogProfileImg
    };
    const hoverInfo = {
        thumbnailLink: item.thumbnailLink,
        summary: item.summary
    }

    const [isHovering, setIsHovering] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    //Loading skeleton animation
    useEffect(() => {
        if (item) {
            setIsLoading(false);
        }
    }, [item]);

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
                            <UserProfile item={profileInfo}/>
        
                            <TextWrap>
                                <Title>{item.title}</Title>
                            </TextWrap>
                            <DateWrap>{new Date(item.createdAt).toISOString().split('T')[0].replace(/-/g, '.')}</DateWrap>
                            <Second>
                                <Icon>
                                    <Heart style={{paddingRight:"1rem"}}/>
                                    <p>{item.likesCount}</p>
                                </Icon>
                                <Icon>
                                    <Comment style={{paddingRight:"1rem"}}/>
                                    <p>{item.commentsCounts}</p>
                                </Icon>
                            </Second>
                        </>
                    )}  
                </Wrap>
            ) : (
                <CardItemHover key={item.postId} item={hoverInfo}/>
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

    width: 15.1875rem;
    height: 23.625rem;
    padding: 1.875rem 1.25rem;
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
export const Title = styled(S_bold_19_2)`
    color: var(--black);
    word-break: break-all;

    display: -webkit-box;
    -webkit-line-clamp: 4; /* 원하는 라인 수 */
    -webkit-box-orient: vertical;
    overflow: hidden;

`;
export const DateWrap = styled(XS_semibold_16)`
    color: var(—gray_bold, #4A4A4A);

`;
export const Category = styled(L_semibold_40)`
    color: var(—gray_bold, #4A4A4A);
`;
export const Second = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.25rem;
`;
export const Icon = styled(S_bold_17)`
    display: flex;
    align-items: center;
    justify-content: center;

    p  {
        font-size: 1.0625rem;

    }
`;


