import reportWebVitals from './reportWebVitals';
import './index.css';
import state from './redux/state'
import {rerender} from "./render";

rerender(state);


reportWebVitals();
