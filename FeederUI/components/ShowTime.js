import { useEffect, useState  } from "react";
import { View, Text, StyleSheet } from "react-native";

export default function ShowTime() {
  const [time, setTime] = useState(""); 

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString([],
        {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12 : true
        }
      ));
    }, 1000);

    return () => clearInterval(interval);

  }, []);

  return (
    <View style={styles.timeView}>
      <Text style={styles.timeFont}>
        {time}
        </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  timeView: {
    alignSelf: "center",
    marginTop: 20
  },
  timeFont: {
    fontSize: 40,
    fontWeight: "bold"
  }
})
