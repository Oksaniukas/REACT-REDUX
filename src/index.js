import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/index.scss';
import { Provider } from 'react-redux';
import { createStore} from 'redux';

const defaultState = {
    count: 1000
};

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case "MINUS":
            return {...state, count: state.count - action.payload}
        
        case 'PLUS':
            return {...state, count: state.count + action.payload}

        default: return state
    }
}

const store = createStore(reducer)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);