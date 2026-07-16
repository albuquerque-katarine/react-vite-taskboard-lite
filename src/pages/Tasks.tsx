import { Link } from "react-router-dom";
import Button from "../components/Button";
import { useTheme } from "../contexts/ThemeContext";
import { useDispatch, useSelector } from "react-redux";
import type { Task } from "../types/Task";
import type { RootState } from "../redux/TaskSlice";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { remove } from "../redux/Story";
import Layout from "../components/Layout";

export default function Tasks() {

    const { theme } = useTheme();

    const data: Task[] = useSelector( (state: RootState) => state.task.value );
        
    const [result, setResult] = useState<Task[]>(data);

    const { register, handleSubmit } = useForm<Task>();

    const dispatch = useDispatch();

    useEffect(() =>{
        setResult(data);
    },[data]);

    const pesquisar = (taskSearch: Task) => {
        const texto = taskSearch.title?.toLowerCase() ?? "";
        const tarefas = data.filter(task =>task.title.toLowerCase().includes(texto));
        setResult(tarefas);
    }

    const limparLista = () => {
        dispatch(remove());
    }
    
    return(

        <Layout>

            <aside className="flex flex-col gap-[0.5rem]">

                <form onSubmit={handleSubmit(pesquisar)} className="flex flex-row flex-wrap justify-center items-center gap-[0.5rem] m-auto my-5 w-full max-w-[400px] sm:max-w-[1024px]">
                    <label className={`w-full ${theme === 'light' ? 'text-white' : 'text-gray-color'} font-bold`}>Pesquisar pelo título da tarefa:</label>
                    <input
                        type="text"
                        className={`bg-transparent ${theme === 'light' ? 'placeholder:text-white text-white border-white' : 'placeholder:text-gray-600 border-blue-marinho'}  border-solid border-2 rounded-[10px] h-[40px] w-[300px] md:w-full max-w-[310px] m-auto md:max-w-[1024px] py-2 px-[10px] my-2`}
                        placeholder="Pesquise pelo título da tarefa..."
                        {...register("title")}
                    />                
                    <Button type="submit">Pesquisar</Button>
                    <Button type="reset">Limpar</Button>
                </form>

                <Button onclick={limparLista}>Limpar Lista</Button>
                
                <table className={`${theme === 'light' ? 'border-white' : 'border-gray-color'} w-full border-solid border-y-2`}>
                
                    <thead className={`${theme === 'light' ? 'border-white' : 'border-gray-color'} w-full border-b-2 border-solid`}>
                        <tr className="w-full text-left">
                            <th className={`${theme === 'light' ? 'text-white' : 'text-gray-color'} p-2`}>Tarefa</th>
                            <th className={`${theme === 'light' ? 'text-white' : 'text-gray-color'} p-2`}>Status</th>
                            <th className={`${theme === 'light' ? 'text-white' : 'text-gray-color'} p-2`}>Ações</th>
                        </tr>
                    </thead>
                
                    <tbody className="w-full">
                        {
                            result?.map(task=> (                            
                                <tr key={task.id} className="w-full text-left">
                                    <td className={`${theme === 'light' ? 'text-white' : 'text-gray-color'} p-2`}>{ task.title }</td>
                                    <td className={`${theme === 'light' ? 'text-white' : 'text-gray-color'} p-2`}>{ task.status }</td>
                                    <td className={`${theme === 'light' ? 'text-white' : 'text-gray-color'} p-2`}>
                                        <Link to={`/detail/${task.id}`} className={`${theme === 'light' ? 'hover:bg-teal-600 text-white' : 'hover:bg-teal-100 text-gray-color'} font-bold py-2 px-3 rounded-[10px] w-full max-w-[130px] lg:max-w-[200px] text-center`}>Detalhes</Link>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
    
                </table>

            </aside>

        </Layout>
    )
}