export function TodoField({getItem, addItem}){
    return (
        <div className='input-group mb-3'>
              <input onChange={getItem} type="text" className="form-control" placeholder="todo item..."/>
              <button 
              onClick={addItem} 
              className="btn btn-primary" 
              type="button" id="button-addon2">
                add
              </button>
        </div>
    )
}