import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { FILMS } from "../shared/data";



export default function FlatListScreen() {

    function renderItem({ item }) {
        return(
        <View style={styles.dark}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.subtitle}>{item.director}</Text>
        </View>
        )
    }
    return (
        <FlatList
            data={FILMS}
            renderItem={renderItem}
            keyExtracter={(item) => item.id.toString()}
        ></FlatList>
    );
}

const styles = StyleSheet.create({
    dark: {
        flex: 1,
        backgroundColor: "black",
        color: "white",
    },
    title: {
        color: 'white',
        fontSize: 30,
        fontWeight: "bold",
        marginBottom: 3
    },
    subtitle: {
        color: 'white'
    }
});
