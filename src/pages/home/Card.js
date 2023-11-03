import React, { useState } from 'react';
import Profile from '../../assets/images/Profile.jpeg';
import CardItem from './CardItem';
import { cardData } from '../../assets/datas/cardData';
import styled from 'styled-components';
import {ReactComponent as Vector} from '../../assets/images/background/Vector.svg';
import {ReactComponent as RVector} from '../../assets/images/background/RVector.svg';
import { InfiniteScroll } from '../../components/common/InfiniteScroll';

const Card = ({category}) => {
    console.log("test2")
    console.log(category)
    return (
        <Wrap>

            <CardWrap>
                
                {cardData.map((item) => (
                    (category==="/main" || category==="")?(
                        <CardItem key={item.id} info={item}/>
                    ):(
                        (item.category === category) && (
                            <CardItem key={item.id} info={item}/>
                        )
                    )
                ))}
            </CardWrap>

        </Wrap>
    );
};

export default Card;

const Wrap = styled.div`

    padding: 3rem;
    box-sizing: border-box;
`;
const CardWrap = styled.div`
    display: grid;
    /* grid-template-columns: repeat(4, 1fr); */
    grid-template-columns: repeat(auto-fill, minmax(15.1875rem, 1fr));
    place-items: center;
    gap: 0.5rem;

`;
