import styled from "styled-components";
import UserProfile from "../../components/common/UserProfile";
import { cardData } from "../../assets/datas/cardData";
import Profile from "../../assets/images/Profile.jpeg";
import React, { useState, Fragment, useEffect } from "react";
import CommentWrite from "./CommentWrite";
import { Delete_CommentLike, Post_CommentLike } from "../../apis/API_Like";
import { Delete_Comment } from "../../apis/API_Comment";
import Swal from "sweetalert2";


const Comment = ({post}) => {
    const comments = post.comments; // map을 위한 comment 배열 저장

    // comment를 최신순서로 보여주기 위해 내림차순 정렬
    let sortedComments = [];
    if (comments) {
      sortedComments = [...comments].sort((a, b) => b.ref - a.ref);
    }
    const [isClicked, setIsClicked] = useState({}); // 답글 버튼 상태 관리 (눌렸는지 아닌지)

    // 답글 작성 버튼 핸들러 (각 댓글별로 상태관리)
    const buttonHandler = (commentId) => {
        setIsClicked(prevState => ({ ...prevState, [commentId]: !prevState[commentId] }));
      }

    // 댓글 좋아요 관리
    const HeartIcon = ({fill}) => ( // 좋아요 아이콘
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="20" viewBox="0 0 36 32" fill={fill}>
            <path d="M34.5 10.12C34.5 5.0834 30.6708 1 25.9478 1C22.34 1 19.2582 3.38213 18 6.75198C16.7435 3.38213 13.66 1 10.0522 1C5.32917 1 1.5 5.0834 1.5 10.12C1.5 11.8594 1.9563 13.4826 2.74801 14.8661C4.4336 18.561 8.49603 24.0007 18 31C27.504 24.0007 31.5664 18.561 33.252 14.8661C34.0437 13.4826 34.5 11.8594 34.5 10.12Z" stroke="#4A4A4A" strokeWidth="2" strokeLinejoin="round"/>
        </svg>
    );
      
    const [likeStates, setLikeStates] = useState({}); // 좋아요 눌려있는지 상태 관리
    const [likesCount, setLikesCount] = useState({}); // 좋아요 수 count
    
    useEffect(() => {
        if (post && Array.isArray(post.comments)) { // post 객체와 post.comments 가 배열인지 확인
            let initialLikeStates = {};
            let initialLikesCount = {};
            post.comments.forEach(comment => {
                initialLikeStates[comment.commentId] = comment.isLiked;
                initialLikesCount[comment.commentId] = comment.likesCount;
            });
            setLikeStates(initialLikeStates);
            setLikesCount(initialLikesCount);
        }
    }, [post]);

    // 좋아요 버튼 핸들러 (각 댓글 Id마다)
    const likeHandler = async (commentId) => {
        const isLiked = likeStates[commentId];
    
        if (isLiked) { // 좋아요 취소하기
            try {
                const response = await Delete_CommentLike(commentId); // Delete_CommentLike API 호출
        
                if (response && response.success) { // 응답이 있고, 응답의 success 가 true 일 때
                    setLikeStates(prevState => ({ ...prevState, [commentId]: false })); // 좋아요 상태를 false로 변경 (좋아요 - 상태 반영)
                    setLikesCount(prevState => ({ ...prevState, [commentId]: prevState[commentId] - 1 })); // 좋아요 수 감소
                    console.log('댓글 좋아요 취소');
                } else {
                    console.error(response ? response.error : 'No response from server'); // 실패 처리
                }
            } catch (error) {
                console.error('delete like catch error: ', error); // 오류 처리
            }
        } else { // 좋아요 누르기
            try {
                const response = await Post_CommentLike(commentId); // Post_PostLike API 호출
        
                if (response && response.success) { // 응답이 있고, 응답의 success 가 true 일 때
                    setLikeStates(prevState => ({ ...prevState, [commentId]: true })); // 좋아요 상태를 true로 변경 (좋아요 + 상태 반영)
                    setLikesCount(prevState => ({ ...prevState, [commentId]: prevState[commentId] + 1 })); // 좋아요 수 증가
                    console.log('댓글 좋아요 클릭');
                } else {
                    console.error(response ? response.error : 'No response from server'); // 실패 처리
                }
            } catch (error) {
                console.error(error); // 오류 처리
            }
        }
        
    };

    // 댓글 수정하기 버튼 핸들러
    const editHandler = () => {
        alert("댓글 수정하기");
    }
    // 댓글 삭제하기 버튼 핸들러
    const deleteHandler = async (commentId) => {
        Swal.fire({
            title: '정말로 댓글을 삭제하시겠습니까?',
            text: '삭제된 댓글은 복구가 불가능합니다.',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: '삭제',
            cancelButtonText: '취소',
            reverseButtons: true,
        }).then(async result => {
            if (result.isConfirmed) {
                try {
                    const response = await Delete_Comment(commentId); // Delete_Comment API 호출

                    if (response && response.success) { // 응답이 있고, 응답의 success 가 true 일 때
                        console.log('댓글 삭제');
                        Swal.fire('댓글이 삭제되었습니다', 'success');
                    } else {
                        console.error(response ? response.error : 'No response from server'); // 실패 처리
                    }
                } catch (error) {
                    console.error('delete comment catch error: ', error); // 오류 처리
                }
            }
        });
    };

    
    return (
        <div>
        {sortedComments && sortedComments.map(comment => {
            // 현재 사용자와 댓글 작성자를 비교
            const userId = window.localStorage.getItem("userId");
            const isAdmin = userId === comment.writer.blogId;

            return (
            <Fragment key={comment.commentId}>
                <Wrap key={comment.commentId}>
                {/* 댓글 작성자 프로필 & 수정/삭제 버튼 */}
                <UserInfo>
                    <Menu>
                    <ProfileImg $profileImg={comment.writer && comment.writer.blogProfileImg}></ProfileImg>
                    <TitleWrap>
                        <BlogName>{comment.writer && comment.writer.blogName}</BlogName>
                        <NickName>@{comment.writer && comment.writer.blogNickname}</NickName>
                    </TitleWrap>
                    </Menu>
                    {/* 댓글작성자 본인인 경우만 수정/삭제 버튼 노출 */}
                    {isAdmin && (
                    <UserWrap>
                        <UserBtn onClick={editHandler}>수정하기</UserBtn>
                        <UserBtn style={{border: "none"}} onClick={() => deleteHandler(comment.commentId)}>삭제하기</UserBtn>
                    </UserWrap>
                    )}
                </UserInfo>
                {/* 댓글 내용 */}
                <Context> {comment.content} </Context>
                <CommentFooter>
                    {/* 댓글 작성 날짜 */}
                    {comment.createdAt && <CommentDate>{new Date(comment.createdAt).toISOString().split('T')[0].replace(/-/g, '.')}</CommentDate>}
                    {/* 좋아요 버튼 & 좋아요 개수 */}
                    <HeartReplyWrap>
                    <HeartWrap>
                        <LikeButton onClick={() => likeHandler(comment.commentId)}>
                        <HeartIcon fill={likeStates[comment.commentId] ? "red" : "none"} />
                        </LikeButton>
                        <LikeNum>{likesCount[comment.commentId]}</LikeNum>
                    </HeartWrap>
                    {/* 답글 버튼 */}
                    <ReplyButton onClick={() => buttonHandler(comment.commentId)}> 답글달기 </ReplyButton>
                    </HeartReplyWrap>
                </CommentFooter>
                </Wrap>
                {/* 답글 버튼 누르면 답글 작성 칸 등장 */}
                {isClicked[comment.commentId] && <CommentWrite/>}
            </Fragment>
            );
        })}
        </div>
    );
};

