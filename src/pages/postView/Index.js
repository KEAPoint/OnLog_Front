import React from 'react';
import Header from '../../components/common/Header';
import PostHeader from './PostHeader';
import PostText from './PostText';
import PostComment from './PostComment';
import PostThumb from './PostThumb';
import CommentWrite from './CommentWrite';
import Footer from '../../components/common/Footer';
import styled from 'styled-components';

const PostviewPage = () => {
    return(
        <div>
            <StickWrap>
                <Header/>
                <Wrap>
                    <PostHeader/>
                </Wrap>
            </StickWrap>
            <Wrap>
                {/* 작성자 프로필 / 썸네일 사진 / 3줄 요약 글 */}
                <PostThumb/>

                {/* 게시글 내용 / 좋아요 수 / 수정 버튼 / 삭제 버튼 */}
                <PostText/>

                {/* 댓글목록 / 댓글 작성 버튼 */}
                <PostComment/>

                {/* 댓글 작성 칸 */}
                {/* <CommentWrite/> */}
            </Wrap>

            <Footer/>
        </div>
    )
}

export default PostviewPage;

const Wrap = styled.div`
    padding: 0rem 24.25rem;
    // padding-left: 18rem;
    // padding-right: 18rem;
    // margin-left: 18rem;
    // margin-right: 18rem;
`

const StickWrap = styled.div`
    position: sticky;
    top: 0;
`