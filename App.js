import React from "react";
import HomeScreenStack from "./src/navigators/HomeScreenStack";
import FlatListStackScreen from "./src/navigators/FlatListStack";
import {
    NavigationContainer,
    DefaultTheme,
    DarkTheme,
    useTheme,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { AppearanceProvider, useColorScheme } from "react-native-appearance";
import DT from "./darkTheme";
import myDarkTheme from "./darkTheme";

function App() {
    const scheme = useColorScheme();
    const MyDarkTheme = DT();

    return (
        <NavigationContainer
            theme={scheme === "dark" ? MyDarkTheme : DefaultTheme}
        > 
            <HomeScreenStack />
        </NavigationContainer>
    );
}

export default App;
