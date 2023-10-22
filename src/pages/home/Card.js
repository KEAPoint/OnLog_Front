import React, { useState } from 'react';
import Profile from '../../assets/images/Profile.jpeg';
import CardItem from './CardItem';
import { cardData } from '../../assets/datas/cardData';
import styled from 'styled-components';
import {ReactComponent as Vector} from '../../assets/images/background/Vector.svg';
import {ReactComponent as RVector} from '../../assets/images/background/RVector.svg';
import { InfiniteScroll } from '../../components/common/InfiniteScroll';

const Card = ({category}) => {

    return (
        <Wrap>

            <CardWrap>
                {cardData.map((item) => (
                    (item.category === category) && (
                        <CardItem key={item.id} info={item}/>
                    )
                ))}
            </CardWrap>

        </Wrap>
    );
};

export default Card;

const Wrap = styled.div`
    padding: 1.875rem 6.25rem;
    /* display: flex; */
    /* justify-content: center; */
    /* width: 100%; */
    /* background-color: whitesmoke; */
    
`;
const CardWrap = styled.div`
    /* width: 100%; */
    display: grid;
    /* grid-template-columns: repeat(4, 1fr); */
    /* grid-template-columns: repeat(auto-fill, minmax(20.5625rem, 1fr)); */
    grid-template-columns: repeat(auto-fill, minmax(22rem, 1fr));

    place-items: center;
    gap: 1.25rem;
    /* align-items: center; */
    /* justify-content: center; */

    /* display: flex; */
    /* flex-wrap: wrap; */
`;
