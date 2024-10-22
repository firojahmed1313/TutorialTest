import Home from "./page/Home.jsx";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import About from "./page/About.jsx";
import FromPage from "./page/FromPage.jsx";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/frompage" element={<FromPage/>}></Route>
    </Routes>
  );
}

export default App;
