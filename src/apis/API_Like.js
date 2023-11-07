import axios from "axios";

const accessToken = localStorage.getItem('accessToken');
const url = '/posts/like';

export const Post_Like = async (postId) => {
    try {
        const response = await axios({
            method:"post",
            url: url,
            headers: {
                'Authorization': `Bearer ${accessToken}`
            },
            data: {
                postId: postId,
            }
        });
        return response.data;
    } catch (error) {
        console.error('post like error: ', error);
        return { success: false, error: error.message };
    }
};

export const Delete_Like = async (postId) => {
    try {
        const response = await axios({
            method:"delete",
            url: url,
            headers: {
                'Authorization': `Bearer ${accessToken}`
            },
            data: {
                postId: postId,
            }
        });
        return response.data;
    } catch (error) {
        console.error('delete like error: ', error);
        return { success: false, error: error.message };
    }
}