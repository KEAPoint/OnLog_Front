import axios from "axios";
import { useSelector } from "react-redux";

// const accessToken = window.localStorage.getItem("accessToken");
const accessToken = "eyJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE2OTg4NDU2MTAsImV4cCI6MTY5OTQ1MDQxMCwicGFzc3dvcmQiOiI1SHdSVDZQcmc1bVYxeWRXQ2x4ZEo5Rk96RTJBMEpKNWpzY1dCREdMUStsU2FIZHl3VUJkc3NxM0hOYU95ZmpmZzE0SnNtVy9tSmdYK1lZVWU4bFdDQT09In0.ZSUTK6MvjnPyiR64WlQQdhBxPkh9kXIdVITny65lTLqFb8J-xAU5GNiXv59hBOeWJCH2sPNtxUJjwrGA3XJmKA";

export const Get_Profile = async () => {
    // const accessToken = useSelector(state => state.login.token.accessToken);
    const url = '/blog/profile';

    const res = await axios({
        method: "get",
        url: url,
        headers: {
            'Authorization': `Bearer ${accessToken}`
        },
    });
    console.log(accessToken)
    return res.data;
}