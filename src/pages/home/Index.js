import React, { useEffect, useState } from 'react';
import Header from '../../components/common/Header';
import styled, { css } from 'styled-components';
import Search from '../../assets/images/Icons/Search.png'
import Home from '../../assets/images/Icons/Home.png'
import { L_semibold_40, S_regular_25 } from '../../components/style/Styled';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AniShow, AniFrameIn } from '../../components/style/AniStyled';
import CardItem from './CardItem';
import Card from './Card';
import {ReactComponent as Vector} from '../../assets/images/background/Vector.svg';
// import Vector from '../../assets/images/background/Vector.svg';
import {ReactComponent as RVector} from '../../assets/images/background/RVector.svg';
import Profile from '../../assets/images/Profile.jpeg';

import SearchPage from '../search/Index';
import { useNavigate } from 'react-router-dom';
import SearchBox from '../search/SearchBox';
import { CardList } from '../../apis/API_Card';


const navData = [
    {
        id:0,
        name: "",
    },
    {
        id:1,
        name: "lifestyle",
    },    
    {
        id:2,
        name: "travel",
    },   
    {
        id:3,
        name: "foodie",
    },    
    {
        id:4,
        name: "entertainment",
    },    
    {
        id:5,
        name: "tech",
    },
    {
        id:6,
        name: "sports",
    },
    {
        id:7,
        name: "news",
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

    // useEffect(() => {
    //     console.log("dd")
    //     setCategory(window.location.pathname);
    //     console.log(category);
    // },isCurrent());

    useEffect(async () => {
        try{
        const localData = window.localStorage.getItem("jwt");

        // 자동로그인 성공 시(jwt 인증 성공 시)
        const data = await CardList(localData);
        } catch (error) {
            console.log(error)
        }

    },[])

    const navigate = useNavigate();

    const handleSearch = (e) => {
        // console.log(e.target.value);
        // history.push('/result', { term: searchTerm });
    }

    return (
        <PageWrap>
           <Header/>
           <Wrap>
                 <SearchBox/>
            </Wrap>

             <Wrap2>
                <Nav>
                    {navData.map((item) => (
                        (isCurrent('/main/' + item.name)) && (
                            (item.id===0) ? (
                                <Title key={item.id}>Onlog <p>&nbsp; 는 지금...</p></Title>
                            ) : (
                                <Title key={item.id}>#{item.name}</Title>
                            )
                        ) 

                    ))}
                    
                    <LinkWrap>
                        <NavL to={'/main/'} $active={isCurrent("/main")} hovername="전체 게시물" onClick={() => setCategory('')}><p><img src={Home}/></p></NavL>
                        <NavL to={'/main/lifestyle'} $active={isCurrent("/main/lifestyle")} hovername="일상" onClick={() => setCategory('lifestyle')}><p>#lifestyle</p></NavL>
                        <NavL to={'/main/travel'} $active={isCurrent("/main/travel")} hovername="여행" onClick={() => setCategory('travel')}><p>#travel</p></NavL>
                        <NavL to={'/main/foodie'} $active={isCurrent("/main/foodie")} hovername="맛집" onClick={() => setCategory('foodie')}><p>#foodie</p></NavL>
                        <NavL to={'/main/entertainment'} $active={isCurrent("/main/entertainment")} hovername="엔터테인먼트" onClick={() => setCategory('entertainment')}><p>#entertainment</p></NavL>
                        <NavL to={'/main/tech'} $active={isCurrent("/main/tech")} hovername="IT기술"onClick={() => setCategory('tech')}><p>#tech</p></NavL>
                        <NavL to={'/main/sports'} $active={isCurrent("/main/sports")} hovername="스포츠" onClick={() => setCategory('sports')}><p>#sports</p></NavL>
                        <NavL to={'/main/news'} $active={isCurrent("/main/news")} hovername="뉴스/시사" onClick={() => setCategory('news')}><p>#news</p></NavL>
                    </LinkWrap>
                </Nav>
                    
            </Wrap2>

            {/* <CardWrap> */}
            <Card category={category}/>
            {/* <Card category="news"/> */}
            {/* </CardWrap> */}
        </PageWrap>
    );
};

export default HomePage;

const PageWrap = styled.div`
    margin: 0rem 6.25rem;
    /* box-sizing: border-box; */

/* 
    @media ${({ theme }) => theme.windowSize.test} {
        background-color: pink;
    } */
`
const Wrap = styled.div`
    display: flex;
    justify-content: flex-end;
    padding-right: 6.25rem;
`;
const Wrap2 = styled.div`
    /* width: 100%; */
    /* display: flex; */
    /* justify-content: center; */
    padding: 3.12rem 10.75rem;
    /* width: 100%; */
`;
const SearchWrap = styled.div`
    display: flex;
    gap: 0.62rem;

    width: 37.8rem;
    border-radius: 1.875rem;
    border: 3px solid var(--gray_light, #939393);
    padding: 0.94rem 1.56rem;

    input {
        width: 100%;
        border: none;
        outline: none;

        color: var(—gray_bold, #4A4A4A);
        /* S-regular-25 */
        font-family: Pretendard;
        font-size: 1.5625rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
`;

const Nav = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* padding: 6.25rem 6.25rem 3.125rem 6.25rem; */
    /* gap: 0.625rem; */

    /* position: relative; */
    /* z-index: -1; */

`;
const Title = styled.div`
    // 애니
    animation: ${AniShow} 1s forwards;

    padding: 1.03125rem 0rem;
    display: flex;
    align-items: center;

    color: var(--black, #000);
    font-family: Audiowide;
    font-size: 5.3125rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;    
    p {
        color: var(--black, #000);
        font-family: Pretendard;
        font-size: 4.0625rem;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
    }
`;

const LinkWrap = styled(L_semibold_40)`
    display: flex;
    gap: 0rem 2.44rem;
    align-items: center;
    justify-content: center;


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