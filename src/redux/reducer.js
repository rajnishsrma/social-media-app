import { ADD_FRIEND, ALL_USERS, LOGIN, LOGOUT } from "./actionType";

const initialState = {
    user: null,
    all_users:[]
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case LOGIN : {
            let user = action. payload;
            return {
                ...state,
                user: user
            }
        }

        case LOGOUT : {
            return {
                ...state, 
                user : null
            }
        }

        case ADD_FRIEND : {
            let phone = action.payload;
            let user = {...state.user} ;
            user.friends.push(phone) ;
            return {
                ...state,
                user : user
            }
        }

        case ALL_USERS : {
            let users = action.payload ;
            return {
                ...state,
                all_users : users
            }
        }

        default : {
            return state;
        }
    }
}

export default reducer; 