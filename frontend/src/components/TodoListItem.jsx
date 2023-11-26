import React, { useState } from 'react'
import { Button, Column } from './TodoList'
import ConfirmationPopup from './ConfirmationPopup'
import EditTodoItemPopup from './EditTodoItemPopup'

export default function TodoListItem({title, description, id, onDelete, onEdit }) {

  const [openEditDialog, setOpenEditDialog] = useState(false)
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false)

  function handleEdit(title, description) {
    alert(title + "" + description)
  }

  function toggleEditPopup() {
    setOpenEditDialog(!openEditDialog)
  }

  function onDelete() {
    alert("dleete")
  }

  function toggleDeletePopup() {
    setOpenDeleteDialog(!openDeleteDialog)
  }

  return (
    <div className='card flex flex-sb'>
      <Column className='align-items-start' >
        <div className='heading-4' >{title}</div>
        <span className='text-fade' >{description}</span>
      </Column>
      <div className='flex align-items-center gap-half'>
        <Button title={"Edit"} onClick={toggleEditPopup} />
        <Button title={"Delete"} onClick={toggleDeletePopup} />
      </div>
      {openDeleteDialog && <ConfirmationPopup onClose={toggleDeletePopup} onConfirm={toggleDeletePopup} />}
      {openEditDialog && <EditTodoItemPopup title={title} description={description} onClose={toggleEditPopup} onEdit={handleEdit} />}
    </div>
  )
}
