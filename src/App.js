import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/Index";
import LandingPage from "./pages/landing/Index";
import PostWrite from "./pages/PostWrite/Index";

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

          <Route path="/mypage/post" element={<PostWrite/>}/>

          
      </Routes>
    </BrowserRouter>
  );
}

export default App;
