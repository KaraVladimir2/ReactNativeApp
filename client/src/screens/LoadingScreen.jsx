import React, { useState, useEffect } from "react";
import { View, Image, Animated } from "react-native";
import styles from "../styles/LoadingScreen.styles";

export default LoadingScreen = () => {
  const [blinkAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(blinkAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(blinkAnim, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View style={{ opacity: blinkAnim }}>
        <Image
          style={styles.image}
          source={require("../../assets/images/eagleLogo.jpg")}
        />
      </Animated.View>
    </View>
  );
};
