import { colors } from "./colors";
import { StyleSheet } from "react-native";

const btnSecondaryStyle = StyleSheet.create({
  BgAndBorder: {
    backgroundColor: "transparent",
  },
  paddingSizeElevation: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  textStyle: {
    color: colors.bg,
  },
});

const sizeRoundedBtn = 70;

const roundedBtnStyles = StyleSheet.create({
  BgAndBorder: {
    backgroundColor: "transparent",
    borderWidth: 2,
    borderColor: colors.bg,
    borderRadius: sizeRoundedBtn / 2,
  },
  paddingSizeElevation: {
    width: sizeRoundedBtn,
    height: sizeRoundedBtn,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 0,
    paddingHorizontal: 0,
  },
  textStyle: {
    fontSize: 30,
    color: colors.detail,
  },
});

const roundedBtn = {
  ...roundedBtnStyles,
  rippleColor: colors.detail,
};

export { btnSecondaryStyle, roundedBtn };
