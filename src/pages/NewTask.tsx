import { useForm } from "react-hook-form";
import Button from "../components/Button";
import Title from "../components/Title";
import { useTheme } from "../contexts/ThemeContext";
import type { Task } from "../types/Task";
import { useDispatch } from "react-redux";
import { add } from "../redux/Story";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";

export default function NewTask() {

    const navigate = useNavigate();

    const { theme } = useTheme();

    const { register, handleSubmit, formState: { errors }} = useForm<Task>();

    const dispatch = useDispatch();

    const onSubmit = (data: Task) => {
        dispatch(add(data));
        navigate("/tasks");
    };

    return (
        <Layout>


            <Title type="h1">Nova Tarefa</Title>

            <hr className="border-blue-marinho" />

            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center md:items-start mx-2">
                <input
                    type="hidden"
                    defaultValue={Date.now().toString(36)}
                    className={`bg-transparent ${theme === 'light' ? 'placeholder:text-white text-white border-white' : 'placeholder:text-gray-600 border-blue-marinho'}  border-solid border-2 rounded-[10px] h-[40px] w-full max-w-[310px] m-auto md:max-w-[1024px] py-2 px-[10px] mb-2`}
                    {...register("id")}
                />


                <input
                    type="text"
                    className={`bg-transparent ${theme === 'light' ? 'placeholder:text-white text-white border-white' : 'placeholder:text-gray-600 border-blue-marinho'}  border-solid border-2 rounded-[10px] h-[40px] w-full max-w-[310px] m-auto md:max-w-[1024px] py-2 px-[10px] mb-2`}
                    placeholder="Informe o Título"
                    {...register("title", {required: "O título é obrigatório"})}
                />

                {errors.title && ( <p className={`${theme === 'light' ? 'text-red-300' : 'text-red-500'} text-sm mb-2`}>{errors.title.message}</p> )}

                <textarea 
                    className={`bg-transparent ${theme === 'light' ? 'placeholder:text-white border-white text-white' : 'placeholder:text-gray-color border-blue-marinho'}  border-solid border-2 rounded-[10px] h-[120px] w-full max-w-[310px] mx-auto my-2 md:max-w-[1024px] px-[10px] md:my-2`} 
                    placeholder="Descreva o que vai fazer..."
                    {...register("description", {required:"A descrição é obrigatória"})}
                    ></textarea>

                {errors.description && ( <p className={`${theme === 'light' ? 'text-red-300' : 'text-red-500'} text-sm mb-2`}>{errors.description.message}</p> )}
                
                <select 
                    className={`bg-transparent ${theme === 'light' ? 'placeholder:text-white text-white border-white' : 'placeholder:text-gray-color text-gray-color border-blue-marinho'}  border-solid border-2 rounded-[10px] h-[50px] w-full max-w-[310px] mx-auto my-2 md:max-w-[1024px] px-[10px]`}
                    {...register("status", {required: "Selecione um status"})}
                >
                    <option className="text-gray-color" value="">Selecione...</option>
                    <option className="text-gray-color" value="Em Andamento">Em Andamento</option>
                    <option className="text-gray-color" value="Concluído">Concluído</option>
                </select>

                {errors.status && ( <p className={`${theme === 'light' ? 'text-red-300' : 'text-red-500'} text-sm mb-2`}>{errors.status.message}</p> )}
                                                                
                <Button type="submit">Salvar Tarefa</Button>
            </form>

        </Layout>
    )
}