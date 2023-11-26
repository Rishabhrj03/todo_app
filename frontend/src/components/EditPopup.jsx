import React, { useState } from 'react'
import { Button, Column } from './TodoList'
import Dialog from './Dialog';

export default function EditPopup({ onEdit, title = "", description = "", onClose }) {

  const [Title, setTitle] = useState(title)
  const [Description, setDescription] = useState(description)

  function handleTitleChange(e) {
    setTitle(e.target.value);
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault();
    onEdit(Title, Description)
  }

  return (
    <Dialog>
      <form onSubmit={handleSubmit}>
        <div className='flex-column gap-2' >

          <Column className='align-items-start' >
            <span className='heading-4 mb-1'>Title</span>
            <input required value={Title} onChange={handleTitleChange} placeholder='Title' type="text" />
          </Column>
          <Column className='align-items-start' >
            <span className='heading-4 mb-1'>Description</span>
            <input required value={Description} onChange={handleDescriptionChange} placeholder='Description' type="text" />
          </Column>
          <div className='flex flex-sb danger'>
            <Button
              title={"Close"}
              onClick={onClose}
            />
            <Button
              title={"Edit"}
              // onClick={onEdit}
            />
          </div>
        </div>
      </form>
    </Dialog>
  )
}
