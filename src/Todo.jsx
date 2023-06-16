export function Todo({name,id,completed,deleteTodo,stateTodo}){
    return (
      <li className={`list-group-item d-flex align-items-center justify-content-between ${completed && "bg-light"}`}>
        <div>
          <input className="form-check-input me-1" checked={completed} type="checkbox" value={id} onChange={(e)=>stateTodo(id,e.target.checked)}/> 
          <span className={`${completed && "text-decoration-line-through"}`}>{name}</span>
        </div>
        <button onClick={()=>deleteTodo(id)} 
        className={`btn btn-sm ${completed? "btn-secondary": "btn-danger"}`}
        >Delete</button>
      </li>
    )
  }