import React from "react";
import { View, Text, Pressable } from "react-native";

import styles from "./styles";

const CustomBtn = (props) => {
  return (
    <View style={styles.container}>
      <Pressable
        style={[
          styles.btn,
          {
            backgroundColor:
              props.type === "Primary" ? "#171A20CC" : "#FFFFFFA6",
          },
        ]}
        onPress={props.onPress}
      >
        <Text
          style={[
            styles.text,
            { color: props.type === "Primary" ? "#FFFFFF" : "#171A20" },
          ]}
        >
          {props.text}
        </Text>
      </Pressable>
    </View>
  );
};

export default CustomBtn;
