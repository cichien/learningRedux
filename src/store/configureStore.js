import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import auth from '../reducers/auth';
import alerts from '../reducers/alerts';
import todo from '../reducers/todo';
import async from '../reducers/subredit';
import { selectedUsersPage, usersByPage } from '../reducers/users';
import { selectedReposPage, reposByPage } from '../reducers/repos';

const logger = createLogger();
const rootReducer = combineReducers({
    auth,
    alerts,
    selectedUsersPage,
    usersByPage,
    selectedReposPage,
    reposByPage,
    todo,
    async
});

const initialState = {};
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore() {
    let store;
    if (module.hot) {
        store = createStore(rootReducer, initialState, composeEnhancers(
            applyMiddleware(thunkMiddleware, logger)
        ));
    } else {
        store = createStore(rootReducer, initialState, composeEnhancers(
            applyMiddleware(thunkMiddleware)
        ));
    }

    return store;
}
