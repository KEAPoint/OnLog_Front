import React, { useEffect, useState } from 'react';
import Header from '../../components/common/Header';
import styled, { css } from 'styled-components';
import Search from '../../assets/images/Icons/Search.png'
import Home from '../../assets/images/Icons/Home.png'
import { L_semibold_40, S_regular_25, XL_semibold_80 } from '../../components/style/Styled';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AniShow, AniFrameIn } from '../../components/style/AniStyled';
import Card from './Card';

import SearchPage from '../search/Index';
import { useNavigate } from 'react-router-dom';
import SearchBox from '../search/SearchBox';
import { CardList } from '../../apis/API_Card';
import ScrollTop from '../../components/common/ScrollTop';
import Footer from '../../components/common/Footer';
const navData = [
    {
        id:0,
        name: "",
    },
    {
        id:1,
        name: "/lifestyle",
    },    
    {
        id:2,
        name: "/travel",
    },   
    {
        id:3,
        name: "/foodie",
    },    
    {
        id:4,
        name: "/entertainment",
    },    
    {
        id:5,
        name: "/tech",
    },
    {
        id:6,
        name: "/sports",
    },
    {
        id:7,
        name: "/news",
    },
]

function isCurrent(to) {
    // console.log(to);
    // console.log(window.location.pathname.includes(to).toString());
    if(to === window.location.pathname){
        return true;
    } else { return false;}
}

const HomePage = () => {
    const [category, setCategory] = useState("");
    const location = useLocation();

    useEffect(() => {
        // 그냥 이 페이지 들어오자마자 DOM링크 가져와서 카테고리가 뭔지 알 수 있도록 -> 해당하는 카드리스트 나오기
        let path = window.location.pathname.replace('/main/','');
        console.log("test");
        console.log(path);
        // if(path ===)
        setCategory(path);
    },[]) 
    // useEffect(async () => {
    //     try{
    //     const localData = window.localStorage.getItem("jwt");

    //     // 자동로그인 성공 시(jwt 인증 성공 시)
    //     const data = await CardList(localData);
    //     } catch (error) {
    //         console.log(error)
    //     }

    // },[])
    // useEffect(() => {
    //     async function fetchData() {
    //       const data = await fetchSomeData();
    //       // ...
    //     }
      
    //     fetchData();
    //   }, []);
      
    const navigate = useNavigate();

    const handleSearch = (e) => {
        // console.log(e.target.value);
        // history.push('/result', { term: searchTerm });
    }

    return (
        <>
            <StickyWrap>
                <Header/>
                <Wrap>
                        <TopWrap>
                            {navData.map((item) => (
                                (isCurrent('/main' + item.name)) && (
                                    (item.id===0) ? (
                                        <div key={item.id}>
                                            <Title>Onlog <p>&nbsp; 는 지금...</p></Title>
                                        </div>
                                    ) : (
                                        <div key={item.id}>
                                            {/* <Title>#{item.name.replace(/\//g, '')}</Title> */}
                                            <XL_semibold_80>#{item.name.replace(/\//g, '')}</XL_semibold_80>
                                        </div>
                                    )
                                ) 

                            ))}
                            <SearchBox/>
                        </TopWrap>
                        <Nav>
                            <LinkWrap>
                                <NavL to={'/main'} $active={isCurrent("/main")} hovername="전체 게시물" onClick={() => setCategory('')}><p><img src={Home} style={{padding:"0rem 3rem"}}/></p></NavL>
                                <NavL to={'/main/lifestyle'} $active={isCurrent("/main/lifestyle")} hovername="일상" onClick={() => setCategory('lifestyle')}><p>#lifestyle</p></NavL>
                                <NavL to={'/main/travel'} $active={isCurrent("/main/travel")} hovername="여행" onClick={() => setCategory('travel')}><p>#travel</p></NavL>
                                <NavL to={'/main/foodie'} $active={isCurrent("/main/foodie")} hovername="맛집" onClick={() => setCategory('foodie')}><p>#foodie</p></NavL>
                                <NavL to={'/main/entertainment'} $active={isCurrent("/main/entertainment")} hovername="엔터테인먼트" onClick={() => setCategory('entertainment')}><p>#entertainment</p></NavL>
                                <NavL to={'/main/tech'} $active={isCurrent("/main/tech")} hovername="IT기술"onClick={() => setCategory('tech')}><p>#tech</p></NavL>
                                <NavL to={'/main/sports'} $active={isCurrent("/main/sports")} hovername="스포츠" onClick={() => setCategory('sports')}><p>#sports</p></NavL>
                                <NavL to={'/main/news'} $active={isCurrent("/main/news")} hovername="뉴스/시사" onClick={() => setCategory('news')}><p>#news</p></NavL>
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
    /* margin: 0rem 6.25rem; */
    /* background-color: red; */
    margin: 0rem 10rem;

    /* box-sizing: border-box; */

/* 
    @media ${({ theme }) => theme.windowSize.test} {
        background-color: pink;
    } */
`
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

const LinkWrap = styled(L_semibold_40)`
    display: flex;
    gap: 0rem 2.44rem;
    /* align-items: center; */
    /* justify-content: center; */


    /* position: sticky; */
    /* top: 0px; */

    /*  */
    /* flex-wrap: wrap; */
    /*  */
`;
const NavL = styled(Link)`
    text-decoration: none;
    color: var(--gray_bold, #4A4A4A);

    // 안보이게
    display : ${(props) => (props.$active ? 'none' : '')};

    // 애니
    animation: ${(props) => (!props.$active ? (
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

const CardWrap = styled.div`
    /* background-color: red; */
    /* position: relative; */
    /* width: 100%; */
`;