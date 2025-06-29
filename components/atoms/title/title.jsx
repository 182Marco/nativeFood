import * as N from "react-native";
import { S } from "./title.style";

const Title = p => {
  return <N.Text style={[S.title, p.style]}>{p.text}</N.Text>;
};

export { Title };
