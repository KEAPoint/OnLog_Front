import React from 'react';
import styled from 'styled-components';
import {ReactComponent as Logo} from '../../assets/images/Logo.svg';


const HeaderNormal = () => {
    return (
        <Wrap>
            <Logo/>
            {/* 로그인 O */}
        </Wrap>
    );
};

export default HeaderNormal;

const Wrap = styled.div`
    background: var(--white);
    padding: 1.88rem 6.25rem;    
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {

    }
`;
