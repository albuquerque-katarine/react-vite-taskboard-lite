import type { ReactNode } from "react"

interface IPropsLayout {
    children: ReactNode;
}

export default function Layout({ children }:IPropsLayout) {
    return(
        <section className="flex flex-col text-center sm:text-left justify-evenly m-auto sm:h-[70vh] sm:max-w-[600px] lg:max-w-[1024px] gap-[0.5rem] p-3">
            { children }
        </section>
    )
}