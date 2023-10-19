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
            {/* <Back/> */}
            {/* <Back2/>  */}


            {/* {isLoading && <div>Loading...</div>} */}
            {/* 아래 코드 */}
            {/* {!isLoading && <div ref={setObservationTarget}> */}
                <CardWrap>
                    {cardData.map((item) => (
                        (item.category === category) && (
                            <CardItem key={item.id} info={item}/>
                        )
                    ))}
                </CardWrap>
            {/* </div>} */}
        </Wrap>
    );
};

export default Card;

const Wrap = styled.div`
    padding: 1.875rem 6.25rem;
    display: flex;
    justify-content: center;
`;
const CardWrap = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.25rem;
`;


// 뒷배경
// const Back = styled(Vector)`
//     position: absolute;
//     top: -15rem;
//     left: 40rem;
//     z-index: 10;
// `;
// const Back2 = styled(RVector)`
//     position: absolute;
//     top: 60rem;
//     z-index: 10;

// `;
