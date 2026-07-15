import { useTheme } from "../../contexts/ThemeContext"
import TagA from "./TagA";

export default function Footer() {

    const { theme } = useTheme();

    return(
        <footer className={`flex flex-row items-center justify-center gap-[0.5rem] py-3 ${theme === 'light' ? "bg-gray-color" : "bg-white"}`}>
            <TagA href="https://www.linkedin.com/in/katarine-albuquerque/">Linkedin</TagA>
            <TagA href="https://github.com/albuquerque-katarine?tab=repositories">Github</TagA>         
        </footer>
    )
}