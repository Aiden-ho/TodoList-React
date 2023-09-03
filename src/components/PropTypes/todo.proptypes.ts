import PropTypes from 'prop-types'

export const ToDoType = PropTypes.shape({
  id: PropTypes.string,
  name: PropTypes.string,
  isdone: PropTypes.bool
})
