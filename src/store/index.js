import { createStore} from 'redux';

const defaultState = {
    count: 1000
};

const reducer = (state = defaultState, action) => {
    switch (action.type) {
       case "MINUS":
          return { ...state, count: state.count - action.payload }

       case 'PLUS':
          return { ...state, count: state.count + action.payload }

       case 'YOUR_AMOUNT':
          return { ...state, count: action.payload }

       default: return state
    }
}

export const store = createStore(reducer)
