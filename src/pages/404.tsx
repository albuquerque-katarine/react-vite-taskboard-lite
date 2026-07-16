import Layout from "../components/Layout";
import Title from "../components/Title";

export default function Custom404() {
    return(
        <Layout>

            <Title type="h1">Erro 404</Title>
            <hr className="border-blue-marinho" />
            <Title type="h4">Página não encontrada, tente novamente!</Title>

        </Layout>
    )
}