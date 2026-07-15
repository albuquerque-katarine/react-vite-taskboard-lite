import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { useTheme } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Tasks from "./pages/Tasks";
import NewTask from "./pages/NewTask";
import DetailTask from "./pages/DetailTask";
import About from "./pages/About";
import Custom404 from "./pages/404";
import Custom500 from "./pages/500";

function App() {

  const {theme} = useTheme();

  return (
    <div className={`${theme === "light" ? "bg-gray-color h-[100vh]" : "bg-white h-[100vh]"} h-[100%]`}>      
      <Navbar/> 
      <BrowserRouter>        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/new" element={<NewTask />} />
          <Route path="/detail/:id" element={<DetailTask />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Custom404 />} />
          <Route path="/500" element={<Custom500 />} />
        </Routes>
      </BrowserRouter>
      <Footer/>       
    </div>
  )
}

export default App
