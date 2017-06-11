import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  Animated,
  TouchableHighlight,
  Alert
} from "react-native";

export default class ScanPage extends Component {
  static navigationOptions = {
    header: null
  };
  constructor() {
    super();
    this.state = {
      date: [],
      points: [
        { x: -20, y: 200 },
        { x: -240, y: 200 },
        { x: 4, y: 60 },
        { x: 20, y: 81 },
        { x: -200, y: 30 },
        { x: 70, y: 10 },
        { x: -150, y: 70 },
        { x: 4, y: 60 },
        { x: -170, y: 50 },
        { x: 25, y: 30 }
      ],
      index: 0,
      online: false,
      looper: new Animated.Value(0),
      connectedDevices: [{ name: " ", connected: false }]
    };
  }
  componentDidMount() {
    console.log("djksankjn");
  }
  animationLoop() {
    this.state.looper.setValue(0);
    Animated.timing(this.state.looper, {
      toValue: 100,
      duration: 2000
    }).start(o => {
      if (o.finished) {
        this.animationLoop();
      }
    });
  }
  onConnected() {
    this.setState({
      connectedDevices: [{ name: "Jazzy", connected: true, popUp: false }]
    });
  }
  onInviteAccepted() {
    console.log("InviteAccepted");
    this.onConnected();
  }
  sendInvitation() {
    if (this.state.connectedDevices[0].connected === false) {
      // console.log("Sending Invite");
      Alert.alert(
        "Invite User?",
        "You want to invite this user?",
        [
          { text: "YES", onPress: () => this.onInviteAccepted() },
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          }
        ],
        { cancelable: false }
      );
    } else {
      if (this.state.connectedDevices[0].popUp === false) {
        this.setState({
          connectedDevices: [{ name: "Jazzy", connected: true, popUp: true }]
        });
      } else {
        this.setState({
          connectedDevices: [{ name: "Jazzy", connected: true, popUp: false }]
        });
        console.log("Already Connected");
      }
    }
  }
  render() {
    const Item = () => {
      return (
        <TouchableOpacity
          style={{
            height: 40,
            width: 40,
            borderRadius: 20,
            backgroundColor: "white",
            justifyContent: "center",
            alignItems: "center"
          }}
          onPress={() => this.sendInvitation()}
        >
          {self.state.connectedDevices[0].connected === true
            ? <Text style={{ fontSize: 22, fontWeight: "bold", color: "blue" }}>
                C
              </Text>
            : null}
        </TouchableOpacity>
      );
    };
    const PopUp = () => {
      return (
        <View
          style={{
            height: 80,
            width: 60,
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "center",
            flexDirection: "column"
          }}
        >
          <TouchableOpacity
            style={{
              height: 30,
              width: 60,
              marginTop: 5,
              backgroundColor: "grey",
              justifyContent: "center",
              alignItems: "center",
              alignSelf: "center",
              borderRadius: 10
            }}
            onPress={() => {
              console.log(this.props.navigation, "dsadsada");
              this.props.navigation.navigate("SendPage");
            }}
          >
            <Text style={{ fontSize: 12, fontWeight: "bold" }}>Send</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              height: 30,
              width: 80,
              marginTop: 5,
              backgroundColor: "grey",
              justifyContent: "center",
              alignItems: "center",
              alignSelf: "center",
              borderRadius: 10
            }}
            onPress={() => {
              this.setState({
                connectedDevices: [
                  { name: null, connected: false, popUp: false }
                ]
              });
            }}
          >
            <Text style={{ fontSize: 12, fontWeight: "bold" }}>Disconnect</Text>
          </TouchableOpacity>
        </View>
      );
    };
    var self = this;
    var { height, width } = Dimensions.get("window");
    var color = this.state.looper.interpolate({
      inputRange: [0, 50, 100],
      outputRange: [
        "rgba(7, 94, 17,0.7)",
        "rgba(7, 94, 17,0.7)",
        "rgba(7, 94, 17,0)"
      ]
    });
    var scaleFactor = this.state.looper.interpolate({
      inputRange: [0, 100],
      outputRange: [1, 4]
    });
    var scaleFactor2 = this.state.looper.interpolate({
      inputRange: [0, 100],
      outputRange: [0, 0.5]
    });
    var scaleFactor3 = this.state.looper.interpolate({
      inputRange: [0, 100],
      outputRange: [1, 2.5]
    });
    var rotateFactor = this.state.looper.interpolate({
      inputRange: [0, 25, 50, 75, 100],
      outputRange: ["0deg", "90deg", "180deg", "270deg", "360deg"]
    });
    var i = 0;
    console.log(this.state.online);
    return (
      <TouchableHighlight
        onPress={() => {
          console.log("iu76768687");
          this.setState({
            connectedDevices: [
              {
                name: this.state.connectedDevices[0].name,
                connected: this.state.connectedDevices[0].connected,
                popUp: false
              }
            ]
          });
        }}
        style={{
          flex: 1,
          backgroundColor: "rgba(0,0,0,0)",
          justifyContent: "center"
        }}
      >
        <Image
          style={{
            width: width,
            height: height,
            backgroundColor: "black"
          }}
        >

          <Animated.View
            style={{
              height: 100,
              width: 100,
              borderRadius: 50,
              backgroundColor: color,
              left: width / 2 - 50,
              top: 240,
              borderWidth: 0.2,
              borderColor: "rgba(206, 226, 232,0.2)",
              transform: [{ scale: scaleFactor }],
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Animated.View
              style={{
                height: 80,
                width: 80,
                borderRadius: 40,
                backgroundColor: color,
                left: 0,
                top: 0,
                borderWidth: 0.2,
                borderColor: "rgba(206, 226, 232,0.2)",
                transform: [{ scale: scaleFactor2 }]
              }}
            >
              <Animated.View
                style={{
                  height: 50,
                  width: 50,
                  borderRadius: 40,
                  backgroundColor: color,
                  left: 15,
                  top: 15,
                  borderWidth: 0.2,
                  borderColor: "rgba(206, 226, 232,0.2)",
                  transform: [{ scale: scaleFactor3 }]
                }}
              />
            </Animated.View>
          </Animated.View>
          <TouchableOpacity
            style={{
              height: 100,
              width: 100,
              borderRadius: 50,
              top: 140,
              left: width / 2 - 50
            }}
            onPress={() => {
              console.log(this.state.online, "press");
              if (this.state.online === true) {
                this.setState({ online: false });
                this.state.looper.setValue(0);
                this.state.looper.stopAnimation();
              } else if (this.state.online === false) {
                this.setState({ online: true });
                this.animationLoop();
              }
              console.log(this.state.looper, "0000");
              this.setState({
                index: this.state.index > 3 ? 0 : this.state.index + 1
              });
            }}
          >
            <Image
              source={require("../../assets/Profile.jpg")}
              style={{
                height: 100,
                width: 100,
                borderRadius: 50,
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              {this.state.online === false
                ? <View
                    style={{
                      height: 100,
                      width: 100,
                      borderRadius: 50,
                      backgroundColor: "rgba(0,0,0,0.8)"
                    }}
                  />
                : null}
            </Image>
          </TouchableOpacity>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              height: 100,
              width: 100,
              top: this.state.points[this.state.index].x + 180,
              left: this.state.points[this.state.index].y,
              backgroundColor: "transparent"
            }}
          >
            {this.state.online === true ? <Item /> : null}
            {this.state.connectedDevices[0].popUp === true ? <PopUp /> : null}
          </View>
        </Image>
      </TouchableHighlight>
    );
  }
}
