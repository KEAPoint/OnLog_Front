import React from 'react';
import Header from '../../components/common/Header';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Entertainment from '../../assets/images/catogories/Entertainment.png';
import Foodie from '../../assets/images/catogories/Foodie.png';
import LifeStyle from '../../assets/images/catogories/LifeStyle.png';
import News from '../../assets/images/catogories/News.png';
import Sports from '../../assets/images/catogories/Sports.png';
import Tech from '../../assets/images/catogories/Tech.png';
import Travel from '../../assets/images/catogories/Travel.png';
import { landingData } from '../../assets/datas/categoryData';
import LandItem from './LandItem';

const LandingPage = () => {
    

    return (
        <div>
            <Header />

            <Wrap>
                {landingData.map(item => (
                    <LandItem key={item.id} info={item}/>
                ))}
            </Wrap>
        </div>
    );
};

export default LandingPage;

const Wrap = styled.div`
    padding: 7.125rem 6.25rem 0rem 6.25rem;
    display: grid;

    grid-template-columns: repeat(3, 29.0625rem);
    /* grid-template-rows: repeat(3, 45.1875rem); */
    /* grid-template-columns: 1fr 1fr 1fr; */


    justify-content: center;
    gap: 0.62rem;
`;

