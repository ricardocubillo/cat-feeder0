import { useState } from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { List, Switch} from "react-native-paper";
import { getDatabase, set, ref } from "firebase/database"

import Firebase from "../firebase-configuration";

export default function ManualAlimentation() {
  const [motor, setMotor] = useState(false);
  const rdb = getDatabase(Firebase);

  const onMotor = () => {
    setMotor(prevState => !prevState);
  }
  set(ref(rdb, "/feeder/manual-feeding/component/motor/dc/"), {
    value: motor
  });

  return (
    <List.Item
      title={"Enable manual feeding"}
      left={(props) =>
        <FontAwesome5
          {...props}
          name="cat"
          size={24}
          color="black"
        />}
      right={() =>
        <Switch
          value={motor}
          onValueChange={onMotor}
        />}
    />
  );
}
