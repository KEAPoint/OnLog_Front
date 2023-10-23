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

    /* display: flex; */
    /* justify-content: center; */
`;
const CardWrap = styled.div`
    display: grid;
    /* grid-template-columns: repeat(4, 1fr); */
    grid-template-columns: repeat(auto-fill, minmax(23.063rem, 1fr));
    place-items: center;
    /* gap: 1.25rem; */

`;
