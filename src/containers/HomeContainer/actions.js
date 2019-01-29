import { DEFAULT_ACTION, MESSAGE_CHANGED } from './constants';
export const defaultAction = () => ({
    type: DEFAULT_ACTION
});

export const changeMessageAction = (message) => ({
    type: MESSAGE_CHANGED,
    message
});