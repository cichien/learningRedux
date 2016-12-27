import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../../actions/todo';

const TodoList = ({todos, dispatch}) => {
//const TodoList = ({ todos, onTodoClick, addTodo, dispatch}) => {
    let task;
    return (
        <div>
            <ul> {
                todos.map(todo =>
                   <li key={todo.id}>{todo.text}</li>
                )
            } </ul>

            <form onSubmit={e => {
                e.preventDefault()
                dispatch(addTodo(task.value));
            }}>

                <input type="text" ref={(input) => {task = input }} className="form-control" placeholder="add todo" />
                <button className="btn btn-primary" type="submit">新增任務</button>
            </form>
        </div>

    );
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        //completed: PropTypes.bool.isRequired,
        text: PropTypes.string.isRequired
    }).isRequired).isRequired,
    //onTodoClick: PropTypes.func.isRequired
}

function mapStateToProps(state) {
    const { todo } = state;
    return {todos: todo};
}

/*
const mapDispatchToProps = (dispatch) => {
    return {
        onTodoClick: (id) => {
          dispatch(toggleTodo(id))
        },
        addTodo: (text) => {
          dispatch(addTodo(text))
        }
    }
}
*/

//export default connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default connect(mapStateToProps)(TodoList);
