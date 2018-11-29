import React from "react";
import {
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";
import { Ionicons } from "@expo/vector-icons";

import HomeStack from "../stacks/HomeStack";
import SearchStack from "../stacks/SearchStack";

import Web from "../layout/Web";

export const Home = createStackNavigator({
  Home: { screen: HomeStack, navigationOptions: { header: null } },
  Web: { screen: Web }
});

export const Search = createStackNavigator({
  Search: { screen: SearchStack, navigationOptions: { header: null } },
  Web: { screen: Web }
});

export const Tabs = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: "Home",
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="md-home" color={tintColor} size={24} />
        )
      }
    },
    Search: {
      screen: Search,
      navigationOptions: {
        tabBarLabel: "Search",
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="md-search" color={tintColor} size={24} />
        )
      }
    }
  },
  {
    initialRouteName: "Home",
    tabBarOptions: {
      activeTintColor: "orange",
      labelStyle: { marginBottom: 6 },
      tabStyle: { margin: 2 }
    }
  }
);
