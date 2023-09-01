import React from 'react'
import TaskInput from '../TaskInput'
import TaskList from '../TaskList'
import styles from './todolist.module.scss'

export default function Todolist() {
  return (
    <div>
      <h1 className={styles.title}>To Do List Typescript</h1>
      <TaskInput />
      <TaskList />
    </div>
  )
}
