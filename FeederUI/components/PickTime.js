import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { FAB } from "react-native-paper";
import { TimePickerModal } from "react-native-paper-dates";

import TimeCard from "./TimeCard";

export default function PickTime() {
  const [visible, setVisible] = useState(false);
  const [time, setTime] = useState({hours: undefined, minutes:undefined});

  let date = new Date();
  time.hours !== undefined && date.setHours(time.hours);
	time.minutes !== undefined && date.setMinutes(time.minutes);

  const timeFormatter = new Intl.DateTimeFormat(undefined, {
		hour: '2-digit',
		minute: '2-digit'
	});

  const onDimiss = () => {
    setVisible(false);
  }

  const onConfirm = ({ hours, minutes }) => {
    setVisible(false);
    setTime({hours, minutes});
  }

  return (
    <View>
      <FAB
        style={styles.fabView}
        icon="plus"
        onPress={() => setVisible(true)}
      />
      {
        time.hours == undefined && time.minutes == undefined ?
        <Text style={styles.textView}>Empty task</Text>:
        <TimeCard time={timeFormatter.format(date)}/>
      }
      <TimePickerModal
        visible={visible}
        onDimiss={onDimiss}
        onConfirm={onConfirm}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  textView: {
    flex: 1,
    alignSelf: "center",
    fontSize: 20
  },
  fabView: {
    alignSelf: "center",
    top: 390,
    marginBottom: 10
  }
})
