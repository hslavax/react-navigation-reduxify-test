import { createStackNavigator, createAppContainer } from "react-navigation";

import login from "../containers/Login/connector";
//import userAccount from '../components/screens/UserAccount';
import TabNavigator from "./TabNavigator";

const StackNavigator = createStackNavigator({
  login: {
    screen: login,
    navigationOptions: ({ navigation }) => ({
      header: null
    })
  },
  tabScreen: {
    screen: TabNavigator,
    navigationOptions: ({ navigation }) => ({
      header: null
    })
  }
  // userAccount : {
  //   screen: Profile,
  // },
});
const RootNavigator = createAppContainer(StackNavigator);

export default RootNavigator;
