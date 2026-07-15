import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ThemeProvider } from './contexts/ThemeContext.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home.tsx'
import Tasks from './pages/Tasks.tsx'
import NewTask from './pages/NewTask.tsx'
import DetailTask from './pages/DetailTask.tsx'
import About from './pages/About.tsx'
import Custom404 from './pages/404.tsx'
import Custom500 from './pages/500.tsx'
import Footer from './components/Footer/index.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <App />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/new" element={<NewTask />} />
          <Route path="/detail/:id" element={<DetailTask />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Custom404 />} />
          <Route path="/500" element={<Custom500 />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
)
