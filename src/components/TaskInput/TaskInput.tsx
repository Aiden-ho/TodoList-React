import React from 'react'
import styles from './TaskInput.module.scss'

export default function TaskInput() {
  return (
    <div>
      <form>
        <input type='text' className={styles.taskInput} placeholder='Nội dung công việc' />
        <button className={styles.button}>➕</button>
      </form>
    </div>
  )
}
