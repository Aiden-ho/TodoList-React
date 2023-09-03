// đầu tiên là từ node module
import React, { useState } from 'react'
import PropTypes from 'prop-types'
// Thứ 2 là component
import ToDo from '../../@types/ToDo.type'
import { ToDoType } from '../PropTypes/todo.proptypes'
//thứ 3 là css
import styles from './TaskInput.module.scss'

interface TaskInputProps {
  generateToDo: (name: string) => void
  currentTask: ToDo | null
  editingTask: (value: string) => void
  finishedEditTask: () => void
}

export default function TaskInput(props: TaskInputProps) {
  const [nameTask, setNameTask] = useState<string>('')
  const { generateToDo, currentTask, editingTask, finishedEditTask } = props

  const onChangeNameTask = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value
    if (currentTask) {
      editingTask(value)
    } else {
      //set name task state
      setNameTask(value)
    }
  }

  const handleSummit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (currentTask) {
      finishedEditTask()
      setNameTask('')
    } else {
      generateToDo(nameTask)
      setNameTask('')
    }
  }

  return (
    <div>
      <form className={styles.formTask} onSubmit={handleSummit}>
        <input
          type='text'
          className={styles.taskInput}
          placeholder='Nội dung công việc'
          value={currentTask ? currentTask.name : nameTask}
          onChange={onChangeNameTask}
        />
        <button className={styles.taskButton}>
          {!currentTask ? (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              version='1.1'
              xmlnsXlink='http://www.w3.org/1999/xlink'
              width='512'
              height='512'
              x='0'
              y='0'
              viewBox='0 0 512 512'
              xmlSpace='preserve'
            >
              <g>
                <path d='M467 211H301V45c0-24.853-20.147-45-45-45s-45 20.147-45 45v166H45c-24.853 0-45 20.147-45 45s20.147 45 45 45h166v166c0 24.853 20.147 45 45 45s45-20.147 45-45V301h166c24.853 0 45-20.147 45-45s-20.147-45-45-45z'></path>
              </g>
            </svg>
          ) : (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              version='1.1'
              xmlnsXlink='http://www.w3.org/1999/xlink'
              width='512'
              height='512'
              x='0'
              y='0'
              viewBox='0 0 511.985 511.985'
              xmlSpace='preserve'
            >
              <g>
                <path d='M500.088 83.681c-15.841-15.862-41.564-15.852-57.426 0L184.205 342.148 69.332 227.276c-15.862-15.862-41.574-15.862-57.436 0-15.862 15.862-15.862 41.574 0 57.436l143.585 143.585c7.926 7.926 18.319 11.899 28.713 11.899 10.394 0 20.797-3.963 28.723-11.899l287.171-287.181c15.862-15.851 15.862-41.574 0-57.435z'></path>
              </g>
            </svg>
          )}
        </button>
      </form>
    </div>
  )
}

TaskInput.propTypes = {
  generateToDo: PropTypes.func.isRequired,
  currentTask: PropTypes.oneOfType([ToDoType, PropTypes.oneOf([null])]),
  editingTask: PropTypes.func.isRequired,
  finishedEditTask: PropTypes.func.isRequired
}
