const initializeApp = jest.fn(() => {});
let authValue = {};
const signInWithEmailAndPassword = jest.fn(() => Promise.resolve(authValue));
signInWithEmailAndPassword.__setValue = (value) => authValue = value;

const auth = jest.fn(() => ({
    signInWithEmailAndPassword
}));

export default {
    initializeApp,
    auth
}