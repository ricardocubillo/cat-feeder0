import { useState } from "react";
import { StyleSheet } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';
import { FAB } from "react-native-paper";
import { Swipeable, GestureHandlerRootView } from "react-native-gesture-handler";
import { getDatabse, set, ref} from "firebase/database";

import TimeCard from "./TimeCard";
import Firebase from "../firebase-configuration";


export default function TimeCardItem({ task, enableTask, onDelete }) {
  const [motor, setMotor] = useState(false);
  const rdb = getDatabse(Firebase);
  
  const refreshTime = () => {
    let date = new Date();
    let current_date = date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true
    });

    checkTime(current_date);
  }

  setInterval(() => refreshTime, 1000);

  const checkTime = (time) => {
    if (enableTask === true) {
      if (task === time) {
        setMotor(true);
      }
    }

    set(ref(rdb, "/feeder/component/motor/dc/"), {
      value: motor
    });
  }

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
