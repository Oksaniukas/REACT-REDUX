const defaultState = {
   count: 1000
};

const MINUS = "MINUS";
const PLUS = "PLUS"
export const countReducer = (state = defaultState, action) => {
   switch (action.type) {
      case MINUS:
         return { ...state, count: state.count - action.payload }

      case PLUS:
         return { ...state, count: state.count + action.payload }

      case 'YOUR_AMOUNT':
         return { ...state, count: action.payload }

      default: return state
   }
}

export const minusCountActionCreator = (payload) => {
   return {type: MINUS, payload}
};

export const plusCountActionCreator = (payload) => {
   return {type: PLUS, payload}
}