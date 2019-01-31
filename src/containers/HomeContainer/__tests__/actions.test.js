import { defaultAction, changeMessageAction } from '../actions';
import { DEFAULT_ACTION, MESSAGE_CHANGED } from '../constants';

describe('HomeContainer actions', () => {
    it('should return DEFAULT_ACTION type', () => {
        const expected = {
          type: DEFAULT_ACTION,
        };
        expect(defaultAction()).toEqual(expected);
    });

    it('should return MESSAGE_CHANGED type', () => {
        const message = 'Hello world!';
        const expected = {
          type: MESSAGE_CHANGED,
          message
        };
        expect(changeMessageAction(message)).toEqual(expected);
    });
});
