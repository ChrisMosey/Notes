import {Map} from 'immutable';

const defaultState = Map({
    name: 'universe',
    notes: []
});

export default function reducer(state=defaultState, action){
    switch (action.type) {
        case 'NAME_UPDATED':{
            return state.merge({
                name: action.name
            });
        }
        case "GET_NOTES": {
            return {...state, notes: action.notes}
        }
        default: return state;
    }
}