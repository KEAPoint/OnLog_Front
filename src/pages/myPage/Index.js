import React from 'react';
import Header from '../../components/common/Header';
import UserProfile from '../../components/common/UserProfile';
import MypageTop from './MypageTop.js';
import MypagePost from './MyPagePost';

const MyPage = () => {
    return(
        // width 지정했기 때문에 축소하면 왼쪽으로 쏠려감. 그래서 auto 넣어줘서 가운데로 오게 했음
        // <div style={{width: "1920px", marginLeft:"auto", marginRight:"auto"}}>
        //     {/* <UserProfile/> */}
        //     <MypageTop/>
        //     <MypagePost style={{width: "1920px", marginLeft:"auto", marginRight:"auto"}}/>
        // </div>
        <div>
        <Header/>
        {/* <UserProfile/> */}
        <MypageTop/>
        <MypagePost/>
    </div>
    );
};

export default MyPage;

