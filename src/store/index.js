import { createStore, combineReducers} from 'redux';
import { countReducer } from './countReducer';
import { usersReducer } from './usersReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
   cash: countReducer,
   users: usersReducer
})

export const store = createStore(rootReducer, composeWithDevTools());
