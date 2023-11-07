import React from 'react';
import Header from '../../components/common/Header';
import UserProfile from '../../components/common/UserProfile';
import MypageTop from './MypageTop.js';
import MypagePost from './MyPagePost';
import Footer from '../../components/common/Footer';
import styled from 'styled-components';

const MyPage = () => {
    return(
        <div>
            <Header/>
            <Wrap>
                <MypageTop/>
                <MypagePost/>
            </Wrap>
            <Footer/>
        </div>
    );
};

const Wrap = styled.div`
    padding: 0rem 6.25rem;
    
`
export default MyPage;

