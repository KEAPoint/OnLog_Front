import React, { useState } from 'react';
import styled from 'styled-components';
import UserProfile from '../../components/common/UserProfile';
import { IconWrap, L_semibold_40, M_regular_38, S_regular_30 } from '../../components/style/Styled';
import {ReactComponent as Heart} from '../../assets/images/Icons/Heart.svg';
import {ReactComponent as Comment} from '../../assets/images/Icons/Comment.svg';
import CardItemHover from './CardItemHover';

const CardItem = ({info}) => {
    const [isHovering, setIsHovering] = useState(0);
    
    return (
        
        <Wrap
            onMouseOver={() => setIsHovering(1)}
            onMouseOut={() => setIsHovering(0)}
        >

            {isHovering ? (
                <>
                    <CardItemHover info={info}/>
                </>
            ):(
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





