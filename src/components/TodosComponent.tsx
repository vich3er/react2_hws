import {ITodo} from "../models/ITodo.ts";
import {FC} from "react";
import isCompleted from "../assets/img.png";
import isNotCompleted from "../assets/img_1.png";



interface TodosProps {
    todo: ITodo
}

const TodosComponent:FC<TodosProps> = ( {todo}) => {
    return (
        <div className={" border-4 border-blue-500 m-5 p-2"}>
            <p>userId: {todo.userId}, id:{todo.id}</p>
            <div className={'flex flex-row  justify-between '}>
                task: {todo.title}
          <span>
              {/* чому не працює просто вказання шляху то зображень без іпорту?*/}
              <img className={'h-[20px]'} src={todo.completed? isCompleted: isNotCompleted  } alt={todo.completed? "copmpeted": "not completed"}/>
          </span>
            </div>
        </div>
    );
};

export default TodosComponent;