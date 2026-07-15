import ThechLi from "./ThechLi";

export default function Tech() {
    return (
        <ul className="flex flex-row gap-[0.5rem] flex-wrap my-5 justify-center sm:justify-start">
            <ThechLi>React</ThechLi>
            <ThechLi>Tailwind</ThechLi>
            <ThechLi>Context API</ThechLi>
            <ThechLi>Redux Toolkit</ThechLi>
            <ThechLi>React Router DOM</ThechLi>
            <ThechLi>React Hook Form</ThechLi>
        </ul>
    )
}