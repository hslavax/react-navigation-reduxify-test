import { NavigationActions } from 'react-navigation';
import { StackActions } from 'react-navigation';

let _navigator;

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

function goBack() {
  _navigator.dispatch(
    NavigationActions.back({

    })
  )
}

function backToLogin() {
  _navigator.dispatch(
    StackActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({ routeName: "login" })]
   })
  );
}

// add other navigation functions that you need and export them

export default {
  navigate,
  backToLogin,
  goBack,
  setTopLevelNavigator,
};
