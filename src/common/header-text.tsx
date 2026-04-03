import { Text } from "react-native";
import { HeaderTextstyles as styles } from "./styles";
import { IHeaderText } from "./types";

const P = ({ text, variant, css }: IHeaderText) => {
  return <Text style={[styles[variant], css]}>{text}</Text>;
};

export { P };