export default Comment;

const Wrap = styled.div`
    display: flex;
    padding: 1rem 1rem 0rem 1rem;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    align-self: stretch;
    border-bottom: 1px solid var(--gray_lighter, #DCDCDC);
`
const Menu = styled.div`
    display: flex;
    align-items: center;
`;
const ProfileImg = styled.div`
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 2.5rem;
    background: url(${props => props.$profileImg}) lightgray 50% / cover no-repeat;
    margin-right: 0.94rem;
`;
const TitleWrap = styled.div`
text-decoration: none;
color: var(--black);
`;
const BlogName = styled.div`
    text-align: justify;

    color: var(--black, #000);
    text-align: justify;

    /* S-bold-25 */
    font-family: Pretendard;
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;
const NickName = styled.div`
    color: var(--gray_bold, #4A4A4A);
    text-align: justify;
    font-family: Pretendard;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.03375rem;
`;

const UserInfo = styled.div`
    display: flex;
    justify-content: space-between;
    padding-left: 1.5rem;
    align-items: center;
    align-self: stretch;
`
// 수정삭제 버튼 wrap
const UserWrap = styled.div`
    display: flex;
    flex-direction: row;
`
// 수정하기 삭제하기 버튼
const UserBtn = styled.button`
    display: flex;
    padding: 0rem 1rem;
    // margin-left: 1rem;
    background: none;
    border: none;
    border-right: 1px solid gray;
    text-align: justify;
    color : gray;

    /* XS-semibold-20 */
    font-family: Pretendard;
    font-size: 0.8rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;

    cursor: pointer;

    &:hover {
        color: black;
        transition: 0.3s;
    }
    // 클릭 액션
    &:active{
        color: black; 
    }
`
// 댓글 내용
const Context = styled.div`
    width: 50rem;
    align-self: stretch;
    color: var(--black, #000);
    padding: 1.25rem 1.25rem 0rem 1.25rem;

    /* S-regular-25 */
    font-family: Pretendard;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`

// 댓글 작성 날짜, 좋아요, 답장
const CommentFooter = styled.div`
    display: flex;
    justify-content: space-between;
    padding-left: 1.5rem;
    // align-items: flex-end;
    align-items: center;
    align-self: stretch;
`

const CommentDate = styled.div`
    color: var(--gray_bold, #4A4A4A);

    /* XS-semibold-20 */
    font-family: Pretendard;
    font-size: 1rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
`
const HeartReplyWrap = styled.div`
    display: flex;
    align-items: center;
    gap: 0.625rem;
`

const HeartWrap = styled.div`
    display: flex;
    width: 3rem;
    padding: 0.1875rem 1.25rem;
    align-items: center;
`
const LikeButton = styled.button`
    display: flex;
    width: 3rem;
    height: 3rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    border: none;

    cursor: pointer;
`
const LikeNum = styled.div`
    color: var(--gray_bold, #4A4A4A);
    text-align: justify;

    /* XS-semibold-20 */
    font-family: Pretendard;
    font-size: 1rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
`
const ReplyButton = styled.button`
    display: flex;
    padding: 0.5rem 1rem;
    align-items: center;
    color: var(--gray_bold, #4A4A4A);
    text-align: justify;
    background-color: transparent;
    border: 2px solid black;

    cursor: pointer;

    /* XS-semibold-20 */
    font-family: Pretendard;
    font-size: 0.8rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;

    &:hover{
        transition: 0.3s;
        background-color: black;
        color: white;
    }
`