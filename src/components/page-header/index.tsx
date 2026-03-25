import { useRouter } from "expo-router";
import { ChevronLeft, Share } from "lucide-react-native";
import { Pressable, Text, View } from "react-native";
import { styles } from "./styles";

interface IPageHeader {
  name: string;
  backFn?: () => void;
  hideBackButton?: boolean;
  showShareButton?: boolean;
}

const PageHeader = ({ name, backFn, showShareButton = false }: IPageHeader) => {
  const { back, canGoBack } = useRouter();

  const canUserGoBack = canGoBack();

  const handleBackClick = () => {
    if (backFn) {
      backFn();
    }
    if (canUserGoBack) back();
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        {/* {canUserGoBack && ( */}
        <Pressable style={styles.leftSection} onPress={handleBackClick}>
          <ChevronLeft size={28} color="white" />
        </Pressable>
        {/* )} */}

        <View style={styles.centerSection}>
          <Text style={styles.headerText}>{name}</Text>
        </View>

        <View style={styles.rightSection}>
          {showShareButton && (
            <Pressable>
              <Share size={18} color="#333" />
            </Pressable>
          )}
        </View>
      </View>
    </View>
  );
};

export default PageHeader;
