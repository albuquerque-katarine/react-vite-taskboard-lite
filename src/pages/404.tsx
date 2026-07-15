import Title from "../components/Title";

export default function Custom404() {
    return(
        <section className="flex flex-col text-center sm:text-left justify-evenly m-auto sm:h-[70vh] sm:max-w-[600px] lg:max-w-[1024px] gap-[0.5rem] p-3">
            <Title type="h1">Erro 404</Title>
            <hr className="border-blue-marinho" />
            <Title type="h4">Página não encontrada, tente novamente!</Title>
        </section>
    )
}