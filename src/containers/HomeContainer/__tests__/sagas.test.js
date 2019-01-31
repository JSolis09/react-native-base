import { defaultSaga } from '../sagas';
import { put } from 'redux-saga/effects';
import { changeMessageAction } from '../actions'

describe('HomeContainer Saga', () => {
    it('should be defined', async () => {
        jest.useFakeTimers();
        const generator = defaultSaga();
        const message = 'Message Changed with Saga!!';
        generator.next(0);//delay
        expect(generator.next().value).toEqual(put(changeMessageAction(message)));
    });
});