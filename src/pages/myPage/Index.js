import React from 'react';
import Header from '../../components/common/Header';
import MypageTop from './MypageTop.js';
import MypagePost from './MyPagePost';
import Footer from '../../components/common/Footer';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { userAuthAction } from '../../store/actions/profile';


const MyPage = () => {
    const params = useParams().userId;
    const dispatch = useDispatch();

    if(params === window.localStorage.getItem("userId")){ // 권한 있을 시
        dispatch(
            userAuthAction()
        )
    }
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

