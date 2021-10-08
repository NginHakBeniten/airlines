import * as Actions from './actions';
import initialState from '../store/initialState';

export const AirlineReducer = (state = initialState.arilines, action) => {
    switch (action.type) {
        case Actions.FETCH_AIRLINES:
            return {
                ...state,
                ...action.payload.arilines,
            }
        default:
            return state;
    }
}
