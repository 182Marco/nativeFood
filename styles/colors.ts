import { isHexColor } from "./utils";

const colors = {
  headerBg: "#351401",
  bg: "#3f2f25",
  detail: "#e2b497",
  iconColor: "#FFEA00",
  btnPrimaryRipple: "#aaa",
};

const android_ripple = color => ({
  android_ripple: {
    color: isHexColor(color) || colors.btnPrimaryRipple,
    borderless: false,
  },
});

export { colors, android_ripple };
