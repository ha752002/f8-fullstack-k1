export const rootReducer = (state, action) => {
    switch (action.type) {
        case "counter/increment":
            return { ...state, count: state.count + 1 };

        case "counter/decrement":
            return { ...state, count: state.count - 1 };

        case "message/sent":
            return {
                ...state,
                msg: [...state.msg, action.msg],
            };

        default:
            return state;
    }
};
