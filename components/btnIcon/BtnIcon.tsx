import { Ionicons } from "@expo/vector-icons";
import * as N from "react-native";
import { S } from "./BtnIcon.style";
import { useBtnIcon } from "./BtnIcon.hook";

const BtnIcon = ({
  name = "star",
  color = "white",
  size = 24,
  wrap,
  onPress,
}) => {
  const h = useBtnIcon({ name, onPress });
  return (
    <N.View style={wrap}>
      <N.Pressable
        onPress={h.toggleIcon}
        style={({ pressed }) => pressed && S.pressed}
      >
        <Ionicons name={h.iconName} size={size} color={color} />
      </N.Pressable>
    </N.View>
  );
};

export { BtnIcon };
