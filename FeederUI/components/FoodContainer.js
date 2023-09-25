import { useState, useEffect } from "react";
import { StyleSheet, Text } from "react-native";
import { Card, ProgressBar, MD3Colors } from "react-native-paper";
import { getDatabase, ref, onValue  } from "firebase/database";

import Firebase from "../firebase-configuration";

export default function FoodContainer() {
  const [containerValue, setContainerValue] = useState(0);

  const rdb = getDatabase(Firebase);
  const getRef = ref(rdb, "/food_container/hsrc04/value");

  
  useEffect(() => {

    onValue(getRef, (snapshot) => {
      const getValue = snapshot.val();
      setContainerValue(getValue.toFixed(2) / 100);
    })
  }, []);


  return (
    <Card style={styles.card_view}>
      <Card.Title title="Food Container"/>
      <Card.Content style={styles.card_content_position}>
        <ProgressBar 
          style={styles.progress_view} 
          animatedValue={containerValue} 
          color={containerValue <= 0.3 ? "#ba1a1a" : "#663399"} />
        <Text>Container Quatity: {containerValue * 100}%</Text>
      </Card.Content>
    </Card>  
  );
}

const styles = StyleSheet.create({
  card_view: {
    alignSelf: "center",
    marginTop: 10,
    width: 350,
    height: 200
  },
  card_content_position: {
    marginTop: 40
  },
  progress_view: {
    height: 20
  }
});
