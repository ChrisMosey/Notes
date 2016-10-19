export default function reducer(state={
    notes: [],
    err: null
}, action) {
    switch(action.type) {
        case "GET_NOTES": {
            return {...state, notes: action.payload}
        }
    }
}