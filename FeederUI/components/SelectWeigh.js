import { useState } from "react";
import { FlatList } from "react-native";
import { List, RadioButton } from "react-native-paper";

const commons_weigh = [
  {
    id: 0,
    title: "1 Kg",
    value: 1
  },
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
      right={()=> <RadioButton 
        value={value}
        status={checked === value ? "checked": "unchecked"}
        onPress={() => setChecked(value)}
        />}
    />
  );
};

export default function SelectWeigh() {
  const [radioChecked, setRadioChecked] = useState(0);
  
  return (
    <List.Section>
      <List.Subheader>Select the weigh of your cat</List.Subheader>
      <FlatList
        data={commons_weigh}
        renderItem={({ item }) => <ListItem 
          title={item.title} 
          value={item.value} 
          checked={radioChecked}
          setChecked={setRadioChecked}
        />}
        keyExtractor={item => item.id}
      />
    </List.Section>
  );
}
