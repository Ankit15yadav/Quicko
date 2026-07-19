import { StyleSheet, Text, View } from "react-native";

interface Props {
  emoji?: string;
  imageUrl?: string;
}

export function ProductImage({ emoji = "📦" }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.emoji}>{emoji}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 110,
    backgroundColor: "#F1EFE8",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
  emoji: {
    fontSize: 48,
  },
});
