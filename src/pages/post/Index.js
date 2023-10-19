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
            <PostHeader/>
            <PostThumb/>
            <PostText/>
            <PostComment/>
            <CommentWrite/>
        </div>
    )
}

export default PostviewPage;