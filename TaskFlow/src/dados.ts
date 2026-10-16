import type {tarefa} from './tipo';

export const tarefas: tarefa[] = [
    {id:1, titulo: "Estudar interfaces", prioridade: "alta", status: "pendente", tags: ["estudo"], criadaEm: new Date()},
    {id:2, titulo: "Comprar café", prioridade: "alta", status: "pendente", tags: ["compras"], criadaEm: new Date()},
    {id:3, titulo: "Aula POO", prioridade: "media", status: "pendente", tags: ["estudo"], criadaEm: new Date()},
    {id:4, titulo: "Praticar typescript", prioridade: "media", status: "em_andamento", tags: ["estudo"], criadaEm: new Date()},
    {id:5, titulo: "Revisar comandos Git", prioridade: "baixa", status: "concluida", tags: ["estudo"], criadaEm: new Date()},
]