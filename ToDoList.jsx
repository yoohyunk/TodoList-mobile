import { ScrollView, View, Text, StyleSheet } from "react-native";

export default function ToDoList()
{
    return(
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
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    task: {
        padding: 10,
    marginBottom: 5,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    }
})