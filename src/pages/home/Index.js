import React, { useEffect, useState } from 'react';
import Header from '../../components/common/Header';
import styled, { css } from 'styled-components';
import {ReactComponent as Home} from '../../assets/images/Icons/Home.svg'
import { L_semibold_32, XL_semibold_56 } from '../../components/style/Styled';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AniShow, AniFrameIn } from '../../components/style/AniStyled';
import Card from './Card';
import SearchBox from '../search/SearchBox';
import ScrollTop from '../../components/common/ScrollTop';
import Footer from '../../components/common/Footer';
import { navData } from '../../assets/datas/categoryData';


const HomePage = () => {
    const location = useLocation();
    const [category, setCategory] = useState("");
    useEffect(() => {
        // 그냥 이 페이지 들어오자마자 DOM링크 가져와서 카테고리가 뭔지 알 수 있도록 -> 해당하는 카드리스트 나오기
        let path = location.pathname.replace(/\/main\/|\/main/g, '');
        console.log("현재 카테고리: ", path);
        setCategory(path);
    },[location]) 

    const isCurrent = to => to === location.pathname;

    return (
        <>
            <StickyWrap>
                <Header/>
                <Wrap>
                    <TopWrap>
                        {navData.map((item) => (
                            (category == item.name) && (
                                <div key={item.id}>
                                    {(item.id===0) ? (
                                        <Title>Onlog <p>&nbsp; 는 지금...</p></Title>
                                    ) : (
                                        <XL_semibold_56>#{item.name}</XL_semibold_56>
                                    )}
                                </div>
                            ) 
                        ))}
                        <SearchBox/>
                    </TopWrap>

                    <Nav>
                        <LinkWrap>
                                {navData.map((item) => {
                                    const to = item.id === 0 ? '/main' : `/main/${item.name}`;
                                    return (
                                        <NavL to={to} $active={isCurrent(to)} hovername={item.kName} key={item.id}>
                                            <p>{item.id === 0 ? <Home/> : `#${item.name}`}</p>
                                        </NavL>
                                    )
                                })}
                        </LinkWrap>
                    </Nav>
                </Wrap>
            </StickyWrap> 

            <PageWrap>

                <Card category={category}/>
                {/* <ScrollTop/> */}
                <Footer/>
            </PageWrap>
        </>
    );
};

export default HomePage;

const StickyWrap = styled.div`
    background-color: white;
    position: sticky;
    top: 0;
`
const PageWrap = styled.div`
    margin: 0rem 10rem;
/* 
    @media ${({ theme }) => theme.windowSize.test} {
        background-color: pink;
    } */
`;
const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0rem 7rem;
    gap: 1.25rem;
`;
const TopWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;


const Nav = styled.div`
    width: 100%;
`;
const Title = styled.div`
    // 애니
    animation: ${AniShow} 1s forwards;

    padding: 1.03125rem 0rem;
    display: flex;
    align-items: center;

    color: var(--black, #000);
    font-family: Audiowide;
    font-size: 3.3125rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;    
    p {
        color: var(--black, #000);
        font-family: Pretendard;
        font-size: 3rem;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
    }
`;

const LinkWrap = styled(L_semibold_32)`
    display: flex;
    gap: 0rem 2.44rem;
    margin-bottom: 1rem;
`;
const NavL = styled(Link)`
    text-decoration: none;
    color: var(--gray_bold, #4A4A4A);

    // 안보이게
    display : ${(props) => (props.$active ? 'none' : '')};

    // 애니
    animation: ${(props) => (!props.to.includes(props.category) ? (
        css`
         ${AniFrameIn} .5s forwards
        `
    ) : "")};


    &:hover p {
        display: none;
    }
    &:hover:before {
        content: '${(props) => (props.hovername)}';
        background-color: var(--black);
        color: var(--white);
        padding: 0rem 2rem;
        white-space: nowrap; /* 추가된 부분 */
    }
`;