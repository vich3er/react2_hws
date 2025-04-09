import {useEffect, useState} from "react";
import {ITodo} from "../models/ITodo.ts";
import {getTodo} from "../services/api-servise.ts";
import TodosComponent from "./TodosComponent.tsx";


const TodoComponent = () => {

    const [todos, setTodos] = useState<ITodo[]>([])
    useEffect(() => {
        getTodo().then(res=> setTodos(res))
    })

    return (
        <div>
            {
                todos.map((todo)=> <TodosComponent key={todo.id} todo={todo}/>)
            }
        </div>
    );
};

export default TodoComponent;