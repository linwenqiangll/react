import React from 'react'
import TodolistItem from './TodolistItem';

const TodoList=(props)=>{
  return (
    <div className="todolist">
    {console.log(props)}
       <ul>
          {
            props.todolist.map((item)=>{
              const {id,text}=item
              return (
                <TodolistItem
                    key={id}
                    onClick={props.onItemClick}
                >
                    {text}
                </TodolistItem>
            )
            })
          }
        </ul>
    </div>
  )    
}


  export default TodoList

