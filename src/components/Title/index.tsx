import type { ReactNode } from "react";
import { useTheme } from "../../contexts/ThemeContext";

interface IPropsTitle {
    children: ReactNode;
    type: string;
}

export default function Title(props:IPropsTitle) {

    const {theme} = useTheme();

    if(props.type === "h1") {
        return <h1 className={`${theme === 'light' ? 'text-white' : 'text-gray-color'} text-3xl lg:text-5xl my-5`}>{props.children}</h1>
    }
    
    if(props.type === "h4") {
        return <h4 className={`${theme === 'light' ? 'text-white' : 'text-gray-color'} text-xl lg:text-xl my-5`}>{props.children}</h4>
    }

    return <h2 className={`${theme === 'light' ? 'text-white' : 'text-gray-color'} text-2xl lg:text-4xl my-5`}>{ props.children }</h2>    
}