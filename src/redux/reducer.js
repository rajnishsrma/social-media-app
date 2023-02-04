import { ADD_FRIEND, LOGIN, LOGOUT } from "./actionType";

const initialState = {
    user: null,
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

        default : {
            return state;
        }
    }
}

export default reducer; 