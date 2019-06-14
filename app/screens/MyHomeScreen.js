import React, { Component } from "react";
import { Button, View, Text } from "react-native";
import { DrawerActions } from "react-navigation-drawer";

export default class MyHomeScreen extends Component {
  static navigationOptions = {
    drawerLabel: "Home"
  };
  componentDidMount() {
    this.props.navigation.dispatch(DrawerActions.toggleDrawer());
  }
  render() {
    return (
      <View style={{ flex: 1, paddingTop: 200 }}>
        <Text>sohai1</Text>
        <Button
          onPress={() => this.props.navigation.navigate("Notifications")}
          title="Go to notifications"
        />
      </View>
    );
  }
}
