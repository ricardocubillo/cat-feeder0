import { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { FAB } from "react-native-paper";
import { TimePickerModal } from "react-native-paper-dates";

import TimeCardItem from "./TimeCardItem";

export default function PickTime() {
  const [visible, setVisible] = useState(false);
  const [task, setTask] = useState([]);

  const onDimiss = () => {
    setVisible(false);
  }

  const onConfirm = ({ hours, minutes }) => {
    setVisible(false);
    let newTask = task ?? [];
    newTask.push({
      id: task.length + 1,
      time: { hours, minutes },
      enable: false,
    });
    setTask(newTask);
  };

  const enableTask = (id) => {
    let tasks = task.map((item) => {
      if (item.id === id) {
        return {
          id: item.id,
          time: item.time,
          enable: !item.enable
        };
      }
      else {
        return item;
      }
    });

    setTask(tasks);
  };

  const onDelete = (id) => {
    let copyTask = task.filter((item) => item.id !== id);
    setTask(copyTask);
  };


  return (
    <View style={styles.container}>
      <ScrollView>
        {
          task.length > 0 ? (
            task.map((item) => (
              <TimeCardItem
                key={item.id}
                task={item}
                onDelete={() => onDelete(item.id)}
                enableTask={() => enableTask(item.id)}
              />
            ))
          ) : (
            <Text style={styles.textView}>Empty tasks</Text>
          )}
      </ScrollView>
      <TimePickerModal
        visible={visible}
        onDimiss={onDimiss}
        onConfirm={onConfirm}
      />
      <View style={styles.fabView}>
        <FAB
          icon="plus"
          onPress={() => setVisible(true)}
        />
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
  },
  textView: {
    alignSelf: "center",
    fontSize: 20,
    marginTop: 50
  },
  fabView: {
    flexBasis: "20%",
    alignSelf: "center",
    top: 220,
  }
})
