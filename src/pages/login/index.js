import React from 'react';
import Header from '../../components/common/HeaderNormal';
import styled from 'styled-components';
import KakaoLogin from './KakaoLogin';
import SignUp from './SignUp';

const LoginPage = () => {

    return (
        <div>
            <Wrap>
                <KakaoLogin/>
            </Wrap>
        </div>
    );
};

export default LoginPage;

const Wrap = styled.div`
    padding: 7.125rem 6.25rem 0rem 6.25rem;
    display: grid;

    grid-template-columns: repeat(3, 29.0625rem);
    /* grid-template-rows: repeat(3, 45.1875rem); */
    /* grid-template-columns: 1fr 1fr 1fr; */


    justify-content: center;
    gap: 0.62rem;
`;

