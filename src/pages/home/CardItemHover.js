import React from 'react';
import styled from 'styled-components';
import { S_bold_28, S_regular_30, XS_regular_18 } from '../../components/style/Styled';
import Arrow from '../../assets/images/Icons/Arrow.png';

const CardItemHover = ({info}) => {
    return (
        <HoverWrap>
            <Wrap>
                <Photo imgurl = {info.img}></Photo>
                <Contents>{info.contents}</Contents>
                <ReadWrap>
                   <p>Read</p> 
                   <img src={Arrow} alt="arrow" /> 
                </ReadWrap>
            </Wrap>
        </HoverWrap>
    );
};

export default CardItemHover;

const HoverWrap = styled.div`
    width: 23.0625rem;
    height: 37.5625rem;
    padding: 1.875rem 2.5rem;
    box-sizing: border-box;

    background-color: var(--black);
    border-radius: 1.875rem;
`;

const Wrap = styled.div`
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 0.94rem;
`;
    

const Photo = styled.div`
    width: 14.1875rem;
    height: 14.1875rem;
    background: ${props => `url(${props.imgurl}) lightgray 50% / cover no-repeat`};
`;
const Contents = styled(XS_regular_18)`

    color: var(--white);

    word-break: break-all;
    display: -webkit-box;
    -webkit-line-clamp: 5; /* 원하는 라인 수 */
    -webkit-box-orient: vertical;
    overflow: hidden;

    line-height: 1.5;

`;
const ReadWrap = styled(S_bold_28)`
    color: var(--white, #FFF);

    display: flex;
    gap: 0.62rem;
    align-items: center;
    justify-content: center;
    padding: 0.625rem 0rem 0.375rem 1.5rem;
    align-self: stretch;

    border-top: 1px solid var(--gray_bold, #4A4A4A);
`;
