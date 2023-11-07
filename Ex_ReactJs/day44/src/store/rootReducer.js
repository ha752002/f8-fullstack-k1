//Quan ly state
export const rootReducer = (state, action) => {
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