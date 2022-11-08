import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function Todo({ item, handleDeleteToDo }) {
  return (
    <TouchableOpacity onPress={() => handleDeleteToDo(item.key)}>
      <Text style={styles.item}>{item.text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    borderWidth: 1,
    borderStyle: "dashed",
    borderColor: "blcak",
    padding: 16,
    marginVertical: 4,
    borderRadius: 10,
  },
});
