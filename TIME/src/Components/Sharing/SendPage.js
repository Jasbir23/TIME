import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Animated
} from "react-native";
import { List, ListItem } from "native-base";

export default class SendPage extends Component {
  static navigationOptions = {
    header: null
  };
  constructor() {
    super();
    this.state = {
      myCards: [],
      sott: new Animated.Value(0),
      selected: false
    };
  }
  componentDidMount() {
    console.log("djksankjn");
  }
  animationLoop() {
    this.state.sott.setValue(0);
    Animated.timing(this.state.sott, {
      toValue: 100,
      duration: 1000
    }).start(() => {
      this.props.navigation.goBack();
    });
  }
  render() {
    var color = this.state.sott.interpolate({
      inputRange: [0, 50, 100],
      outputRange: [
        "rgba(7, 94, 17,0.7)",
        "rgba(7, 94, 17,0.7)",
        "rgba(7, 94, 17,0)"
      ]
    });
    var phek = this.state.sott.interpolate({
      inputRange: [0, 100],
      outputRange: [100, -200]
    });
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "black",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Animated.View
          style={{
            top: 0,
            height: 300,
            width: 200,
            backgroundColor: this.state.selected === true ? "grey" : color,
            transform: [{ translateY: phek }]
          }}
        >
          <TouchableOpacity
            style={{
              top: 0,
              height: 300,
              width: 200
            }}
            onPressIn={() => {
              this.setState({ selected: true });
              console.log("PressIn");
            }}
            onPressOut={() => {
              this.setState({ selected: false });
              this.animationLoop();
              console.log("PressOut");
            }}
          />
        </Animated.View>
      </View>
    );
  }
}
