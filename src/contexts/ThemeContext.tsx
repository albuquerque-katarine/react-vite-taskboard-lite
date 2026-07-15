import { createContext, useContext, useState, type Dispatch, type ReactNode, type SetStateAction } from "react";
import { Provider } from "react-redux";
import { Store } from "../redux/TaskSlice";

interface IPropsTheme {
    children: ReactNode;
}

type ThemeState = {
    theme: string;
    setTheme: Dispatch<SetStateAction<string>>;
}

export const ThemeContext = createContext<ThemeState>({
    theme: 'light',
    setTheme: () => {},
});

export const ThemeProvider = (props:IPropsTheme) => {

    const [theme, setTheme] = useState('');

    return (
        <Provider store={Store}>
            <ThemeContext.Provider value={{theme, setTheme}}>
                { props.children }
            </ThemeContext.Provider>
        </Provider>
    )
}

export function useTheme() {
    const context = useContext(ThemeContext);

    if(!context) {
        throw new Error("useTheme deve ser usado dentro de ThemeProvider");
    }

    return context;
}