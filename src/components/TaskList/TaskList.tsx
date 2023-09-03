import React from 'react'
import PropTypes from 'prop-types'
import ToDo from '../../@types/ToDo.type'
import { ToDoType } from '../PropTypes/todo.proptypes'
import styles from './TaskList.module.scss'

interface TaskListProps {
  doneTaskList: boolean
  todos?: ToDo[]
  taskChangeStage: (task_id: string, isdone: boolean) => void
  startEditTask: (id: string) => void
  deleteTask: (id: string) => void
}

export default function TaskList(props: TaskListProps) {
  const { doneTaskList, todos, taskChangeStage, startEditTask, deleteTask } = props

  const handleOnCheckedChange = (task_id: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    taskChangeStage(task_id, event.target.checked)
  }

  return (
    <div>
      <h3 className={styles.tasksTitle}>{!doneTaskList ? 'Chưa hoàn thành' : 'Đã hoàn thành'}</h3>
      <div className={styles.tasks}>
        {todos?.map((todo) => (
          <div className={`${styles.task} ${doneTaskList ? styles.isdone : ''}`} key={todo.id}>
            <input
              type='checkbox'
              name='isdone'
              id='isdone'
              className={styles.task_isdone}
              checked={todo.isdone}
              onChange={handleOnCheckedChange(todo.id)}
            />
            <span className={styles.task_name}>{todo.name}</span>
            <button className={styles.task_edit} onClick={() => startEditTask(todo.id)}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                version='1.1'
                xmlnsXlink='http://www.w3.org/1999/xlink'
                width='512'
                height='512'
                x='0'
                y='0'
                viewBox='0 0 284.228 284.228'
                xmlSpace='preserve'
              >
                <g>
                  <path
                    d='m275.028 224.814-193.6-192.8c-.4-.4-1.2-1.2-2-1.2l-70.8-30c-1.6-.8-3.2-.8-4.8 0-3.2 1.2-4.8 5.2-3.2 8.4l8 18.4 22 52c.4.8.8 1.6 1.6 2.4l192.8 192.8c6 6 14.4 9.2 22.4 9.2s16-3.2 22.4-9.2l2.4-2.4 2.4-2.4.4-.4c6-6 9.2-14.4 9.2-22.4s-3.2-16-9.2-22.4zm-223.2-151.6c-1.6 1.6-3.6 2.4-5.6 2.4s-3.6-.8-5.2-2l-19.2-45.2c1.2-.8 2-1.6 3.2-2.4.8-.8 1.6-2 2.4-3.2l45.6 19.2c1.2 1.6 2 3.2 2 5.2s-.8 4-2.4 5.6c-1.6 1.6-3.6 2.4-5.6 2.4s-4-.8-5.6-2.4c-2.4-2.4-6.4-2.4-8.8 0-2.4 2.4-2.4 6.4 0 8.8.8 1.6 1.6 3.6 1.6 5.6s-.8 4-2 5.6l-.4.4zm194.4 198c-4.4 0-9.2-2-12.8-5.6l-179.2-179.2c2.4-1.2 4.8-2.4 6.8-4.4l.4-.4c2-2 3.2-4 4-6.4l192 192c-3.2 2.4-7.2 4-11.2 4zm20.4-12.8-192-192c2.4-1.2 4.8-2.4 6.8-4.4 2-2 3.6-4.4 4.4-6.8l179.2 178.8c3.6 3.6 5.6 8.4 5.6 13.2 0 4-1.6 7.6-4 11.2z'
                    fill='#c18c08'
                    data-original='#000000'
                    opacity='1'
                  ></path>
                </g>
              </svg>
            </button>
            <button className={styles.task_remove} onClick={() => deleteTask(todo.id)}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                version='1.1'
                xmlnsXlink='http://www.w3.org/1999/xlink'
                width='512'
                height='512'
                x='0'
                y='0'
                viewBox='0 0 64 64'
                xmlSpace='preserve'
              >
                <g>
                  <path
                    d='m40.095 49.997-.063-.001a2.001 2.001 0 0 1-1.938-2.061l.736-24a1.98 1.98 0 0 1 2.061-1.938 2.001 2.001 0 0 1 1.938 2.061l-.736 24a2 2 0 0 1-1.998 1.939zM24.907 49.997a2 2 0 0 1-1.998-1.938l-.736-24a2 2 0 0 1 1.938-2.061 1.992 1.992 0 0 1 2.061 1.938l.736 24a2 2 0 0 1-1.938 2.061h-.063zM33.001 49.997a2 2 0 0 1-2-2v-24a2 2 0 0 1 4 0v24a2 2 0 0 1-2 2zM45.002 57.997H19a2 2 0 0 1 0-4h26.002a2 2 0 0 1 0 4z'
                    fill='#ef3a3a'
                    data-original='#000000'
                    opacity='1'
                  ></path>
                  <path
                    d='m47.001 56.097-.102-.002a1.999 1.999 0 0 1-1.897-2.098l1.905-38.1A2.009 2.009 0 0 1 49.005 14a1.999 1.999 0 0 1 1.897 2.098l-1.905 38.1a1.999 1.999 0 0 1-1.996 1.899z'
                    fill='#ef3a3a'
                    data-original='#000000'
                    opacity='1'
                  ></path>
                  <path
                    d='M45.002 57.997a2 2 0 0 1 0-4h.002c.056-1.104.989-1.967 2.097-1.897a1.998 1.998 0 0 1 1.896 2.098 3.996 3.996 0 0 1-3.995 3.799zM17.001 56.097a2 2 0 0 1-1.996-1.9l-1.905-38.1a2 2 0 0 1 3.995-.201L19 53.997a2 2 0 0 1-1.897 2.098l-.102.002z'
                    fill='#ef3a3a'
                    data-original='#000000'
                    opacity='1'
                  ></path>
                  <path
                    d='M19 57.997a3.996 3.996 0 0 1-3.995-3.8A2 2 0 0 1 19 53.996v.002a2 2 0 1 1 0 3.999zM40 17.997a2 2 0 0 1-2-2v-6a2 2 0 0 1 4 0v6a2 2 0 0 1-2 2zM24 17.997a2 2 0 0 1-2-2v-6a2 2 0 0 1 4 0v6a2 2 0 0 1-2 2z'
                    fill='#ef3a3a'
                    data-original='#000000'
                    opacity='1'
                  ></path>
                  <path
                    d='M52.002 17.997H11.998a2 2 0 0 1 0-4h40.005a2 2 0 0 1-.001 4zM23.999 11.997a2 2 0 0 1-1.999-2c0-2.206 1.794-4 4-4a2 2 0 0 1 0 4h-.002c0 1.105-.894 2-1.999 2z'
                    fill='#ef3a3a'
                    data-original='#000000'
                    opacity='1'
                  ></path>
                  <path
                    d='M38 9.997H26a2 2 0 0 1 0-4h12a2 2 0 0 1 0 4z'
                    fill='#ef3a3a'
                    data-original='#000000'
                    opacity='1'
                  ></path>
                  <path
                    d='M40 11.997a2 2 0 0 1-2-2v-.002a2 2 0 1 1 0-3.998c2.206 0 4 1.794 4 4a2 2 0 0 1-2 2z'
                    fill='#ef3a3a'
                    data-original='#000000'
                    opacity='1'
                  ></path>
                </g>
              </svg>
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

TaskList.propTypes = {
  doneTaskList: PropTypes.bool.isRequired,
  todos: PropTypes.arrayOf(ToDoType),
  taskChangeStage: PropTypes.func.isRequired,
  startEditTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired
}
