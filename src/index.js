import { AppRegistry } from "react-native";
import "react-native-gesture-handler";
import App from "./App";

AppRegistry.registerComponent("App", () => App);
AppRegistry.runApplication("App", { rootTag: document.getElementById("root") });
