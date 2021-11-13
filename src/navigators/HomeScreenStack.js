import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import HomeScreen from "../screens/HomeScreen";


const HomeStack = createStackNavigator()

function HomeScreenStack({ navigation }) {
    return (
      <HomeStack.Navigator>
        <HomeStack.Screen name='Home' component={HomeScreen}></HomeStack.Screen>
      </HomeStack.Navigator>
    )
  }

export default HomeScreenStack;