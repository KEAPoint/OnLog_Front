import axios from "axios";

const url = '/post/comments';
const accessToken = localStorage.getItem('accessToken');


export const Post_Comment = async (cmtData) => {
    // console.log('postid: ',cmtData.postId);
    // console.log('content: ',cmtData.content);
    // console.log('parentId: ',cmtData.parentCommentId);
    // console.log('postId type:', typeof cmtData.postId);  // postId의 데이터 타입 출력
    // console.log('parentId type: ',typeof cmtData.parentCommentId);  // parentCommentId의 데이터 타입 출력
    // console.log('content type: ', typeof cmtData.content);


    try {
        const response = await axios({
            method: "post",
            url: url,
            headers: {
                'Authorization': `Bearer ${accessToken}`
            },
            data: {
                postId: cmtData.postId,
                content: cmtData.content,
                parentCommentId: cmtData.parentCommentId,
            }
        });
        return response.data;
    } catch (error) {
        console.error("댓글 작성 중 에러 발생:", error);
        
        // 오류 응답의 데이터를 출력
        if (error.response) {
            console.error("Error response data:", error.response.data);
        }
    }
};

export const Delete_Comment = async (commentId) => {
    try {
        const response = await axios({
            method:"delete",
            url: url,
            // url: `${url}/${commentId}`,  // commentId를 URL에 포함
            headers: {
                'Authorization': `Bearer ${accessToken}`
            },
            data: {
                commentId: commentId,
            }
        });
        return response.data;
    } catch (error) {
        console.error('delete comment error: ', error);
        return { success: false, error: error.message };
    }
};
