//import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState,useEffect } from 'react';
import { TodoList } from './TodoList.jsx';
import { TodoField } from './form.jsx';


function App() {
  let [item,setItem]=useState("");
  let [listItems, setListItems] =useState(()=>{
    let localItems = localStorage.getItem("todos");
    if(localItems!=null){
      return JSON.parse(localItems);
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(listItems));
  }, [listItems]);

  let addItem = (e)=>{
    if(item===""){
      return;
    }
    item = {
      id: listItems.length===0 ? 1:listItems[listItems.length-1].id+1,
      name: item,
      completed: false
    };
    setListItems([...listItems,item]);
    setItem("");
    e.target.previousSibling.value="";
  }

  let getItem = (e)=>{
    setItem(e.target.value);
  }

  let deleteItem = (id)=>{
    setListItems(listItems.filter((item) => item.id !== id));
  }

  let stateTodo = (id,completed)=>{
    let todo = listItems.map((item)=>{
                if(item.id === id){
                  return {...item,completed}
                }
                return item;
              })
    setListItems(todo);
  }

  return (
    <>
    <div className='vh-100 bg-primary d-flex align-items-center justify-content-center'>
        <div className="card position-absolute">
          <div className="card-header d-flex align-items-center justify-content-between mb-3 pb-1">
            <h3>Todo Liste</h3>
            <h3>💠</h3>
          </div>
          <div className="card-body">
         
          <div className='d-block'>
            <TodoField getItem={getItem} addItem={addItem}/>
            <div className='Items'>
              <strong>Todos</strong>
              <div className="input-group mb-3 mt-1">
                <TodoList todos={listItems} deleteTodo={deleteItem} stateTodo={stateTodo}/>
              </div>
            </div>
          </div>
          </div>
        </div>
    </div>
    </>
  )
}

export default App
