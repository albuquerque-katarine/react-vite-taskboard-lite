import { createContext, useContext, useState, type Dispatch, type ReactNode, type SetStateAction } from "react";

interface IPropsUserProvider {
    children: ReactNode
}

type UserState = {
    letra: string;
    setLetra: Dispatch<SetStateAction<string>>;
    name: string;
    setName: Dispatch<SetStateAction<string>>;
    email: string;
    setEmail: Dispatch<SetStateAction<string>>;
} 

export const UserContext = createContext<UserState>({
    letra: 'FT', 
    setLetra: () => {},
    name: 'Fulano de Tal', 
    setName: () => {},   
    email: 'fulano@email.com',
    setEmail: () => {}
});

export const UserProvider = (props: IPropsUserProvider) => {

    const [letra, setLetra] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    
    return(
        <UserContext.Provider value={ { name, setName, email, setEmail, letra, setLetra } }>
            { props.children }
        </UserContext.Provider>
    )
} 

export function useUser() {

    const context = useContext(UserContext);

    if(!context) {
        throw new Error('user fica dentro de UserProvider');
    }

    return context;
}
