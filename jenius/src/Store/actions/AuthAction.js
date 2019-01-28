import { FETCH_LOGIN_PENDING, FETCH_LOGIN_SUCCESS, FETCH_LOGIN_FAILED } from '../reducers/AuthReducer';

export const loginSucess = (payload) => {
    return ((dispatch) => {
        dispatch({
            type: FETCH_LOGIN_SUCCESS,
            payload
        })   
    }) 
}

export const loginPending = (payload) => {
    return ((dispatch) => {
        dispatch({
            type: FETCH_LOGIN_PENDING,
            payload
        })   
    }) 
}

export const loginFailed = (payload) => {
    return ((dispatch) => {
        dispatch({
            type: FETCH_LOGIN_FAILED,
            payload
        })   
    }) 
}