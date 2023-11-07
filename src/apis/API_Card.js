import axios from "axios";

export const GET_CardList = async (category) => {
    const accessToken = window.localStorage.getItem("accessToken");
    // console.log("test:", category)
    const url = '/posts';
    const res = await axios({
        method: "get",
        url: url,
        headers: {
            'Authorization': `Bearer ${accessToken}`
        },
        params: {
            topic: category,
            page: 0,
            size: 10,
            sort: "string"
        }
    });

    return res.data; 
}
