import React from "react";
import { View, Image, Text } from "react-native";

class Banana extends React.Component {
  render() {
    return <Text>A {this.props.color} banana!</Text>;
  }
}
export default class HelloWorldApp extends React.Component {
  render() {
    let pic = {
      uri:
        "https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg"
    };

    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Image source={pic} />;
        <Banana color="large" />
        <Banana color="small" />
        <Banana color="medium" />
      </View>
    );
  }
}
