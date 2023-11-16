import Header from '../../components/common/Header';
import PostHeader from './PostHeader';
import PostText from './PostText';
import PostComment from './PostComment';
import PostThumb from './PostThumb';
import CommentWrite from './CommentWrite';
import Footer from '../../components/common/Footer';
import styled from 'styled-components';
import { useEffect, useState, React } from 'react';
import { Get_SinglePost } from '../../apis/API_Postview';
import { useParams } from "react-router-dom";

const PostviewPage = () => {
    const [post, setPost] = useState([]);
    // 수정
    const { postId } = useParams(); // URL에서 postId 가져오기

    useEffect(() => {
        window.scrollTo({top:0, behavior:"smooth"});

        const fetchPosts = async () => {
            const data = await Get_SinglePost(postId);

            console.log(data.data);
            setPost(data.data);
        }
        fetchPosts();
      }, [postId]);

    return(
        <div>
            <StickWrap>
                <Header/>
                <Wrap>
                    <PostHeader post={post}/>
                </Wrap>
            </StickWrap>
            <Wrap>
                {/* 작성자 프로필 / 썸네일 사진 / 3줄 요약 글 */}
                <PostThumb post={post}/>

                {/* 게시글 내용 / 좋아요 수 / 수정 버튼 / 삭제 버튼 */}
                <PostText post={post}/>

                {/* 댓글목록*/}
                <PostComment post={post}/>

                {/* 댓글 작성 칸 + 댓글 작성 버튼 */}
                <CommentWrite post={post}/>
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