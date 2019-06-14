import React, { Component } from "react";
import { View, Button, Text } from "react-native";
export default class MyNotificationsScreen extends Component {
  static navigationOptions = {
    drawerLabel: "Notifications"
  };

  render() {
    return (
      <View style={{ flex: 1, paddingTop: 200 }}>
        <Text>sohai</Text>
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Go back home"
        />
      </View>
    );
  }
}
