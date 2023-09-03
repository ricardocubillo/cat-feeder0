import { StyleSheet, Text } from "react-native";
import { Card, ProgressBar } from "react-native-paper";


export default function FoodContainer() {
  return (
    <Card style={styles.card_view}>
      <Card.Title title="Food Container"/>
      <Card.Content style={styles.card_content_position}>
        <ProgressBar style={styles.progress_view} animatedValue={0.5}/>
        <Text>Container Quatity: 90%</Text>
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
