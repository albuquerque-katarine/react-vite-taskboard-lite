import type { ReactNode } from "react"
import { useTheme } from "../../contexts/ThemeContext";

interface IPropsParagraph {
    children: ReactNode;
}

export default function Paragraph(props: IPropsParagraph) {
    
    const { theme } = useTheme();

    return <p className={`${theme === 'light' ? 'text-white' : 'text-gray-color'}`}>{ props.children }</p>
}