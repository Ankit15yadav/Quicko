export interface AddToCartAction {
  type: "add_to_cart";
  productId: string;
  quantity?: number;
}
