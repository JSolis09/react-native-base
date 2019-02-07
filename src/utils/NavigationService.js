import { NavigationActions } from 'react-navigation';

let _navigator;

function getNavigator() {
  return _navigator;
}

function setTopLevelNavigator(navigatorRef) {
  _navigator = navigatorRef;
}

function navigate(routeName, params) {
  _navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    })
  );
}

function dispatchEvent(event) {
    _navigator.dispatch(event);
}

export default {
  getNavigator,
  navigate,
  dispatchEvent,
  setTopLevelNavigator,
};