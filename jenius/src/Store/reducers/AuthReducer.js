let initialState = {
    logged: false,
    pending: false,
    error: null
}

export const FETCH_LOGIN_PENDING = 'FETCH_LOGIN_PENDING';
export const FETCH_LOGIN_SUCCESS = 'FETCH_LOGIN_SUCCESS';
export const FETCH_LOGIN_FAILED = 'FETCH_LOGIN_FAILED';

function reducer(state = initialState, action) {
    switch (action.type) {
        case `${FETCH_LOGIN_PENDING}`:
            return ({
                ...state,
                pending: true,
                logged: false,
                error: null
            })
        case `${FETCH_LOGIN_SUCCESS}`:
            return ({
                ...state,
                pending: false,
                logged: true,
                error: null
            })
        case `${FETCH_LOGIN_SUCCESS}`:
            return ({
                ...state,
                pending: false,
                logged: false,
                error: action.payload
            })
        default:
            return state;
    }
}

export default reducer
