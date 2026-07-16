import { useParams } from "react-router-dom";
import Paragraph from "../components/Paragraph";
import Title from "../components/Title";
import { useSelector } from "react-redux";
import type { RootState } from "../redux/TaskSlice";
import Layout from "../components/Layout";

export default function DetailTask() {

    const {id} = useParams();

    const task = useSelector((state: RootState) => state.task.value);

    const value = task.find((task)=> task.id === id);

    if(!value) {
        return (
            <Layout>

                <Paragraph>Tarefa não encontrada</Paragraph>            

            </Layout>
        )
        
    }

    return(
        <Layout>

            <Title type="h1">Tarefa: { value.title }</Title>

            <hr className="border-blue-marinho" />

            <aside>
                <Title type="h4">{ value.description }</Title>

                <Paragraph>Status: { value.status }</Paragraph>
            </aside>

        </Layout>
    )
}