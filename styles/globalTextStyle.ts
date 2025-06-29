import { colors } from "./colors";
import { StyleSheet } from "react-native";

const screenMainColor = colors.headerBg;

const texts = StyleSheet.create({
  summaryText: {
    fontSize: 20,
    textAlign: "center",
    marginVertical: 20,
    color: screenMainColor,
  },
  highlightedText: {
    fontWeight: 900,
    color: colors.headerBg,
  },
});

export { texts };
