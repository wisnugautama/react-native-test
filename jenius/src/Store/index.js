import thunk from 'redux-thunk';
import { applyMiddleware, createStore, combineReducers, compose } from 'redux';
import AuthReducer from './reducers/AuthReducer';
import UserReducer from './reducers/UserReducer';

const middleware = applyMiddleware(thunk)

const rootReducers = combineReducers({
    auth: AuthReducer,
    user: UserReducer
})

const store = createStore(rootReducers, compose(middleware))

export default store