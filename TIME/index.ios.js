/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View } from "react-native";
import ScanPage from "./src/Components/Sharing/ScanPage";
import SendPage from "./src/Components/Sharing/SendPage";
import SharingRouter from "./src/Components/Sharing/SharingRouter";

export default class TIME extends Component {
  render() {
    return <SharingRouter />;
  }
}

AppRegistry.registerComponent("TIME", () => TIME);
