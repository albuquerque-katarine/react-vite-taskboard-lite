import type { ReactNode } from "react"
import { useTheme } from "../../contexts/ThemeContext";

interface IPropsButton {
    children: ReactNode;
    onclick?: () => void;
    background?: string;
    type?: 'submit'|'button'|'reset';
}

export default function Button(props: IPropsButton) {

    const { theme } = useTheme();
    
    if(props.background === "backgrond") {
        return <button className="bg-none max-w-[28px] h-[40px]" onClick={props.onclick}>{ props.children }</button>
    }
    
    return <button type={props.type} className={`${theme === 'light' ? 'bg-primary' : 'bg-blue-marinho'} hover:bg-teal-600 text-white h-[40px] font-bold py-2 px-3 rounded-[10px] w-full max-w-[130px] lg:max-w-[200px]`} onClick={props.onclick}>{ props.children }</button>    
}