import Header from '../../components/common/Header';
import Search from '../../assets/images/Icons/Search.png'
import styled, { css } from 'styled-components';
import { useLocation } from 'react-router-dom'; // 검색 입력값 가져오기
import SearchBox from './SearchBox';
import BlogSearch from './BlogSearch';
import PostSearch from './PostSearch';
import Footer from '../../components/common/Footer';
import { useEffect } from 'react';

const SearchPage = () => {

    const location = useLocation();

    const term = location.state ? location.state.term : ''; // 검색값이 비어있을 경우(페이지 이동 혹은 주소로 쳐서 접근한 경우)에는 

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    return(
        <div>
            <Header/>
            <Wrap>
                <SearchBoxWrap>
                    {/* <SearchTitle> <Highlight>"{term}"</Highlight>에 대한 검색 결과 <NumHighLight>10</NumHighLight>건 </SearchTitle> */}
                    {term && <SearchTitle> <Highlight>"{term}"</Highlight>에 대한 검색 결과 <NumHighLight>4</NumHighLight>건 </SearchTitle>}
                    {/* {!term && <div></div>} 검색값이 없으면 빈공간으로 */}
                    <SearchBox/>
                </SearchBoxWrap>
                <BlogSearch/>
                <PostSearch/>
            </Wrap>
            <Footer/>
        </div>
    );
};

export default SearchPage;

const Wrap = styled.div`
    padding: 0rem 6.25rem;
`
const SearchBoxWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
    padding: 0rem 0rem 1.25rem 0rem;

//     & > :first-child {
//      flex-grow: 1; /* 첫 번째 자식 요소가 가능한 모든 공간을 차지하도록 함 */
//    }

@media (max-width: 1282px) {
    flex-direction: column; /* 화면 크기가 1282px 이하일 때 세로로 정렬 */
    align-items: center; /* 아이템들을 가운데로 정렬 */
}
`;

const SearchTitle = styled.div`
    display: flex;
    flex-wrap: wrap;

    padding: 1.25rem 0rem;
    align-items: center;
    gap: 0.625rem;

    color: var(--gray_bold, #4A4A4A);
    // /* M-regular-38 */
    // font-family: Pretendard;
    // font-size: 2rem;
    // font-style: normal;
    // font-weight: 400;
    // line-height: 3.01875rem; /* 127.105% */

    /* M-regular-38 */
    font-family: Pretendard;
    font-size: 2.375rem;
    font-style: normal;
    font-weight: 400;
    line-height: 3.01875rem; /* 127.105% */
`

const Highlight = styled.div`
    color: var(--black, #000);

    // /* L-bold-45 */
    // font-family: Pretendard;
    // font-size: 2.5rem;
    // font-style: normal;
    // font-weight: 700;
    // line-height: normal;

    /* L-bold-32(RE) */
    font-family: Pretendard;
    font-size: 2rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`
const NumHighLight = styled.div`
    color: var(--black, #000);

    // /* XL-semibold-80 */
    // font-family: Pretendard;
    // font-size: 3.5rem;
    // font-style: normal;
    // font-weight: 600;
    // line-height: 4.375rem; /* 87.5% */

    /* XL-semibold-80 */
    font-family: Pretendard;
    font-size: 5rem;
    font-style: normal;
    font-weight: 600;
    line-height: 4.375rem; /* 87.5% */
`