import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Tasks from "../pages/Tasks";
import NewTask from "../pages/NewTask";
import About from "../pages/About";
import Custom404 from "../pages/404";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DetailTask from "../pages/DetailTask";
import Custom500 from "../pages/500";

export default function Router() {
    return(
        <HashRouter>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/tasks" element={<Tasks/>}/>
                <Route path="/new" element={<NewTask/>}/>
                <Route path="/detail/:id" element={<DetailTask/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="*" element={<Custom404/>}/>
                <Route path="/500" element={<Custom500/>}/>
            </Routes>
            <Footer/>
        </HashRouter>
    )
}