import {
    ADD_TODO,
    TOGGLE_TODO
} from '../actions/todo';


export default function todos(state = [], action = {}) {
    switch (action.type) {
        case ADD_TODO:
            {
                return [{id: action.id, text:action.text, completed: false}, ...state];
            }
        case TOGGLE_TODO:
            {
                return state;
                //return Object.assign({}, state, { hasError: true }, { alerts: [payload, ...alerts] });
            }
        default:
            return state;
    }
}
