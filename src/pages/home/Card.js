import React, { useEffect, useState } from 'react';
import Profile from '../../assets/images/Profile.jpeg';
import CardItem from './CardItem';
import { cardData } from '../../assets/datas/cardData';
import styled from 'styled-components';
import { InfiniteScroll } from '../../components/common/InfiniteScroll';
import axios from 'axios';
import { GET_CardList } from '../../apis/API_Card';
import { useDispatch } from 'react-redux';
import { cardAction } from '../../store/actions/card';

const Card = ({category}) => {
    const dispatch = useDispatch();    
    const [cardData, setCardData] = useState([]);
    useEffect(() => {
            console.log("현재 카테고리: ", category);

            if (category !== null) { // category가 null이 아닐 때만 API 요청을 보냅니다.
                GET_CardList(category)
                .then((data) => {
                    // console.log(data.data.content)
                    setCardData(data.data.content);

                    dispatch(
                        cardAction(data.data.content)
                    );
                })
                .catch((error) => {
                    console.log(error);
                });
            }
    },[category]);

    return (
        <Wrap>
            <CardWrap>
                {
                    cardData.map((item) => (
                        // <p>데이터 있음</p>
                        // <CardItem key={item.postId} postId={item.postId}/>
                        <CardItem key={item.postId} item={item}/>

                    ))
                }
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
