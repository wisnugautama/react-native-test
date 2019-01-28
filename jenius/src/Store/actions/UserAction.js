import { FETCH_USERS_PENDING, FETCH_USERS_SUCCESS, FETCH_USERS_FAILED } from '../reducers/UserReducer';

export const getUserSuccess = (payload) => {
    return ((dispatch) => {
        dispatch({
            type: FETCH_USERS_SUCCESS,
            payload
        })   
    }) 
}

export const getUserPending = (payload) => {
    return ((dispatch) => {
        dispatch({
            type: FETCH_USERS_PENDING,
            payload
        })   
    }) 
}

export const getUserFailed = (payload) => {
    return ((dispatch) => {
        dispatch({
            type: FETCH_USERS_FAILED,
            payload
        })   
    }) 
}