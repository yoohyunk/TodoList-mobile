import { StatusBar } from "expo-status-bar";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
} from "react-native";
import ToDoForm from "./ToDoForm";
import ToDoList from "./ToDoList";

export default function App() {
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 20,
          borderBottomWidth: 2,
          borderBottomColor: "black",
          width: "100%",
          padding: 10,
        }}
      >
        Todo List App
      </Text>
      /
      <ScrollView style={{ width: "100%" }}>
        <ToDoList />
        <ToDoForm />
      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    width: "100%",
  },
  task: {
    padding: 10,
    marginBottom: 5,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
  formContainer: {
    paddingBottom: 50,
    flexDirection: "row",
    padding: 20,
  },
  input: {
    flex: 1,
    borderColor: "#ccc",
    borderWidth: 1,
    paddingHorizontal: 10,
    marginRight: 10,
  },
});
