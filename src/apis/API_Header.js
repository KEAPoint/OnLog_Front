import axios from "axios";
import { useSelector } from "react-redux";

const accessToken = window.localStorage.getItem("accessToken");
const userId = window.localStorage.getItem("userId");
// const accessToken = "eyJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE2OTg3MzEyMjAsImV4cCI6MTY5OTMzNjAyMCwicGFzc3dvcmQiOiJ1ejRVSkFlbVBJQ2MrODdVb1VjMXd3amMrR0hrd3hNQVN2cmZ5N0dOOWl0alo2NkZ1dmlLQjhPK1dCeHo0Q1Q2LzdhTDJVR0Z2ZUlUOW9LNTJsc2FnUT09In0.ghv4RVqN8l2XW1jfD_TRWypj7xIxFeaJoK2ykegjTjG9QMFI3vPvYS1ADXb3mJ1SEoWWbjgEChv328ljOqdfJw";

export const Get_Profile = async () => {
    // const accessToken = useSelector(state => state.login.token.accessToken);
    const url = '/blog';

    const res = await axios({
        method: "get",
        url: url,
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
        params: {
            'blog_id': userId
        }  
    });
    console.log(accessToken);
    return res.data;
}