import Layout from "../components/Layout"
import Paragraph from "../components/Paragraph"
import Tech from "../components/Tech"
import Title from "../components/Title"

export default function About() {
    return(
        <Layout>

            <Title type="h1">Sobre o Projeto</Title>
            <hr className="border-blue-marinho" />

            <Title type="h4">Este projeto foi criado para demonstrar o uso de:</Title>

            <Tech/>

            <Paragraph>Todos os dados são armazenados em <strong>arrays</strong>.</Paragraph>
            
        </Layout>
    )
}