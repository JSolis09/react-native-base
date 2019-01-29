import { DEFAULT_ACTION, MESSAGE_CHANGED } from './constants';

const initialState = {
    message: 'Default Message'
};

export default function HomeContainerReducer(state = initialState, action) {
    switch(action.type) {
        case DEFAULT_ACTION:
            return state;
        case MESSAGE_CHANGED:
            return Object.assign({}, state, {message: action.message});
        default:
            return state;
    }
}