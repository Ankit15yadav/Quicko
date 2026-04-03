import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

const UserPersonalInformationPage = () => {
  const { id = null } = useLocalSearchParams();
  return (
    <View>
      <Text>hello {id}</Text>
    </View>
  );
};

export default UserPersonalInformationPage;
