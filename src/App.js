import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/Index";
import LandingPage from "./pages/landing/Index";
import PostWrite from "./pages/PostWrite/Index";
import PostviewPage from "./pages/postView/Index";
import LoginPage from "./pages/login/index";
import SignUp from "./pages/login/SignUp";
import MyPage from "./pages/myPage/Index";
import KakaoLogin from "./pages/login/KakaoLogin";
import ProfileEditPage from "./pages/profileEdit/Index";
import SearchPage from "./pages/search/Index";
import SubscribePage from "./pages/subscribe/Index";
import NoticePage from "./pages/notification/Index";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<LandingPage/>}/>
          
          <Route path="/login" element={<LoginPage/>}/>


          <Route path="/main" element={<HomePage/>}/>
          <Route path="/main/lifestyle" element={<HomePage/>}/>
          <Route path="/main/travel" element={<HomePage/>}/>
          <Route path="/main/foodie" element={<HomePage/>}/>
          <Route path="/main/entertainment" element={<HomePage/>}/>
          <Route path="/main/tech" element={<HomePage/>}/>
          <Route path="/main/sports" element={<HomePage/>}/>
          <Route path="/main/news" element={<HomePage/>}/>

          {/* <Route path="/mypage/post" element={<SignUp/>}/> */}
          <Route path="/mypage" element={<MyPage/>}/>
          <Route path="/mypage/edit" element={<ProfileEditPage/>}/>
          <Route path="/mypage/postwrite" element={<PostWrite/>}/>
          <Route path="/mypage/post" element={<PostviewPage/>}/>
          <Route path="/search" element={<SearchPage/>}/>
          <Route path="/subscribed" element={<SubscribePage/>}/>
          <Route path="/notification" element={<NoticePage/>}/>
          
      </Routes>
    </BrowserRouter>
  );
}

export default App;
