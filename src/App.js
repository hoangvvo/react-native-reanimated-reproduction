import React, { useState } from "react";
import { Button, Pressable, StyleSheet, Text, View } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";

const styles = StyleSheet.create({
  case: {
    padding: 24,
    backgroundColor: "#f2f3f8",
    marginBottom: 24
  },
  box: {
    backgroundColor: "#001a72", padding: 24, marginTop: 12
  },
  text: {
    color: "#ffffff"
  }
})

function Working1NoAnimatedStyle() {
  return (
    <Animated.View style={styles.box}>
      <Text style={styles.text}>Animated.View component</Text>
    </Animated.View>
  );
}

function Working2WithAnimatedStyle() {
  const pressedValue = useSharedValue(0);
  const style = useAnimatedStyle(() => {
    return ({ opacity: pressedValue.value === 1 ? withTiming(0.5) : withTiming(1)})
  })
  return (
    <Animated.View style={[style, styles.box]}>
      <Pressable style={{ flex: 1 }} onPressIn={() => pressedValue.value = 1} onPressOut={() => pressedValue.value = 0} >
        <Text selectable={false} style={styles.text}>Animated.View component (Pressed me)</Text>
      </Pressable>
    </Animated.View>
  );
}

function Fail1NoStyleProps() {
  return (
    <Animated.View>
      <View style={styles.box}>
        <Text style={styles.text}>Animated.View component</Text>
      </View>
    </Animated.View>
  );
}

function Fail2WithFalsyStyleArrayItem() {
  const pressedValue = useSharedValue(0);
  const style = useAnimatedStyle(() => {
    return ({ opacity: pressedValue.value === 1 ? withTiming(0.5) : withTiming(1)})
  })
  return (
    // undefined or false or null etc.
    <Animated.View style={[styles.box, style, undefined]}>
      <Pressable style={{ flex: 1 }} onPressIn={() => pressedValue.value = 1} onPressOut={() => pressedValue.value = 0} >
        <Text selectable={false} style={styles.text}>Animated.View component (Pressed me)</Text>
      </Pressable>
    </Animated.View>
  );
}

function Case({ Component }) {
  const [visible, setVisible] = useState(true);
  return <View style={styles.case}>
    <Text>{Component.name}</Text>
    <Button title={`Toggle (visible = ${visible})`} onPress={() => setVisible(!visible)} />
    {visible && <Component />}
  </View>
}

const App = () => {
  return (
    <View style={{ justifyContent: "center", flex: 1 }}>
      <Case Component={Working1NoAnimatedStyle} />
      <Case Component={Working2WithAnimatedStyle} />
      <Case Component={Fail1NoStyleProps} />
      <Case Component={Fail2WithFalsyStyleArrayItem} />
    </View>
  );
};

export default App;
