import ToDo from './ToDo.type'

export default interface HandleNewTodos {
  (todos: ToDo[]): ToDo[]
}
