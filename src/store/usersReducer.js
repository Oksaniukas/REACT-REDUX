const usersDefaultState = {
   regularUsers: [
      {
         id: 1,
         name: 'Dima',
         lastname: 'XXXX'
      },
      {
         id: 2,
         name: 'Petia',
         lastname: 'DDDD'
      }
   ]
}

const ADD_USER = "ADD_USER";
const REMOVE_USER = "REMOVE_USER";

export const usersReducer = (state = usersDefaultState, action) => {
   switch (action.type) {
      case ADD_USER:
         return { ...state, regularUsers: action.payload}

      case REMOVE_USER:
         // return { ...state, regularUsers: action.payload }
         return { ...state, regularUsers: state.regularUsers.filter(user => {
            return user.id !== action.payload
         })}

      default: return state
   }
}


export const addUserActionCreator = (payload) => {
   return {type: ADD_USER, payload}
}

export const removeUserActionCreator = (payload) => {
   return {type: REMOVE_USER, payload}
}
