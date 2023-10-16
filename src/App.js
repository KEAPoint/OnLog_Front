import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/Index";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/lifestyle" element={<HomePage/>}/>
          <Route path="/travel" element={<HomePage/>}/>
          <Route path="/foodie" element={<HomePage/>}/>
          <Route path="/entertainment" element={<HomePage/>}/>
          <Route path="/tech" element={<HomePage/>}/>
          <Route path="/sports" element={<HomePage/>}/>
          <Route path="/news" element={<HomePage/>}/>


          
      </Routes>
    </BrowserRouter>
  );
}

export default App;
