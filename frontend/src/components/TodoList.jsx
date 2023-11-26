import React, { useEffect, useState } from 'react'
import TodoListItem from './TodoListItem'
import axios from '../config/axios'
import { TODO_ENDPOINT } from '../config/endpoints';

export default function TodoList() {

  useEffect( ()=>{
    getAllTodos();
  }, []);

  const [todoList, setTodoList] = useState([])
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  function handleTitleChange(e) {
    setTitle(e.target.value);
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value)
  }

  async function handleSubmit(e) {
    e.preventDefault();
    // addTodo(title, description)
    try {
      const payload = {
        title,
        description
      }
      const {data} = await axios.post(TODO_ENDPOINT, payload );
      // console.log(res);
      setTodoList([...todoList, data])
      setDescription("")
      setTitle("")
    } catch (error) {}
  }

  async function getAllTodos() {
    try {
      const {data} = await axios.get(TODO_ENDPOINT)
      setTodoList(data)
    } catch (error) {
      console.error(error);
    }
  }

  // const addTodo = ()=>{

  // }
  return (
    <>
      <h1>My Todos</h1>
      <section className='card todo-wrapper'>
          <form onSubmit={handleSubmit} >
        <div className='flex gap-2 flex-wrap todo-header' >

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
        
        <Column className='gap-half'>
          <Button
            className='align-self-start '
            title={"Tasks"}
          />

          {todoList.map( (todo) => <TodoListItem {...todo} onDelete={getAllTodos} onEdit={getAllTodos} /> ) }
          
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