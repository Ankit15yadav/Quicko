import { useThemedStyles } from "@src/common/hooks";
import { useTheme } from "@src/contexts/theme";
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
  const { theme } = useTheme();
  const headerStyles = useThemedStyles((theme) => styles(theme));

  const canUserGoBack = canGoBack();

  const handleBackClick = () => {
    if (backFn) {
      backFn();
    }
    if (canUserGoBack) back();
  };

  return (
    <View style={headerStyles.wrapper}>
      <View style={headerStyles.container}>
        {/* {canUserGoBack && ( */}
        <Pressable style={headerStyles.leftSection} onPress={handleBackClick}>
          <ChevronLeft size={28} color={theme.text.primary} />
        </Pressable>
        {/* )} */}

        <View style={headerStyles.centerSection}>
          <Text style={headerStyles.headerText}>{name}</Text>
        </View>

        <View style={headerStyles.rightSection}>
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
