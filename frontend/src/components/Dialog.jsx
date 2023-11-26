import React from 'react'
import { Button } from './TodoList'

export default function Dialog({children}) {
  return (
    <main className='screen-wrapper dialog flex flex-c-c' >
      <div className='content card'>
        {/* <div className='flex justify-content-flex-end mb-1' >
          <Button title={"Close"} onClick={onClose} />
        </div> */}
        {children}
      </div>
    </main>
  )
}
