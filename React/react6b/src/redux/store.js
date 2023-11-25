//Kho chứa state
import { legacy_createStore as createStore, applyMiddleware } from "redux";

const initialState = {
    count: 0,
};
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case "counter/increment": {
            return { ...state, count: state.count + action.payload };
        }
        case "counter/decrement": {
            return { ...state, count: state.count - action.payload };
        }
        default: {
            return state;
        }
    }
};
export const store = createStore(rootReducer);

// console.log(store);
// store.dispatch({
//   type: "counter/increment",
// });
// console.log(store.getState());


console.log(store.getState());