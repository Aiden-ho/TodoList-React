import React, { useEffect, useState } from 'react'
import TaskInput from '../TaskInput'
import TaskList from '../TaskList'
import styles from './todolist.module.scss'
import ToDo from '../../@types/ToDo.type'

interface HandleNewTodos {
  (todos: ToDo[]): ToDo[]
}

const syncToLocal = (handleNewTodos: HandleNewTodos) => {
  const todoLocal = localStorage.getItem('todos')
  const todoLocalObj: ToDo[] = JSON.parse(todoLocal || '[]')
  const newTodoLocalObj: ToDo[] = handleNewTodos(todoLocalObj)
  localStorage.setItem('todos', JSON.stringify(newTodoLocalObj))
}

export default function Todolist() {
  const [todos, setTodos] = useState<ToDo[]>([])
  const [currentTask, setCurrentTask] = useState<ToDo | null>(null)

  useEffect(() => {
    //sync from localstorage to state
    const todoLocal = localStorage.getItem('todos')
    const todosLocalObj: ToDo[] = JSON.parse(todoLocal || '[]')
    setTodos(todosLocalObj)
  }, [])

  const unFinishList = todos.filter((item) => item.isdone === false)
  const finishList = todos.filter((item) => item.isdone)

  const generateToDo = (name: string) => {
    let newToDo: ToDo = {
      id: new Date().toISOString(),
      name,
      isdone: false
    }
    //create new todo in state
    setTodos((prev) => [...prev, newToDo])
    //sync to localstorage cb
    syncToLocal((todosLocalObj: ToDo[]) => [...todosLocalObj, newToDo])
  }

  const taskChangeStage = (task_id: string, isdone: boolean) => {
    const handler = (todosObj: ToDo[]) => {
      return todosObj.map((item) => {
        if (item.id === task_id) item.isdone = isdone
        return item
      })
    }

    //Set Stage trả về prev state và handler đã đưa nó vào param của mình
    setTodos(handler)
    //sync to localstorage
    // Param của handler truyền vào từ synctoLocal
    syncToLocal(handler)
  }

  const startEditTask = (id: string) => {
    let targetTask = todos.find((item) => item.id === id)

    if (targetTask) {
      setCurrentTask(targetTask)
    }
  }

  const editingTask = (value: string) => {
    setCurrentTask((prev) => {
      if (prev) {
        let newCurrent = { ...prev }
        newCurrent.name = value
        return newCurrent
      }
      return null
    })
  }

  const finishedEditTask = () => {
    const handler = (todosObj: ToDo[]) => {
      console.log(todosObj)
      return todosObj.map((item) => {
        //ép kiểu TODO => luôn luôn todo
        if (item.id === (currentTask as ToDo).id) {
          return currentTask as ToDo
        }
        return item
      })
    }

    //Set Stage trả về prev state và handler đã đưa nó vào param của mình
    setTodos(handler)

    setCurrentTask(null)

    //sync to localstorage
    // Param của handler truyền vào từ synctoLocal
    syncToLocal(handler)
  }

  const deleteTask = (id: string) => {
    if (currentTask) {
      setCurrentTask(null)
    }

    const handler = (todosObj: ToDo[]) => {
      return todosObj.filter((item) => item.id !== id)
    }

    //Set Stage trả về prev state và handler đã đưa nó vào param của mình
    setTodos(handler)
    //sync to localstorage
    // Param của handler truyền vào từ synctoLocal
    syncToLocal(handler)
  }

  return (
    <div className={styles.todolist_container}>
      <h1 className={styles.title}>To Do List Typescript</h1>
      <TaskInput
        generateToDo={generateToDo}
        currentTask={currentTask}
        editingTask={editingTask}
        finishedEditTask={finishedEditTask}
      />
      <TaskList
        doneTaskList={false}
        todos={unFinishList}
        taskChangeStage={taskChangeStage}
        startEditTask={startEditTask}
        deleteTask={deleteTask}
      />
      <TaskList
        doneTaskList={true}
        todos={finishList}
        taskChangeStage={taskChangeStage}
        startEditTask={startEditTask}
        deleteTask={deleteTask}
      />
    </div>
  )
}
