import styled from "styled-components";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const PostText = () => {
    // 관리자 여부 판단
    const [userId, setUserId] = useState("admin123");
    const [isAdmin, setIsAdmin] = useState(false);

    const adminId = "admin123";
    const context = "패션이란 무엇일까 그것은 강함 강한건 철 철수와 영희 아이언맨이 되어버린 나의 이야기 렛츠기릿패션이란 무엇일까 그것은 강함 강한건 철 철수와 영희 아이언맨이 되어버린 나의 이야기 렛츠기릿패션이란 무엇일까 그것은 강함 강한건 철 철수와 영희 아이언맨이 되어버린 나의 이야기 렛츠기릿패션이란 무엇일까 그것은 강함 강한건 철 철수와 영희 아이언맨이 되어버린 나의 이야기 렛츠기릿패션이란 무엇일까 그것은 강함 강한건 철 철수와 영희 아이언맨이 되어버린 나의 이야기 렛츠기릿패션이란 무엇일까 그것은 강함 강한건 철 철수와 영희 아이언맨이 되어버린 나의 이야기 렛츠기릿패션이란 무엇일까 그것은 강함 강한건 철 철수와 영희 아이언맨이 되어버린 나의 이야기 렛츠기릿패션이란 무엇일까 그것은 강함 강한건 철 철수와 영희 아이언맨이 되어버린 나의 이야기 렛츠기릿패션이란 무엇일까 그것은 강함 강한건 철 철수와 영희 아이언맨이 되어버린 나의 이야기 렛츠기릿패션이란 무엇일까 그것은 강함 강한건 철 철수와 영희 아이언맨이 되어버린 나의 이야기 렛츠기릿패션이란 무엇일까 그것은 강함 강한건 철 철수와 영희 아이언맨이 되어버린 나의 이야기 렛츠기릿패션이란 무엇일까 그것은 강함 강한건 철 철수와 영희 아이언맨이 되어버린 나의 이야기 렛츠기릿";
    const tag = ["전학", "10년생", "친구", "맹구"];
    const [like, setLike] = useState(3);
    const [isLike, setIsLike] = useState(false); // 좋아요 눌렀는지 아닌지

    const navigate = useNavigate();
    useEffect(() => {
        if (userId === adminId) {
        setIsAdmin(true);
        } else {
        setIsAdmin(false);
        }
    }, [userId]);

    const tagClickHandler = (tagClick) => {
        navigate('/search', { state: { term: tagClick } }); // 검색 결과 페이지로 이동
    }

    const likeHandler = () => {
        if (isLike){
            setLike(prevLike => prevLike -1); // 좋아요 수 감소
            setIsLike(false);
        }
        else{
            setLike(prevLike => prevLike + 1); // 좋아요 수 증가
            setIsLike(true);
        }        
        // 변경된 값을 저장한는 코드 필요 (db에 반영)
    }

    const editHandler = () => {
        alert("수정하기");
    }

    const deleteHandler = () => {
        Swal.fire({
            title: '정말로 게시글을 삭제하시겠습니까?',
            text: '삭제된 게시글을 복구가 불가능합니다.',
            // icon: 'warning',
            
            showCancelButton: true, // cancel버튼 보이기. 기본은 원래 없음
            confirmButtonColor: '#3085d6', // confrim 버튼 색깔 지정
            cancelButtonColor: '#d33', // cancel 버튼 색깔 지정
            confirmButtonText: '삭제', // confirm 버튼 텍스트 지정
            cancelButtonText: '취소', // cancel 버튼 텍스트 지정
            
            reverseButtons: true, // 버튼 순서 거꾸로
            
         }).then(result => {
            // 만약 Promise리턴을 받으면,
            if (result.isConfirmed) { // 만약 모달창에서 confirm 버튼을 눌렀다면
            
               Swal.fire('게시글이 삭제되었습니다', '다른 게시글들을 구경해보세요', 'success');
            }
         });
    }

    return(
        <Wrap>
            {/* 본문 내용 */}
            <Context>
                {context}
            </Context>

            <HashTagWrap>
                {tag.map((t) => <HashTag key={t} onClick={()=>tagClickHandler(t)}>#{t}</HashTag>)}
            </HashTagWrap> 

            <LikeWrap>
                    <LikeIconNum>
                        {/* <LikeButton onClick={likeHandler}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="20" viewBox="0 0 36 32" fill="none">
                                <path d="M34.5 10.12C34.5 5.0834 30.6708 1 25.9478 1C22.34 1 19.2582 3.38213 18 6.75198C16.7435 3.38213 13.66 1 10.0522 1C5.32917 1 1.5 5.0834 1.5 10.12C1.5 11.8594 1.9563 13.4826 2.74801 14.8661C4.4336 18.561 8.49603 24.0007 18 31C27.504 24.0007 31.5664 18.561 33.252 14.8661C34.0437 13.4826 34.5 11.8594 34.5 10.12Z" stroke="#4A4A4A" strokeWidth="2" strokeLinejoin="round"/>
                                </svg>
                        </LikeButton> */}
                        <LikeButton onClick={likeHandler}>
                        <HeartIcon fill={isLike ? "red" : "none"} />
                        </LikeButton>
                        <LikeNum>{like}</LikeNum>
                    </LikeIconNum>
            </LikeWrap>

            {isAdmin && (
                <UserWrap>
                    <UserBtn onClick={editHandler}>수정하기</UserBtn>
                    <UserBtn onClick={deleteHandler}>삭제하기</UserBtn>
                </UserWrap>
            )}
        </Wrap>
    );
};

export default PostText;

const Wrap = styled.div`
    display: flex;
    // padding: 2.5rem 6.25rem;
    padding: 2.5rem 0rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    // gap: 4.375rem;
    align-self: stretch;
`

const Context = styled.div`
    align-self: stretch;
    color: var(--black, #000);
    /* S-regular_30(txt) */
    font-family: Pretendard;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 350;
    // line-height: 3.125rem; /* 166.667% */
    line-height: 2.3rem;
    letter-spacing: 0.01875rem;
`

const HashTagWrap = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    align-self: stretch;
    flex-wrap: wrap;
    gap: 0.5rem;

    // background-color: var(--gray_bold, #4A4A4A);
    color: white;
    padding-top: 2rem;
`
const HashTag = styled.button`
    background-color: var(--gray_bold, #4A4A4A);
    color: white;
    padding: 0rem 0.5rem;
    border: 3px solid var(--gray_bold, #4A4A4A);

    /* S-medium-34 */
    font-family: Pretendard;
    font-size: 1.3rem;
    font-style: normal;
    font-weight: 500;
    line-height: 158.023%; /* 2.96294rem */

    transition: 0.3s;
    cursor: pointer;

    &:hover{
        background-color: white;
        color: var(--gray_bold, #4A4A4A);
    }
`

const LikeWrap = styled.div`
    display: flex;
    padding-top: 2rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-self: stretch;
`

const LikeIconNum = styled.div`
    display: flex;
    align-items: center;
    gap: 0.625rem;
`

const HeartIcon = ({fill}) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="20" viewBox="0 0 36 32" fill={fill}>
        <path d="M34.5 10.12C34.5 5.0834 30.6708 1 25.9478 1C22.34 1 19.2582 3.38213 18 6.75198C16.7435 3.38213 13.66 1 10.0522 1C5.32917 1 1.5 5.0834 1.5 10.12C1.5 11.8594 1.9563 13.4826 2.74801 14.8661C4.4336 18.561 8.49603 24.0007 18 31C27.504 24.0007 31.5664 18.561 33.252 14.8661C34.0437 13.4826 34.5 11.8594 34.5 10.12Z" stroke="#4A4A4A" strokeWidth="2" strokeLinejoin="round"/>
    </svg>
);

const LikeButton = styled.button`
    display: flex;
    width: 3rem;
    height: 3rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;

    cursor: pointer;

    background-color: transparent;
    border: none;
`

const LikeNum = styled.div`
    color: var(--black, #000);

    /* L-semibold-40 */
    font-family: Pretendard;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
`

const UserWrap = styled.div`
    display: flex;
    flex-direction: row;
    padding-top: 1rem;
`
const UserBtn = styled.button`
    display: flex;
    padding: 0.75rem 3rem;
    margin-left: 1rem;
    // margin-right: 2rem;

    border : 3px solid black;

    text-align: justify;
    /* XS-semibold-20 */
    font-family: Pretendard;
    font-size: 0.8rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;

    cursor: pointer;

    background: black;
    color: white;

    &:hover {
        background: white;
        color: black;

        transition: 0.3s;
    }
    // 클릭 액션
    &:active{
        transform: scale(0.95);
    }
`