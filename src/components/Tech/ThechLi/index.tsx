import type { ReactNode } from "react";
import { useTheme } from "../../../contexts/ThemeContext";

interface IPropsTechLi {
    children: ReactNode;
}

export default function ThechLi(props: IPropsTechLi) {
    
    const { theme } = useTheme();

    return <li className={`p-2 rounded-[10px] ${theme === 'light' ? 'bg-green-claro hover:bg-lime-400 hover:text-gray-700 text-gray-color' : 'bg-green-color hover:bg-lime-400 hover:text-gray-700 text-white'} font-bold`}>{ props.children }</li>;
}