import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  NativeSyntheticEvent,
  TextInputSubmitEditingEventData,
} from "react-native";
import { theme } from "./color";

type Todo = {
  [id: string]: {
    text: string;
    work: boolean;
  };
};

export default function App() {
  const [isWorking, setIsWorking] = useState(true);
  const [text, setText] = useState("");
  const [toDos, setToDos] = useState<Todo>();
  const work = () => setIsWorking(true);
  const travel = () => setIsWorking(false);
  const handleChangeText = (text: string) => {
    setText(text);
  };
  const addToDo = (text: string) => {
    const newToDo = {
      [Date.now()]: {
        text,
        work: isWorking,
      },
    };
    // const newToDos = Object.assign({}, toDos, newToDo);
    // setToDos(newToDos);
    setToDos({ ...toDos, ...newToDo });
  };
  const handleSubmitText = (
    e: NativeSyntheticEvent<TextInputSubmitEditingEventData>
  ) => {
    // console.log(e.nativeEvent.text);
    const text = e.nativeEvent.text;
    if (text === "") {
      return;
    }

    addToDo(text);
    setText("");
  };
  console.log(toDos);

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.header}>
        <TouchableOpacity onPress={work}>
          <Text
            style={{
              ...styles.btnText,
              color: isWorking ? "white" : theme.gray,
            }}
          >
            Work
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={travel}>
          <Text
            style={{
              ...styles.btnText,
              color: !isWorking ? "white" : theme.gray,
            }}
          >
            Travel
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <TextInput
          onChangeText={handleChangeText}
          onSubmitEditing={handleSubmitText}
          value={text}
          returnKeyType="done"
          style={styles.input}
          placeholder={isWorking ? "Add a To do" : "Where do you want to go?"}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.bg,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    marginTop: 100,
    justifyContent: "space-between",
  },
  btnText: {
    fontSize: 38,
    fontWeight: "600",
  },
  input: {
    backgroundColor: "white",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 30,
    marginTop: 20,
    fontSize: 18,
  },
});
