import { ADD_FRIEND, LOGIN, LOGOUT } from "./actionType"

 export const doLogin = (user) => {
    return {
        type : LOGIN,
        payload : user
    }
}


export const doLogout = () => {
    return {
        type: LOGOUT
    }
}


export const addFriend = (phone) => {
    return {
        type: ADD_FRIEND,
        payload : phone
    }
}