import { View, Text, StyleSheet } from "react-native";
import * as C from "../components";

import { MEALS } from "../data/dummy-data";

function MealsOverviewScreen() {
  return (
    <View style={styles.container}>
      <Text>Meals Overview Screen</Text>
      <C.Btn text="btn di prova" />
    </View>
  );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
