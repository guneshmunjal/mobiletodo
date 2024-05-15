import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";
import Header from "./components/header";

import TodoItem from "./components/todoItem";
import AddTodo from "./components/addTodo";

export default function App() {
  const [todo, setTodo] = useState([
    { text: "buy coffe", key: "1" },
    { text: "buy icecream", key: "2" },
    { text: "buy cake", key: "3" },
  ]);

  const pressHandler = (key) => {
    setTodo((prevtodo) => {
      return prevtodo.filter((todo) => todo.key != key);
    });
  };

  const submitHandler = (text) => {
    setTodo((prevtodo) => {
      return [{ text: text, key: Math.random.toString() }, ...prevtodo];
    });
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler} />
          {/* to form */}
          <View style={styles.list}>
            <FlatList
              data={todo}
              renderItem={({ item }) => (
                <Text>
                  {item.text}
                  <TodoItem item={item} pressHandler={pressHandler} />
                </Text>
              )}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 40,
  },
});
