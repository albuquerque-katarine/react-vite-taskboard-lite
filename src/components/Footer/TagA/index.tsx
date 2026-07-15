import type { ReactNode } from "react";
import { useTheme } from "../../../contexts/ThemeContext"

interface IPropsTagA {
    children: ReactNode;
    href: string;
}

export default function TagA(props: IPropsTagA) {

    const { theme } = useTheme();

    return <a target="_blank" className={`${theme === 'light' ? "text-white" : "text-gray-color"} font-bold`} href={ props.href }>{ props.children }</a>
}