import { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';
import { FAB } from "react-native-paper";
import { Swipeable, GestureHandlerRootView } from "react-native-gesture-handler";
import { getDatabase, set, ref } from "firebase/database";
import _ from "lodash"

import TimeCard from "./TimeCard";
import Firebase from "../firebase-configuration";


export default function TimeCardItem({ task, enableTask, onDelete }) {
  const [motor, setMotor] = useState(false);
  const rdb = getDatabase(Firebase);

  const checkTime = () => {
    const date = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true
    });

    const splitDate = date.split(/:|[" "]| " " /);
    const currentDate = {
      hours: parseInt(splitDate[0]),
      minutes: parseInt(splitDate[1]),
      meridiem: splitDate[2]
    }

    if (task.enable == true && JSON.stringify(task.time) === JSON.stringify(currentDate)) {
      setMotor(true);
    }
  }
  setInterval(checkTime, 1000);

  set(ref(rdb, "/feeder/component/motor/dc/"), {
    value: motor
  });

  const renderRightActions = () => {
    return (
      <FAB
        style={styles.fabView}
        icon={() => <FontAwesome5
          name="trash"
          size={24}
          color="black" />}
        onPress={onDelete}
      />
    )
  }

  return (
    <GestureHandlerRootView>
      <Swipeable renderRightActions={renderRightActions} containerStyle={styles.swipeView}>
        <TimeCard task={task} enableTask={enableTask} />
      </Swipeable>
    </GestureHandlerRootView>
  )
}


const styles = StyleSheet.create({
  fabView: {
    alignSelf: "center"
  },
  swipeView: {
    padding: 10,
  }
});
