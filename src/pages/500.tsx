import Layout from "../components/Layout";
import Title from "../components/Title";

export default function Custom500() {
    return(
        <Layout>

            <Title type="h1">Erro 500</Title>
            <hr className="border-blue-marinho" />
            <Title type="h4">Ocorreu um erro no servidor, tente novamente!</Title>

        </Layout>
    )
}