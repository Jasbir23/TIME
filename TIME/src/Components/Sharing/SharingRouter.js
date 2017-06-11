import React, { Component } from "react";
import SendPage from "./SendPage.js";
import ScanPage from "./ScanPage.js";
import { StackNavigator } from "react-navigation";
export default (StackNav = StackNavigator({
  ScanPage: { screen: ScanPage },
  SendPage: { screen: SendPage }
}));
