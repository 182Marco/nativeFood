import { useNavigation } from "@react-navigation/native";

const useRenderMeal = p => {
  const navigation = useNavigation();
  const navigate = navigation.navigate;
  return { navigate };
};

export { useRenderMeal };
