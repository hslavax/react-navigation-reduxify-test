import { createDrawerNavigator } from "react-navigation";
import { applyMiddleware, compose, createStore, combineReducers } from "redux";
import { Provider, connect } from "react-redux";
import React from "react";
import {
  createReduxContainer,
  createReactNavigationReduxMiddleware,
  createNavigationReducer
} from "react-navigation-redux-helpers";
import Reactotron from "./utilities/ReactotronConfig";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import rootReducer from "./reducers";
import { persistStore, persistReducer } from "redux-persist";
import { AsyncStorage } from "react-native";
import immutableTransform from "redux-persist-transform-immutable";
import MyHomeScreen from "./screens/MyHomeScreen";
import MyNotificationsScreen from "./screens/MyNotificationsScreen";
const AppNavigator = createDrawerNavigator(
  {
    Home: {
      screen: MyHomeScreen
    },
    Notifications: {
      screen: MyNotificationsScreen
    }
  },
  {
    initialRouteName: "Home"
  }
);
const navReducer = createNavigationReducer(AppNavigator);
const navMiddleware = createReactNavigationReduxMiddleware(state => state.nav);
let logger = createLogger({
  timestamps: true,
  duration: true
});
const persistConfig = {
  transforms: [immutableTransform()],
  key: "root",
  storage: AsyncStorage
};

const middlewares = [thunk, navMiddleware];
const persistedReducer = persistReducer(persistConfig, rootReducer);
const reducer = combineReducers({ nav: navReducer }, persistedReducer);

const Root = createReduxContainer(AppNavigator);
const mapStateToProps = state => ({
  state: state.nav
});
const AppWithNavigationState = connect(mapStateToProps)(Root);
const store = createStore(
  reducer,
  compose(
    applyMiddleware(...middlewares),
    Reactotron.createEnhancer()
  )
);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}
