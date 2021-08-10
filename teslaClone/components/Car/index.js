import React from "react";
import { View, Text, ImageBackground, Pressable, Linking } from "react-native";

import styles from "./styles";
import CustomBtn from "../customBtn";

const Car = (props) => {
  const { name, tagline, taglineCTA, image } = props.item;

  return (
    <View styles={styles.carContainer}>
      <ImageBackground source={image} style={styles.image}>
        <View style={styles.titles}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.subtitle}>
            {tagline}{' '} 
            <Pressable onPress={() => {Linking.openURL("https://www.tesla.com/support/taking-delivery?redirect=no")}}>
              <Text style={styles.subtitleCTA}>{taglineCTA}</Text>
            </Pressable>
          </Text>
        </View>

        <View style={styles.btnContainer}>
          <CustomBtn
            type={"Primary"}
            text={"Custom Order"}
            onPress={() => {
              console.warn("Custom Order Pressed");
            }}
          />
          <CustomBtn
            text={"Existing Inventory"}
            onPress={() => {
              console.warn("Existing Inventory Pressed");
            }}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default Car;
