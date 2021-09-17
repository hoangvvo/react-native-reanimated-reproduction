import React from "react";
import { Text, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const App = () => {
  return (
    <GestureHandlerRootView>
      <View style={{ justifyContent: "center", flex: 1 }}>
        <Text>Hello World</Text>
      </View>
    </GestureHandlerRootView>
  );
};

export default App;
