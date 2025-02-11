import {StyleSheet, View, TextInput, Button,} from "react-native";
export default function ToDoForm()
{
    return(
        <View
            style={styles.formContainer}
            automaticallyAdjustKeyboardInsets={true}
        >
            <TextInput style={styles.input} placeholder="Add a new task" />
            <Button title="Add" onPress={() => {}} />
        </View>
    )
}

const styles = StyleSheet.create({
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
})