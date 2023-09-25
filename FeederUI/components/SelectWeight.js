import { useState } from "react";
import { FlatList } from "react-native";
import { List, RadioButton } from "react-native-paper";
import { getDatabase, ref, set } from "firebase/database";

import Firebase from "../firebase-configuration"

const commons_weigh = [
  {
    id: 1,
    title: "2 Kg",
    value: 2
  },
  {
    id: 2,
    title: "3 Kg",
    value: 3
  },
  {
    id: 3,
    title: "4 kg",
    value: 4
  },
  {
    id: 4,
    title: "5 Kg",
    value: 5
  }
];

const ListItem = ({ title, value, checked, setChecked }) => {
  return (
    <List.Item
      title={title}
      right={() => <RadioButton
        value={value}
        status={checked === value ? "checked" : "unchecked"}
        onPress={() => setChecked(value)}
      />}
    />
  );
};

export default function SelectWeight() {
  const [weight, setWeight] = useState(2);
  const rdb = getDatabase(Firebase);

  set(ref(rdb, "/food-scale/user-sel/hx711/"), {
    value: weight
  });

  return (
    <FlatList
      data={commons_weigh}
      renderItem={({ item }) => <ListItem
        title={item.title}
        value={item.value}
        checked={weight}
        setChecked={setWeight}
      />}
      keyExtractor={item => item.id}
    />
  );
}
