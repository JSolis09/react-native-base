const navigate = jest.fn(() => {});
const getNavigator = jest.fn(() => {});
const dispatchEvent = jest.fn(() => {});
const setTopLevelNavigator = jest.fn(() => {});

export default {
    dispatchEvent,
    getNavigator,
    navigate,
    setTopLevelNavigator
  };