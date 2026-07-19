// components/sdui/SDUIRenderer.tsx

import { ProductCardElement } from "@src/types/sdui";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { AddButton } from "./atoms/AddButton";
import { Badge } from "./atoms/Badge";
import { PriceRow } from "./atoms/PriceRow";
import { ProductImage } from "./atoms/ProductImage";
import { QuantityLabel } from "./atoms/QualityLabel";
import { ProductName } from "./atoms/productnames";

const atomRegistry: Record<string, React.FC<any>> = {
  badge: (p) => <Badge {...p} />,
  product_image: (p) => <ProductImage {...p} />,
  product_name: (p) => <ProductName {...p} />,
  quantity_label: (p) => <QuantityLabel {...p} />,
  price_row: (p) => <PriceRow {...p} />,
  add_button: (p) => <AddButton {...p} />,
};

interface Props {
  elements: ProductCardElement[];
}

export function SDUIRenderer({ elements }: Props) {
  return (
    <View style={styles.card}>
      {elements.map((el, i) => {
        const Atom = atomRegistry[el.type];

        if (!Atom) {
          if (__DEV__) {
            return (
              <View key={i} style={styles.unknown}>
                <Text style={styles.unknownText}>Unknown atom: {el.type}</Text>
              </View>
            );
          }
          return null;
        }

        return <Atom key={`${el.type}-${i}`} {...el.props} />;
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 160,
    backgroundColor: "#ffffff",
    borderRadius: 12,
    borderWidth: 0.5,
    borderColor: "#D3D1C7",
    overflow: "hidden",
    padding: 10,
    gap: 6,
  },
  unknown: {
    backgroundColor: "#FAECE7",
    padding: 6,
    borderRadius: 4,
  },
  unknownText: {
    fontSize: 10,
    color: "#993C1D",
  },
});
