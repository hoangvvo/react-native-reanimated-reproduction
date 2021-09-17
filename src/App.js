import React from "react";
import { Text } from "react-native";
import {
  GestureHandlerRootView,
  PanGestureHandler,
} from "react-native-gesture-handler";
import Animated, { useAnimatedGestureHandler } from "react-native-reanimated";

const Test = () => {
  const eventHandler = useAnimatedGestureHandler(
    {
      onActive(event) {
        console.log("onActive");
      },
      onEnd() {
        console.log("onEnd");
      },
      onFinish() {
        console.log("onFinish");
      },
    },
    []
  );

  return (
    <PanGestureHandler onGestureEvent={eventHandler} maxPointers={1}>
      <Animated.View
        style={{ backgroundColor: "#001a72", padding: 24, marginTop: 12 }}
      >
        <Text style={{ color: "#ffffff" }}>Animated.View component</Text>
      </Animated.View>
    </PanGestureHandler>
  );
};

const App = () => {
  return (
    <GestureHandlerRootView>
      <Test />
    </GestureHandlerRootView>
  );
};

export default App;
