import { useState } from "react";
import {
  StyleSheet,
  Text,
  StatusBar,
  View,
  FlatList,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Header from "./app/screens/home/header";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Todo from "./app/screens/home/Todo";
import AddTodo from "./app/screens/home/AddTodo";
import FlexPractice from "./app/screens/flexbox/flex";

export default function App() {
  const [todos, setTodos] = useState([
    {
      text: "Pra   ctice React Native",
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
    if (text.length < 3)
      return Alert.alert("Title", "Todos must be three chracter long", [
        { text: "Understood", onPress: () => console.log("understood") },
      ]);
    setTodos((prevtodos) => [{ text, key: Math.random() }, ...prevtodos]);
  };
  return (
    // <FlexPractice />
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo handleAddtoDo={handleAddtoDo} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              // scrollEnabled={true}
              renderItem={({ item }) => (
                <Todo item={item} handleDeleteToDo={handleDeleteToDo} />
              )}
            />
          </View>
        </View>
        <StatusBar style="auto" />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
  },
  content: {
    marginTop: hp("10%"),
    paddingHorizontal: 20,
    flex: 1,
  },
  list: {
    flex: 1,
  },
});
