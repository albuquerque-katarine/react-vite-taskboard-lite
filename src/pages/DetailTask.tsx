import { useParams } from "react-router-dom";
import Paragraph from "../components/Paragraph";
import Title from "../components/Title";
import { useSelector } from "react-redux";
import type { RootState } from "../redux/TaskSlice";

export default function DetailTask() {

    const {id} = useParams();

    const task = useSelector((state: RootState) => state.task.value);

    const value = task.find((task)=> task.id === id);

    if(!value) {
        return (
            <section className="flex flex-col text-center sm:text-left justify-evenly m-auto sm:h-[70vh] sm:max-w-[600px] lg:max-w-[1024px] gap-[0.5rem] p-3">
                <Paragraph>Tarefa não encontrada</Paragraph>            
            </section>
        )
        
    }

    return(
        <section className="flex flex-col text-center sm:text-left justify-evenly m-auto sm:h-[70vh] sm:max-w-[600px] lg:max-w-[1024px] gap-[0.5rem] p-3">
            <Title type="h1">Tarefa: { value.title }</Title>

            <hr className="border-blue-marinho" />

            <aside>
                <Title type="h4">{ value.description }</Title>

                <Paragraph>Status: { value.status }</Paragraph>
            </aside>

        </section>
    )
}