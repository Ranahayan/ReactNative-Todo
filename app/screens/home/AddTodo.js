import React, { useState } from "react";
import {
  TextInput,
  Text,
  View,
  StyleSheet,
  Button,
  TouchableOpacity,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function AddTodo({ handleAddtoDo }) {
  const [newTodo, setNewToDo] = useState("");
  const handleNewToDo = (val) => {
    setNewToDo(val);
  };

  return (
    <View style={styles.addToDo}>
      <TextInput
        style={styles.input}
        placeholder=" e.g. To somethng"
        onChangeText={handleNewToDo}
        value={newTodo}
      />
      <TouchableOpacity onPress={() => handleAddtoDo(newTodo)}>
        <View style={styles.button}>
          <Text style={styles.buttontext}>ADD</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  addToDo: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: hp("6%"),
    flexDirection: "row",
  },
  input: {
    borderColor: "#777",
    borderWidth: 1,
    padding: 13,
    width: wp("60%"),
    borderRadius: 10,
  },
  button: {
    width: wp("20%"),
    height: hp("6.9%"),
    borderRadius: 10,
    backgroundColor: "dodgerblue",
    marginLeft: 10,
    justifyContent: "center",
  },
  buttontext: {
    textAlign: "center",
    color: "white",
    fontSize: 15,
    fontWeight: "500",
  },
});
