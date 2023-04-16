import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { View } from "react-native";
import Chat from "./src/firebase/screens/Chat";


const Stack = createStackNavigator();

const ChatStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Chat" component={Chat} />
    </Stack.Navigator>
  );
};

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <ChatStack />
    </NavigationContainer>
  );
};

export default function App() {
  return (
    <RootNavigator/>
  );
}
