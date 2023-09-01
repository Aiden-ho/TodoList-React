import React from 'react'
import styles from './TaskList.module.scss'

export default function TaskList() {
  return (
    <div>
      <h3 className={styles.tasksTitle}>Hoàn thành</h3>
      <div className={styles.tasks}>
        <div className={styles.task}>
          <input type='checkbox' name='isdone' id='isdone' className={styles.task_checkbox} />
          <span className={styles.task_name}>Học bài</span>
          <button className={styles.task_edit}>🖋</button>
          <button className={styles.task_remove}>🗑</button>
        </div>
      </div>
    </div>
  )
}
