import { Text, View } from "react-native";
import { GestureHandlerRootView, ScrollView, TextInput } from 'react-native-gesture-handler';
import Cat from './study/Cat';
import Pizza from './study/Pizza';
import FlatListBasics from './study/FlatListBasics';

console.log(Cat);

export default function Index() {
  return (
    <GestureHandlerRootView style={{ flex: 1}}>
      <FlatListBasics />
      <ScrollView>   
        <Cat name="mango"/>
        <Pizza />
      </ScrollView>
    </GestureHandlerRootView>

  );
}
