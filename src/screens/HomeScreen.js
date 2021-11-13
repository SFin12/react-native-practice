import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import FlatListScreen from "../components/FlatList";

function HomeScreen() {
    return (
        <SafeAreaView>
            <View>
                <Text>Home Screen</Text>
                <FlatListScreen />
            </View>
        </SafeAreaView>
    );
}

export default HomeScreen;
