import React from 'react';
import Header from '../../components/common/Header';
import PostHeader from './PostHeader';
import PostText from './PostText';
import PostComment from './PostComment';
import PostThumb from './PostThumb';
import CommentWrite from './CommentWrite';

const PostviewPage = () => {
    return(
        <div>
            <Header/>
            {/* 주제 / 게시글 제목 / 게시 날짜 / 작성자 프로필 */}
            <PostHeader/>

            {/* 썸네일 사진 / 3줄 요약 글 */}
            <PostThumb/>

            {/* 게시글 내용 / 좋아요 수 / 수정 버튼 / 삭제 버튼 */}
            <PostText/>

            {/* 댓글목록 / 댓글 작성 버튼 */}
            <PostComment/>

            {/* 댓글 작성 칸 */}
            <CommentWrite/>

        </div>
    )
}

export default PostviewPage;