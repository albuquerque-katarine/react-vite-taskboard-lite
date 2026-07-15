import Paragraph from "../components/Paragraph"
import Tech from "../components/Tech"
import Title from "../components/Title"

export default function About() {
    return(
        <section className="flex flex-col gap-[0.5rem] justify-evenly text-center sm:text-left sm:max-w-[600px] lg:max-w-[1024px] m-auto sm:h-[70vh]">

            <Title type="h1">Sobre o Projeto</Title>
            <hr className="border-blue-marinho" />

            <Title type="h4">Este projeto foi criado para demonstrar o uso de:</Title>

            <Tech/>

            <Paragraph>Todos os dados são armazenados em <strong>arrays</strong>.</Paragraph>
            
        </section>
    )
}