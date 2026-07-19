// components/sdui/types/sdui.types.ts

import { AddToCartAction } from "./actions";

export interface BadgeProps {
  label: string;
  variant: "delivery" | "offer" | "new";
}

export interface ProductNameProps {
  text: string;
}

export interface QuantityLabelProps {
  text: string;
}

export interface PriceRowProps {
  current: number;
  original?: number;
}

export interface AddButtonProps {
  productId: string;
  action: AddToCartAction;
}

export interface ProductImageProps {
  emoji?: string;
  imageUrl?: string;
}

// Individual atom types
export type BadgeAtom = {
  type: "badge";
  props: BadgeProps;
};

export type ProductImageAtom = {
  type: "product_image";
  props: ProductImageProps;
};

export type ProductNameAtom = {
  type: "product_name";
  props: ProductNameProps;
};

export type QuantityLabelAtom = {
  type: "quantity_label";
  props: QuantityLabelProps;
};

export type PriceRowAtom = {
  type: "price_row";
  props: PriceRowProps;
};

export type AddButtonAtom = {
  type: "add_button";
  props: AddButtonProps;
};

export type ProductCardElement =
  | BadgeAtom
  | ProductImageAtom
  | ProductNameAtom
  | QuantityLabelAtom
  | PriceRowAtom
  | AddButtonAtom;

// The molecule — what the API returns
export interface ProductCardResponse {
  type: "product_card";
  elements: ProductCardElement[];
}
