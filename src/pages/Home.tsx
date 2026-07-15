import { Link } from "react-router-dom";
import Tech from "../components/Tech";
import Title from "../components/Title";
import { useTheme } from "../contexts/ThemeContext";

export default function Home() {

    const { theme } = useTheme();

    return(
        <section className="flex flex-col text-center sm:text-left justify-evenly m-auto sm:h-[70vh] sm:max-w-[600px] lg:max-w-[1024px] gap-[0.5rem] p-3">
            
            <Title type="h1">TaskBoard Lite</Title>
            <hr className="border-blue-marinho" />

            <Title type="h4">Aplicação criada para demonstrar:</Title>

            <Tech/>

            <div className="flex flex-row gap-[0.5rem] justify-center sm:justify-start">
                <Link to="/tasks" className={`${theme === 'light' ? 'bg-primary' : 'bg-blue-marinho'} hover:bg-teal-600 text-white font-bold py-2 px-3 rounded-[10px] w-full max-w-[130px] lg:max-w-[200px] text-center`}>Ver Tarefas</Link>
                <Link to="/new" className={`${theme === 'light' ? 'bg-primary' : 'bg-blue-marinho'} hover:bg-teal-600 text-white font-bold py-2 px-3 rounded-[10px] w-full max-w-[130px] lg:max-w-[200px] text-center`}>Nova Tarefa</Link>
            </div>

        </section>
    )
}