import styled from "styled-components";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";

const PostText = () => {
    // 관리자 여부 판단
    const [userId, setUserId] = useState("admin123");
    const [isAdmin, setIsAdmin] = useState(false);
    const adminId = "admin123";
    useEffect(() => {
        if (userId === adminId) {
        setIsAdmin(true);
        } else {
        setIsAdmin(false);
        }
    }, [userId]);

    const editHandler = () => {
        alert("수정하기");
    }

    const deleteHandler = () => {
        Swal.fire({
            title: '정말로 게시글을 삭제하시겠습니까?',
            text: '삭제된 게시글을 복구가 불가능합니다.',
            icon: 'warning',
            
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
            <Context>
                패션이란 무엇일까 그것은 강함 강한건 철 철수와 영희 아이언맨이 되어버린 나의 이야기 렛츠기릿패션이란 무엇일까 그것은 강함 강한건 철 철수와 영희 아이언맨이 되어버린 나의 이야기 렛츠기릿패션이란 무엇일까 그것은 강함 강한건 철 철수와 영희 아이언맨이 되어버린 나의 이야기 렛츠기릿패션이란 무엇일까 그것은 강함 강한건 철 철수와 영희 아이언맨이 되어버린 나의 이야기 렛츠기릿패션이란 무엇일까 그것은 강함 강한건 철 철수와 영희 아이언맨이 되어버린 나의 이야기 렛츠기릿패션이란 무엇일까 그것은 강함 강한건 철 철수와 영희 아이언맨이 되어버린 나의 이야기 렛츠기릿패션이란 무엇일까 그것은 강함 강한건 철 철수와 영희 아이언맨이 되어버린 나의 이야기 렛츠기릿패션이란 무엇일까 그것은 강함 강한건 철 철수와 영희 아이언맨이 되어버린 나의 이야기 렛츠기릿패션이란 무엇일까 그것은 강함 강한건 철 철수와 영희 아이언맨이 되어버린 나의 이야기 렛츠기릿패션이란 무엇일까 그것은 강함 강한건 철 철수와 영희 아이언맨이 되어버린 나의 이야기 렛츠기릿패션이란 무엇일까 그것은 강함 강한건 철 철수와 영희 아이언맨이 되어버린 나의 이야기 렛츠기릿패션이란 무엇일까 그것은 강함 강한건 철 철수와 영희 아이언맨이 되어버린 나의 이야기 렛츠기릿
                <br/><br/><br/>
                패션이란 무엇일까 그것은 강함 강한건 철 철수와 영희 아이언맨이 되어버린 나의 이야기 렛츠기릿패션이란 무엇일까 그것은 강함 강한건 철 철수와 영희 아이언맨이 되어버린 나의 이야기 렛츠기릿패션이란 무엇일까 그것은 강함 강한건 철 철수와 영희 아이언맨이 되어버린 나의 이야기 렛츠기릿패션이란 무엇일까 그것은 강함 강한건 철 철수와 영희 아이언맨이 되어버린 나의 이야기 렛츠기릿패션이란 무엇일까 그것은 강함 강한건 철 철수와 영희 아이언맨이 되어버린 나의 이야기 렛츠기릿패션이란 무엇일까 그것은 강함 강한건 철 철수와 영희 아이언맨이 되어버린 나의 이야기 렛츠기릿패션이란 무엇일까 그것은 강함 강한건 철 철수와 영희 아이언맨이 되어버린 나의 이야기 렛츠기릿패션이란 무엇일까 그것은 강함 강한건 철 철수와 영희 아이언맨이 되어버린 나의 이야기 렛츠기릿패션이란 무엇일까 그것은 강함 강한건 철 철수와 영희 아이언맨이 되어버린 나의 이야기 렛츠기릿패션이란 무엇일까 그것은 강함 강한건 철 철수와 영희 아이언맨이 되어버린 나의 이야기 렛츠기릿패션이란 무엇일까 그것은 강함 강한건 철 철수와 영희 아이언맨이 되어버린 나의 이야기 렛츠기릿패션이란 무엇일까 그것은 강함 강한건 철 철수와 영희 아이언맨이 되어버린 나의 이야기 렛츠기릿패션이란 무엇일까 그것은 강함 강한건 철 철수와 영희 아이언맨이 되어버린 나의 이야기 렛츠기릿패션이란 무엇일까 그것은 강함 강한건 철 철수와 영희 아이언맨이 되어버린 나의 이야기 렛츠기릿패션이란 무엇일까 그것은 강함 강한건 철 철수와 영희 아이언맨이 되어버린 나의 이야기 렛츠기릿패션이란 무엇일까 그것은 강함 강한건 철 철수와 영희 아이언맨이 되어버린 나의 이야기 렛츠기릿패션이란 무엇일까 그것은 강함 강한건 철 철수와 영희 아이언맨이 되어버린 나의 이야기 렛츠기릿
            </Context>
            <HashTag>
                #아이언맨 #우하하 #나는 #캡틴아메리카
            </HashTag>
            <LikeWrap>
                {/* <LikeBox> */}
                    <LikeIconNum>
                        <LikeButton><svg xmlns="http://www.w3.org/2000/svg" width="36" height="32" viewBox="0 0 36 32" fill="none">
                                <path d="M34.5 10.12C34.5 5.0834 30.6708 1 25.9478 1C22.34 1 19.2582 3.38213 18 6.75198C16.7435 3.38213 13.66 1 10.0522 1C5.32917 1 1.5 5.0834 1.5 10.12C1.5 11.8594 1.9563 13.4826 2.74801 14.8661C4.4336 18.561 8.49603 24.0007 18 31C27.504 24.0007 31.5664 18.561 33.252 14.8661C34.0437 13.4826 34.5 11.8594 34.5 10.12Z" stroke="#4A4A4A" stroke-width="2" stroke-linejoin="round"/>
                                </svg>
                        </LikeButton>
                        <LikeNum>999</LikeNum>
                    </LikeIconNum>
                {/* </LikeBox> */}
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
    padding: 2.5rem 11.875rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4.375rem;
    align-self: stretch;
`

const Context = styled.div`
    align-self: stretch;
    color: var(--black, #000);
    /* S-regular_30(txt) */
    font-family: Pretendard;
    font-size: 1.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 3.125rem; /* 166.667% */
    letter-spacing: 0.01875rem;
`

const HashTag = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.25rem;
    align-self: stretch;
    color: var(--gray_bold, #4A4A4A);
    /* S-medium-34 */
    font-family: Pretendard;
    font-size: 2.8rem;
    font-style: normal;
    font-weight: 500;
    line-height: 158.023%; /* 2.96294rem */
    width: 50.625rem;
`

const LikeWrap = styled.div`
    display: flex;
    padding-top: 50px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-self: stretch;
`

// const LikeBox = styled.div`
//     display: flex;
//     width: 29.0625rem;
//     padding: 1.25rem 6.25rem;
//     justify-content: space-between;
//     align-items: center;
//     border-radius: 1.875rem;
//     border: 1px solid #000;
// `

const LikeIconNum = styled.div`
    display: flex;
    align-items: center;
    gap: 0.625rem;
`

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
    font-size: 2.5rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
`

const UserWrap = styled.div`
    display: flex;
    flex-direction: row;
`
const UserBtn = styled.button`
    display: flex;
    padding: 0.75rem 3.9375rem;
    margin-left: 2rem;
    margin-right: 2rem;

    border : 4px solid black;

    text-align: justify;
    /* XS-semibold-20 */
    font-family: Pretendard;
    font-size: 1.25rem;
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