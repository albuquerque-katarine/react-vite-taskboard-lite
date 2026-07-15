# TaskBoard Lite

### React + TypeScript + Vite

## Objetivo

Esta aplicação demonstra o uso das principais tecnologias do ecossistema React em um projeto simples e organizado. Ela utiliza React Router para navegação, Context API para configurações globais e Redux Toolkit para gerenciar uma lista de tarefas em memória. Todos os dados são armazenados em arrays, sem banco de dados ou Local Storage, com foco em boas práticas e organização de código para portfólio.

## Funcionalidades

### React Router

/<br/>
/tasks<br/>
/new<br/>
/details/:id<br/>
/about<br/>

### Context API

ThemeContext (light/dark)
UserContext (letra/name/email)

### Redux

Adiciona: dispatch(add(task))
limpar lista: dispatch(remove())

### Type

``` 
type Task = { 
  id:number; 
  title:string;
  description:string;
  status:string;
} 
```

### Home Page

![alt text](image.png)

### Tarefas Page

![alt text](image-1.png)

### Detalhes da Tarefa Page

![alt text](image-2.png)

### Nova Tarefa Page

![alt text](image-3.png)

### Nova Tarefa Page com Validação

![alt text](image-4.png)

### Sobre Page

![alt text](image-5.png)

### Erro 404 Page

![alt text](image-6.png)

### Erro 500 Page

![alt text](image-7.png)

## Tecnologias

- React
- TypeScript
- React Router DOM
- Tailwind CSS
- Context API
- Redux Toolkit
- React Hook Form

## Contatos
- E-mail: [kba.2879@gmail.com](mailTo:kba.2879@gmail.com)
- Linkedin: [/katarine-albuquerque](https://www.linkedin.com/in/katarine-albuquerque/)
