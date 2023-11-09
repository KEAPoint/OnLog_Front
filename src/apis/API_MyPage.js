import axios from "axios";
import { useSelector } from "react-redux";

export const Get_Profile = async () => {
    const accessToken = window.localStorage.getItem("accessToken");
    const userId = window.localStorage.getItem("userId");
    // const accessToken = useSelector(state => state.login.token.accessToken);

    const url = '/blog';
    const res = await axios({
        method: "get",
        url: url,
        headers: {
            'Authorization': `Bearer ${accessToken}`
        },
        params: {
            'blog_id': userId
        }  
    });
    return res.data;
}

// 카테고리 관련
export const Get_Categori = async () => {
    const accessToken = window.localStorage.getItem("accessToken");
    const userId = window.localStorage.getItem("userId");

    const url = '/blog/categories';
    const res = await axios({
        method: "get",
        url: url,
        headers: {
            'Authorization': `Bearer ${accessToken}`
        },
        params: {
            'blog_id': userId
        }  
    });
    return res.data;
}
export const Post_Categori = async (inputValue) => {
    const accessToken = window.localStorage.getItem("accessToken");

    const url = '/blog/categories';
    const res = await axios({
        method: "post",
        url: url,
        headers: {
            'Authorization': `Bearer ${accessToken}`
        },
        data: {
            name: inputValue,
        }
    });

    return res.data;
}