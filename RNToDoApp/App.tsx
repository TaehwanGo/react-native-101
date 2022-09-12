import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  NativeSyntheticEvent,
  TextInputSubmitEditingEventData,
  ScrollView,
} from "react-native";
import { theme } from "./color";
import AsyncStorage from "@react-native-async-storage/async-storage";

type Todo = {
  [id: string]: {
    text: string;
    work: boolean;
  };
};

const STORAGE_KEY = "@toDos";

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
    const newToDos = { ...toDos, ...newToDo };
    setToDos(newToDos);
    return newToDos;
  };
  const loadToDos = async () => {
    try {
      const toDos = await AsyncStorage.getItem(STORAGE_KEY);
      console.log("toDos", toDos);
      if (toDos !== null) {
        setToDos(JSON.parse(toDos));
      }
    } catch (e) {
      console.log(e);
    }
  };
  const saveToDos = async (value: any) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(STORAGE_KEY, jsonValue);
    } catch (e) {
      // saving error
    }
  };
  const handleSubmitText = async (
    e: NativeSyntheticEvent<TextInputSubmitEditingEventData>
  ) => {
    // console.log(e.nativeEvent.text);
    const text = e.nativeEvent.text;
    if (text === "") {
      return;
    }

    const newToDos = addToDo(text);
    setText("");
    await saveToDos(newToDos);
  };
  console.log(toDos);

  useEffect(() => {
    loadToDos();
  }, []);

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
        <ScrollView style={styles.toDoContainer}>
          {toDos &&
            Object.entries(toDos).map(([id, toDo]) =>
              toDo.work === isWorking ? (
                <View key={id} style={styles.toDo}>
                  <Text style={styles.toDoText}>{toDo.text}</Text>
                </View>
              ) : null
            )}
        </ScrollView>
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
  toDoContainer: {
    marginTop: 20,
  },
  toDo: {
    backgroundColor: theme.gray,
    marginBottom: 10,
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 15,
  },
  toDoText: {
    fontSize: 16,
    fontWeight: "500",
    color: "white",
  },
});
