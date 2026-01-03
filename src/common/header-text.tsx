import { Text } from "react-native";
import { HeaderTextstyles as styles } from './styles';
import { IHeaderText } from "./types";

const HeaderText = ({ text, variant, css }: IHeaderText) => {
    return (
        <Text style={[styles[variant], css]}>
            {text}
        </Text>
    )
}

export default HeaderText