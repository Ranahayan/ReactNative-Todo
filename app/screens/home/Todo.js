import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function Todo({ item, handleDeleteToDo }) {
  return (
    <TouchableOpacity >
      <View style={styles.item}>
        <AntDesign onPress={() => handleDeleteToDo(item.key)} name="delete" size={24} color="black" />
        <Text style={styles.content}>{item.text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  content: {
    flex: 1,
    borderWidth: 1,
    borderStyle: "dashed",
    borderColor: "blcak",
    padding: 16,
    marginVertical: 4,
    borderRadius: 10,
    marginStart: 4,
  },
});
