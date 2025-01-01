import { Text, View } from "react-native";
import { GestureHandlerRootView, ScrollView, TextInput } from 'react-native-gesture-handler';
import Cat from './Cat';

console.log(Cat);

export default function Index() {
  return (
    <GestureHandlerRootView style={{ flex: 1}}>
      <ScrollView>   
        <Cat name="mango"/>
      </ScrollView>
    </GestureHandlerRootView>

  );
}
