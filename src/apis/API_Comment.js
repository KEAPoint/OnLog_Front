import axios from "axios";
import { useSelector } from "react-redux";

const accessToken = window.localStorage.getItem("accessToken");
const userId = window.localStorage.getItem("userId");

export const Post_Comment = async (cmtData) => {
    const url = '/post/comments';
    console.log('postid: ',cmtData.postId);
    console.log('content: ',cmtData.content);
    console.log('parentId: ',cmtData.parentCommentId);
    console.log('postId type:', typeof cmtData.postId);  // postId의 데이터 타입 출력
    console.log('parentId type: ',typeof cmtData.parentCommentId);  // parentCommentId의 데이터 타입 출력
    console.log('content type: ', typeof cmtData.content);


    try {
        const response = await axios({
            method: "post",
            url: url,
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            data: {
                postId: cmtData.postId,
                content: cmtData.content,
                // parentCommentId: cmtData.parentCommentId,
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
}