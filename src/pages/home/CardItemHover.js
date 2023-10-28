import React from 'react';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import { S_bold_28, S_regular_30, XS_regular_18 } from '../../components/style/Styled';
import Arrow from '../../assets/images/Icons/Arrow.png';

const CardItemHover = ({info}) => {
    const movePage = useNavigate();

    const handleReadButtonClick = (e) => {
        e.preventDefault();
        movePage('/mypage/post');

    };
    
    return (
        <HoverWrap onClick={handleReadButtonClick}>
            <Wrap>
                <Photo $imgurl = {info.img}></Photo>
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

const HoverWrap = styled.button`
    width: 23.0625rem;
    height: 37.5625rem;
    padding: 1.875rem 2.5rem;
    box-sizing: border-box;

    background-color: var(--black);
    border-radius: 1.875rem;

    cursor: pointer;

    &:active{
        transform: scale(0.95);
    }
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
    background: ${props => `url(${props.$imgurl}) lightgray 50% / cover no-repeat`};
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
const ReadWrap = styled.div`
    font-family: Pretendard;
    font-size: 1.75rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    color: var(--white, #FFF);
    border: none;
    background: none;
    cursor: pointer;
    display: flex;
    gap: 0.62rem;
    align-items: center;
    justify-content: center;
    padding: 0.625rem 0rem 0.375rem 1.5rem;
    align-self: stretch;

    &:hover{
        color: red;
    }
    &:active{
        transform: scale(0.95);
    }
`;
