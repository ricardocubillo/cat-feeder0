import { StyleSheet } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';
import { Text } from "react-native";
import { RectButton, Swipeable, GestureHandlerRootView } from "react-native-gesture-handler";

import TimeCard from "./TimeCard";

export default function TimeCardItem({ task, enableTask, onDelete }) {
  const renderRightActions = () => {
    return (
      <RectButton style={styles.rectBView} onPress={onDelete}>
        <Text>
          {<FontAwesome5
            name="trash-alt"
            size={24}
            color="red" />}
        </Text>
      </RectButton>
    )
  }

  return (
    <GestureHandlerRootView>
    <Swipeable renderRightActions={renderRightActions} >
      <TimeCard task={task} enableTask={enableTask} />
    </Swipeable>
    </GestureHandlerRootView>
  )
}


const styles = StyleSheet.create({
  rectBView: {
  }
});
