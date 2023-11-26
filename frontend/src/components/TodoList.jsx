import React, { useState } from 'react'
import TodoListItem from './TodoListItem'
import Dialog from './Dialog'

export default function TodoList() {

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  function handleTitleChange(e) {
    setTitle(e.target.value);
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value)
  }

  function handleSubmit(e) {
    alert("TAPPED")
    e.preventDefault();
    // addTodo(title, description)
    setDescription("")
    setTitle("")
  }

  // const addTodo = ()=>{

  // }
  return (
    <>
      <h1>My Todos</h1>
      <section className='card todo-wrapper'>
          <form onSubmit={handleSubmit} >
        <div className='flex gap-2' >

            <Column className='align-items-start' >
              <span className='heading-4 mb-1'>Title</span>
              <input value={title} onChange={handleTitleChange} placeholder='Title' required type="text" />
            </Column>
            <Column className='align-items-start' >
              <span className='heading-4 mb-1'>Description</span>
              <input value={description} onChange={handleDescriptionChange} placeholder='Description' type="text" />
            </Column>
            <Button
              className="align-self-flex-end"
              title={"Add"}
            />
        </div>
          </form>
        <hr />
        
        <Column>
          <Button
            className='align-self-start mb-1'
            title={"Tasks"}
          />
          <TodoListItem title={"Task 1"} description={"Description"} />
        </Column>
      </section>
    </>
  )
}

export function Column({ children, className = "" }) {
  return <div className={`flex-column ${className}`}>
    {children}
  </div>
}

export function Button({ className = "", title, ...props }) {
  return <button className={`button ${className}`} {...props} >
    {title}
  </button>
}