import axios from "axios";

const accessToken = localStorage.getItem('accessToken');
// const userId = localStorage.getItem('userId');

// export const Get_SinglePost = async () => {
//     fetch(url, {
//         method: 'GET',
//       })
    
//       .then(response => {
//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         return response.json();
//       })
//       .then(data => setPost(data))
//       .catch(error => console.error(error));
// }

export const Get_SinglePost = async (postId) => {
    // const response = await axios.get(`/posts/${postId}`);
    const response = await axios({
        method: "get",
        url: `/posts/${postId}`,
        headers: {
            'Authorization': `Bearer ${accessToken}`
        }
    });
    return response.data;
};