import { useTheme } from "./contexts/ThemeContext";

import Router from "./routes";

function App() {

  const {theme} = useTheme();

  return (
    <div className={`${theme === "light" ? "bg-gray-color h-[100vh]" : "bg-white h-[100vh]"} h-[100%]`}>      
      <Router/>       
    </div>
  )
}

export default App
