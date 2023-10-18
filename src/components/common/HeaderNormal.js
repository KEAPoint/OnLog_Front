import React from 'react';
import styled from 'styled-components';
import Logo from '../../assets/images/Logo.png';


const HeaderNormal = () => {
    return (
        <Wrap>
            <img src={Logo} style={{width:'6.875rem', height:'3.375rem'}}/>
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
