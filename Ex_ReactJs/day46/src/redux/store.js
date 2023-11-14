//Kho chứa state
import {legacy_createStore as createStore, applyMiddleware} from "redux";
import { createLogger } from 'redux-logger'
import thunk from "redux-thunk";
import reducers from './reducers'

const middleware = [ thunk ];

// check nếu không phải production thì push logger vào để log ra những action
    middleware.push(createLogger());

// if (process.env.NODE_ENV !== 'production') {
// }
const store = createStore(
    reducers,
    applyMiddleware(...middleware)
)
store.subscribe(() => {
    console.log(1)
})
export {store}
