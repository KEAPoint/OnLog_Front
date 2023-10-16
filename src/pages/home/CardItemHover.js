import React from 'react';
import styled from 'styled-components';
import { S_regular_30 } from '../../components/style/Styled';




const CardItemHover = ({info}) => {
    console.log(info);
    return (
        <HoverWrap>
            <Wrap>
            <Photo imgurl = {info.img}></Photo>
            <Contents>{info.contents}</Contents>
            <Date>{info.date}</Date>
            </Wrap>
        </HoverWrap>
    );
};

export default CardItemHover;

const HoverWrap = styled.div`
    width: 29.1rem;
    height: 33.1rem;
    padding: 5.625rem 0rem;

    // box-style
    border-radius: 1.875rem;


    margin: -5.625rem 0rem;
    background: var(--black);
`;

const Wrap = styled.div`
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    padding: 0rem 2.5rem;
    gap: 1.5rem;
    /* margin: -2rem 0rem -2rem 0rem; */


`;
const Photo = styled.div`
    width: 14.1875rem;
    height: 14.1875rem;
    background: ${props => `url(${props.imgurl}) lightgray 50% / cover no-repeat`};
`;
const Contents = styled(S_regular_30)`
    color: var(--white);
`;
const Date = styled(S_regular_30)`
    width: 22.3125rem;
    color: var(--gray-light);
    /* background-color: yellow; */
    /* display: flex; */
    /* justify-content: flex-start; */
`;
