import { Link } from "react-router-dom";
import Button from "../Button";
import { useTheme } from "../../contexts/ThemeContext";
import { UserProvider, useUser } from "../../contexts/UserContext";

export default function Navbar() {

    const { theme, setTheme } = useTheme();

    const { letra, name, email } = useUser();

    const mudaTheme = () => {
        setTheme(theme === 'dark' ? 'light':'dark');
    }

    return(
        <nav className='flex flex-col items-center lg:flex-row lg:justify-between gap-[0.5rem] m-auto md:max-w-[600px] lg:max-w-[1024px] p-3'>
            
            <Link to="/">
                <img className="m-auto lg:m-0 h-[20px]" src={`${theme === "light" ? "/logo-green.svg" : "/logo.svg"}`} alt="Logo" />
            </Link>

            <ul className="flex flex-row justify-center gap-[0.5rem]">
                <li className={`${theme === "light" ? "text-white" : "text-gray-color"} font-bold`}><Link to="/">Home</Link></li>
                <li className={`${theme === "light" ? "text-white" : "text-gray-color"} font-bold`}><Link to="/tasks">Tarefas</Link></li>
                <li className={`${theme === "light" ? "text-white" : "text-gray-color"} font-bold`}><Link to="/new">Nova Tarefa</Link></li>
                <li className={`${theme === "light" ? "text-white" : "text-gray-color"} font-bold`}><Link to="/about">Sobre</Link></li>
            </ul>

            <Button background="backgrond" onclick={mudaTheme}>
                <img className="w-[28px] rounded-[11px]" src={`${theme === "light" ? "/background-green.svg" : "/background-blue.svg"}`} alt="Background" />
            </Button>

            <UserProvider>
                <aside className="flex flex-col items-center lg:items-start">
                    <article className="flex flex-row gap-[0.5rem] align-middle">
                        <h2 className={`flex flex-col items-center justify-center w-[30px] h-[30px] rounded-[25px] border-solid border-[1px] ${theme === 'light' ? 'border-white bg-green-claro text-gray-color' : 'border-blue-marinho bg-blue-marinho text-white'} font-bold`}>{ letra }</h2>
                        <p className={`flex flex-col items-center justify-center h-[30px] font-bold ${theme === 'light' ? 'text-white' : 'text-blue-marinho'}`}>{ name }</p>
                    </article>
                    <h6 className={`${theme === 'light' ? 'text-white' : 'text-gray-color'} text-sm font-bold`}>{ email }</h6>
                </aside>
            </UserProvider>

        </nav>
    )
}