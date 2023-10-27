import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loginAction } from '../../store/actions/login';
import { useNavigate } from 'react-router-dom';

const KakaoMiddle = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            // code(인가코드)는 서버로 보내기
            try {
                const code = new URL(window.location.href).searchParams.get("code"); // 현재 url의 파라미터 가져오기 + 파라미터 안에서 'code'값 가져오기            
                console.log(code);

                const url = `/auth/kakao/login?code=${code}`;
                const res = await axios({
                    method: "get",
                    url: url,
                });
                console.log(res.data);
                
                if(res.data.success) {
                    dispatch(
                        loginAction({
                            userId: res.data.data.memberIdx,
                            email: res.data.data.email,
                            // jwt: res.data.tokenInfo.accessToken
                        }),
                    );
                    window.localStorage.setItem("accessToken", res.data.data.tokenInfo.accessToken);
                    // window.localStorage.setItem("refreshToken", res.data.tokenInfo.accessToken);
                    
                    navigate("/signUp");
                } else {
                    console.log("인가코드 서버 전송 에러");
                }

            } catch(error) {
                console.log(error);
            }
        };

        fetchData();
    },[])


    return (
        <div>
            잠시만 기다려라~~~
        </div>
    );
};

export default KakaoMiddle;