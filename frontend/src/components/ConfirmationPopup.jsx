import React from 'react'
import { Button } from './TodoList'
import Dialog from './Dialog'

export default function ConfirmationPopup({ onClose, onConfirm}) {
  return (
    <Dialog>
      <div className='flex-column gap-half' >
      <span className='heading-4' >Are you sure want to delete this task</span>
      <Button title={"Cancel"} onClick={onClose} />
      <Button className='danger' title={"Delete"} onClick={onConfirm} />
      </div>
    </Dialog>
  )
}
