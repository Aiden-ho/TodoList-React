import { act } from 'react-dom/test-utils'
import ToDo from '../@types/ToDo.type'
import { ActionType } from './actions'
import { stat } from 'fs'

export const initialState = {
  todos: [],
  currentTask: null
}

type StageType = {
  todos: ToDo[] | []
  currentTask: ToDo | null
}

const reducer = (state: StageType, action: ActionType) => {
  if (action.type === 'init_task_from_local') {
    const todoLocal = localStorage.getItem('todos')
    const newTodos: ToDo[] = JSON.parse(todoLocal || '[]')
    return { ...state, todos: newTodos }
  }

  if (action.type === 'generate_task') {
    const newTodos = [...state.todos, action.payload]
    return { ...state, todos: newTodos }
  }

  if (action.type === 'change_stage_task') {
    const { task_id, isdone } = action.payload
    const newTodos = state.todos.map((item) => {
      if (item.id === task_id) item.isdone = isdone
      return item
    })
    return { ...state, todos: newTodos }
  }

  if (action.type === 'store_current_task') {
    return { ...state, currentTask: action.payload }
  }

  if (action.type === 'editing_current_task') {
    if (state.currentTask) {
      const newCurrentTask = { ...state.currentTask }
      newCurrentTask.name = action.payload
      return { ...state, currentTask: newCurrentTask }
    } else {
      return state
    }
  }

  if (action.type === 'save_edited_current_task') {
    const newTodos = state.todos.map((item) => {
      if (item.id === (state.currentTask as ToDo).id) {
        return state.currentTask as ToDo
      }
      return item
    })
    return { ...state, todos: newTodos, currentTask: null }
  }

  if (action.type === 'delete_task') {
    const newTodos = state.todos.filter((item) => item.id !== action.payload)
    return { ...state, todos: newTodos }
  }

  throw Error('invalid action : ', action)
  // return state
}

export const logger = () => {
  return (state: StageType, action: ActionType) => {
    console.group(action.type)
    console.log('prev state: ', state)
    const newState = reducer(state, action)
    console.log('new state: ', newState)
    console.groupEnd()

    return newState
  }
}

export default reducer
