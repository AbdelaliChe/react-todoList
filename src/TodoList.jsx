import { Todo } from './Todo.jsx';

export function TodoList({todos,deleteTodo,stateTodo}){
    return (
      <>
        {todos.length===0 && "No todos for now 😁"}
          <ul className="list-group w-100">
              {todos.map((todo)=>{
              return <Todo 
              name={todo.name} 
              id={todo.id} 
              completed={todo.completed} 
              key={todo.id} 
              deleteTodo={deleteTodo} 
              stateTodo={stateTodo}/>
              })}
          </ul>
      </>
    )
  }