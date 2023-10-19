import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/Index";
import LandingPage from "./pages/landing/Index";
import PostWrite from "./pages/PostWrite/Index";
import PostviewPage from "./pages/post/Index";
import LoginPage from "./pages/login/index";
// import KakaoLogin from "./pages/login/KakaoLogin";
import SignUp from "./pages/login/SignUp";
import MyPage from "./pages/myPage/Index";
import KakaoLogin from "./pages/login/KakaoLogin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<LandingPage/>}/>
          
          <Route path="/main" element={<HomePage/>}/>
          <Route path="/main/lifestyle" element={<HomePage/>}/>
          <Route path="/main/travel" element={<HomePage/>}/>
          <Route path="/main/foodie" element={<HomePage/>}/>
          <Route path="/main/entertainment" element={<HomePage/>}/>
          <Route path="/main/tech" element={<HomePage/>}/>
          <Route path="/main/sports" element={<HomePage/>}/>
          <Route path="/main/news" element={<HomePage/>}/>

          <Route path="/mypage/post" element={<SignUp/>}/>
          
      </Routes>
    </BrowserRouter>
  );
}

export default App;
