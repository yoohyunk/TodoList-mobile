import { StatusBar } from "expo-status-bar";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
} from "react-native";

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
        <View style={styles.task}>
          <Text>Task 1: Buy groceries</Text>
        </View>
        <View style={styles.task}>
          <Text>Task 2: Walk the dog</Text>
        </View>
        <View style={styles.task}>
          <Text>Task 3: Read a book</Text>
        </View>
        <View
          style={styles.formContainer}
          automaticallyAdjustKeyboardInsets={true}
        >
          <TextInput style={styles.input} placeholder="Add a new task" />
          <Button title="Add" onPress={() => {}} />
        </View>
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
