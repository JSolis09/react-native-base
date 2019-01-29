import { DEFAULT_ACTION } from './constants';

const initialState = {};

export default function HomeContainerReducer(state = initialState, action) {
    switch(action.type) {
        case DEFAULT_ACTION:
            return state;
        default:
            return state;
    }
}