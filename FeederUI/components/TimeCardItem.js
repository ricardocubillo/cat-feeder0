import { StyleSheet } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';
import { FAB } from "react-native-paper";
import { Swipeable, GestureHandlerRootView } from "react-native-gesture-handler";

import TimeCard from "./TimeCard";


export default function TimeCardItem({ task, enableTask, onDelete }) {
  const renderRightActions = () => {
    return (
      <FAB 
        style = {styles.fabView}
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
    padding: 20,
    top: 110
  }
});
