import React, { useState } from 'react'
import { Button, Column } from './TodoList'
import ConfirmationPopup from './ConfirmationPopup'
import EditPopup from './EditPopup'

import axios from '../config/axios'
import { TODO_ENDPOINT } from '../config/endpoints';

export default function TodoListItem({title, description, id, onDelete, onEdit }) {

  const [openEditDialog, setOpenEditDialog] = useState(false)
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false)

  async function handleEdit(title, description) {
    const payload = {
      title,
      description,
      id
    }
    try {
      const res = await axios.put(`${TODO_ENDPOINT}/${id}`, payload )
      onEdit()
      toggleEditPopup()
    } catch (error) {
      console.error(error);
    }
  }

  function toggleEditPopup() {
    setOpenEditDialog(!openEditDialog)
  }

  async function handleDelete() {
    try {
      const res = await axios.delete(`${TODO_ENDPOINT}/${id}` )
      onDelete()
      toggleDeletePopup()
    } catch (error) {
      console.error(error);
    }
    
  }

  function toggleDeletePopup() {
    setOpenDeleteDialog(!openDeleteDialog)
  }

  return (
    <div className='card flex flex-sb flex-wrap task-section'>
      <Column className='align-items-start' >
        <div className='heading-4 success' >{title}</div>
        <span className='text-fade description' >{description}</span>
      </Column>
      <div className='flex align-items-center gap-half'>
        <Button title={"Edit"} onClick={toggleEditPopup} />
        <Button title={"Delete"} onClick={toggleDeletePopup} />
      </div>
      {openDeleteDialog && <ConfirmationPopup onClose={toggleDeletePopup} onConfirm={handleDelete} />}
      {openEditDialog && <EditPopup title={title} description={description} onClose={toggleEditPopup} onEdit={handleEdit} />}
    </div>
  )
}
