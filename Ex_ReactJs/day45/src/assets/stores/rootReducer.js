//Quan ly state
export const rootReducer1 = (state, action) => {
    switch (action.type) {
        case 'loading/toggle': {
            return {
                ...state,
                visible: action.payload,
            };
        }

        default: {
            return state;
        }
    }
}