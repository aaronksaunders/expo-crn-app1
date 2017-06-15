

import { DO_LOGOUT, DO_LOGIN } from '../actions'

function authReducer(state = { count: 0, loggedIn: false }, action) {
    console.log(state)
    console.log(action)
    switch (action.type) {
        case DO_LOGIN:
            return { loggedIn: true, count: 0 }
        case DO_LOGOUT:
            return { loggedIn: false, count: 0 }
        default:
            return state
    }
}

export default authReducer