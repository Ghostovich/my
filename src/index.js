import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from "./redux/redux-store";

const root = ReactDOM.createRoot(document.getElementById('root'));

let rerender = (state) => {
debugger

    root.render(
        <React.StrictMode>
            <App state={state}
                 dispatch={store.dispatch.bind(store)}
            />
        </React.StrictMode>
    );
}

rerender(store.getState());

store.subscribe(() => {
        let state = store.getState()
        rerender(state)
    }
);


reportWebVitals();