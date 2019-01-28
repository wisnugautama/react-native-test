let initialState = {
    users: null,
    pending: false,
    error: null
}

export const FETCH_USERS_PENDING = 'FETCH_USERS_PENDING';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_FAILED = 'FETCH_USERS_FAILED';

function reducer(state = initialState, action) {
    switch (action.type) {
        case `${FETCH_USERS_PENDING}`:
            return ({
                ...state,
                pending: true,
                users: null,
                error: null
            })
        case `${FETCH_USERS_SUCCESS}`:
            return ({
                ...state,
                pending: false,
                users: action.payload,
                error: null
            })
        case `${FETCH_USERS_FAILED}`:
            return ({
                ...state,
                pending: false,
                users: null,
                error: action.payload
            })
        default:
            return state;
    }
}

export default reducer