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
import {ReactComponent as LogoText} from '../../assets/images/LogoText.svg';
import { landingData } from '../../assets/datas/categoryData';
import LandItem from './LandItem';
import HeaderNormal from '../../components/common/HeaderNormal';
import Footer from '../../components/common/Footer';

const LandingPage = () => {
    

    return (
        <div>
            {/* <Header /> */}
            <HeaderNormal/>
            <LogoFix/>
            <Wrap>
                {landingData.map(item => (
                    <LandItem key={item.id} info={item}/>
                ))}
            </Wrap>
            <Footer/>
        </div>
    );
};

export default LandingPage;

const LogoFix = styled(LogoText)`

    /* width: 45.06225rem; */
    /* height: 14.08725rem; */
    /* background-attachment: fixed; */
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;
const Wrap = styled.div`
    /* padding: 7.125rem 6.25rem 0rem 6.25rem; */
    display: grid;

    grid-template-columns: repeat(3, 29.0625rem);
    /* grid-template-rows: repeat(3, 45.1875rem); */
    /* grid-template-columns: 1fr 1fr 1fr; */


    justify-content: center;
    gap: 0.62rem;
`;

