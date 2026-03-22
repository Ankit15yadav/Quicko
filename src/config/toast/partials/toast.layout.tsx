import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { BaseToastProps } from "react-native-toast-message";

export const SuccessToast = (props: BaseToastProps) => {
  return (
    <View style={styles.container}>
      {/* Left: Icon */}
      <View style={styles.iconBadge}>
        <Text style={styles.iconText}>✓</Text>
      </View>

      {/* Right: Text content */}
      <View style={styles.textBlock}>
        <Text style={styles.title} numberOfLines={1}>
          {props.text1 ?? "Success!"}
        </Text>
        {props.text2 ? (
          <Text style={styles.subtitle} numberOfLines={2}>
            {props.text2}
          </Text>
        ) : null}
      </View>
    </View>
  );
};

export const DefaultToast = (props: BaseToastProps) => {
  return (
    <View style={styles.container}>
      <Text>
        Hello this is toast.
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#0F1A12",
    borderEndEndRadius: 12,
    borderEndStartRadius: 12,
    marginHorizontal: 16,
    paddingVertical: 12,
    paddingHorizontal: 14,
    marginTop: 15,
    borderWidth: 1,
    // borderColor: "#2A7A3B",
    elevation: 4,
    // borderColor: "#2A7A3B",
    minHeight: 50,
    width: "100%",
  },
  iconBadge: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#2ECC71",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  iconText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },
  textBlock: {
    flex: 1,
    justifyContent: "center",
    gap: 2,
  },
  title: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "600",
  },
  subtitle: {
    color: "#8BAF8E",
    fontSize: 12,
    fontWeight: "400",
    lineHeight: 17,
  },
});
