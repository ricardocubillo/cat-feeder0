import { useState } from "react";
import { StyleSheet } from "react-native";
import { List } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import SelectWeight from "./SelectWeight";

/* 
<List.AccordionGroup style={styles.accordionView}>
      <List.Accordion
        title={"Cat's weight"}
        id={"1"}
        left={(props) => <MaterialCommunityIcons {...props}
          name="weight-kilogram"
          size={24}
          color="black" />}
      >
        <SelectWeight />
      </List.Accordion>
    </List.AccordionGroup>
*/

export default function WeightItem() {
  return (
    <List.Section>
      <List.Item
        title={"Cat's weight"}
        left={(props) => <MaterialCommunityIcons {...props}
          name="weight-kilogram"
          size={24}
          color="black" />}
      />
      <SelectWeight />
    </List.Section>
  );
}


const styles = StyleSheet.create({
  accordionView: {
    backgroundColor: "white"
  }
});
