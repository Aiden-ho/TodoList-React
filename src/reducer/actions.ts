import ToDo from '../@types/ToDo.type'
import HandleNewTodos from '../@types/HandleNewTodos.type'

export type ActionType =
  | InitTaskFromLocalType
  | GenerateTaskType
  | ChangeStageTaskType
  | StoreCurrentTaskType
  | EditingCurrentTaskType
  | SaveEditedCurrentTaskType
  | DeleteTaskType

type InitTaskFromLocalType = { type: 'init_task_from_local' }
type GenerateTaskType = { type: 'generate_task'; payload: ToDo }
type ChangeStageTaskType = { type: 'change_stage_task'; payload: { task_id: string; isdone: boolean } }
type StoreCurrentTaskType = { type: 'store_current_task'; payload: ToDo }
type EditingCurrentTaskType = { type: 'editing_current_task'; payload: string }
type SaveEditedCurrentTaskType = { type: 'save_edited_current_task' }
type DeleteTaskType = { type: 'delete_task'; payload: string }

export const initTaskFromLocalAction = () => {
  return { type: 'init_task_from_local' } as InitTaskFromLocalType
}

export const generateTaskAction = (newTask: ToDo) => {
  return { type: 'generate_task', payload: newTask } as GenerateTaskType
}

export const changeStageTaskAction = (task_id: string, isdone: boolean) => {
  return { type: 'change_stage_task', payload: { task_id, isdone } } as ChangeStageTaskType
}

export const storeCurrentTaskAction = (CurrentTask: ToDo) => {
  return { type: 'store_current_task', payload: CurrentTask } as StoreCurrentTaskType
}

export const editingCurrentTaskAction = (name: string) => {
  return { type: 'editing_current_task', payload: name } as EditingCurrentTaskType
}

export const saveEditedCurrentTaskAction = () => {
  return { type: 'save_edited_current_task' } as SaveEditedCurrentTaskType
}
export const deleteTaskAction = (id: string) => {
  return { type: 'delete_task', payload: id } as DeleteTaskType
}
