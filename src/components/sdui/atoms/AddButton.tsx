import { useCartStore } from "@src/store/cartStore";
import { AddButtonProps } from "@src/types/sdui";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export function AddButton({ productId, action }: AddButtonProps) {
  const [loading, setLoading] = useState(false);

  // reads from zustand/jotai/whatever you use
  const quantity = useCartStore((s) => s.getQuantity(productId));
  const addToCart = useCartStore((s) => s.addToCart);
  const increment = useCartStore((s) => s.increment);
  const decrement = useCartStore((s) => s.decrement);

  async function handleAdd() {
    setLoading(true);
    addToCart({ productId, name: "milk", price: 123 });
    setLoading(false);
  }

  // State 3 — already in cart, show stepper
  if (quantity > 0) {
    return (
      <View style={styles.stepper}>
        <TouchableOpacity
          onPress={() => decrement(productId)}
          style={styles.stepBtn}
        >
          <Text style={styles.stepLabel}>−</Text>
        </TouchableOpacity>
        <Text style={styles.qty}>{quantity}</Text>
        <TouchableOpacity
          onPress={() => increment(productId)}
          style={styles.stepBtn}
        >
          <Text style={styles.stepLabel}>+</Text>
        </TouchableOpacity>
      </View>
    );
  }

  // State 2 — loading
  if (loading) {
    return (
      <View style={[styles.button, styles.buttonDisabled]}>
        <Text style={styles.label}>Adding...</Text>
      </View>
    );
  }

  // State 1 — idle
  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={0.7}
      onPress={handleAdd}
    >
      <Text style={styles.label}>ADD +</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderWidth: 1.5,
    borderColor: "#1D9E75",
    borderRadius: 6,
    paddingVertical: 6,
    alignItems: "center",
    marginTop: 8,
  },
  buttonDisabled: {
    borderColor: "#B4B2A9",
  },
  label: {
    fontSize: 13,
    fontWeight: "600",
    color: "#1D9E75",
    letterSpacing: 0.3,
  },
  stepper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1.5,
    borderColor: "#1D9E75",
    borderRadius: 6,
    marginTop: 8,
    overflow: "hidden",
  },
  stepBtn: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    backgroundColor: "#1D9E75",
  },
  stepLabel: {
    fontSize: 15,
    fontWeight: "600",
    color: "#fff",
  },
  qty: {
    fontSize: 13,
    fontWeight: "600",
    color: "#1D9E75",
    paddingHorizontal: 12,
  },
});
