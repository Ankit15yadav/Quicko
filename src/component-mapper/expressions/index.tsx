import { Expression } from "@src/types/dumm1";

const evaluateExpression = (
  expr: Expression | undefined,
  state: Record<string, any>,
): boolean => {
  if (!expr) return true;

  switch (expr.op) {
    case "AND":
      return expr.conditions.every((c) => evaluateExpression(c, state));

    case "NOT_NIL":
      return !!state[expr.path];

    default:
      return false;
  }
};

export { evaluateExpression };

