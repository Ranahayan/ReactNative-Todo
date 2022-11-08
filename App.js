import { useState } from "react";
import { StyleSheet, Text, StatusBar, View, FlatList } from "react-native";
import Header from "./app/screens/home/header";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Todo from "./app/screens/home/Todo";
import AddTodo from "./app/screens/home/AddTodo";

export default function App() {
  const [todos, setTodos] = useState([
    {
      text: "Practice React Native",
      key: 1,
    },
    {
      text: "Play Cricket",
      key: 2,
    },
    {
      text: "practice MongoDb",
      key: 3,
    },
    {
      text: "Start Work On FYP",
      key: 4,
    },
  ]);
  const handleDeleteToDo = (key) => {
    console.log(todos.length);
    setTodos((prevtodos) => prevtodos.filter((item) => item.key !== key));
  };
  const handleAddtoDo = (text) => {
    if (!text) return;
    setTodos((prevtodos) => [{ text, key: Math.random() }, ...prevtodos]);
  };
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <AddTodo handleAddtoDo={handleAddtoDo} />
        <View>
          <FlatList
            data={todos}
            renderItem={({ item }) => (
              <Todo item={item} handleDeleteToDo={handleDeleteToDo} />
            )}
          />
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    marginTop: hp("10%"),
    paddingHorizontal: 6,
  },
});
