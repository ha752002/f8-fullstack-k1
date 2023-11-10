
export const reduce = (prev, action = {}) => {
    switch (action.type) {
        case "numberInput/change": {
            return {
                ...prev,
                input: action.payload
            }

        }
        case "numberInput/increment": {
            return {
                ...prev,
                input: +prev.input + action.payload
            }

        }

        case "remainTurn/decrement": {
            return {
                ...prev,
                remainTurn: prev.remainTurn - 1
            }
        }

        case "historyData/set": {
            return {
                ...prev,
                history: action.payload
            }
        }


        case "round/set": {
            return {
                ...prev,
                ...action.payload
            }
        }
        default:
            return prev;
    }
}