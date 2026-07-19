import React from "react";
import { View } from "react-native";
import { Expression, RendererNode } from "../types/dumm1";
import { evaluateExpression } from "./expressions";
import componentMap from "./index";

interface RenderNodeProps {
  node: RendererNode;
  state: Record<string, any>;
  setState: (
    updater: (prev: Record<string, any>) => Record<string, any>,
  ) => void;
}

const RenderNode: React.FC<RenderNodeProps> = ({ node, state, setState }) => {
  if (node.type === "VERTICAL") {
    return (
      <View style={{ flexDirection: "column" }}>
        {node.children.map((child, i) => (
          <RenderNode key={i} node={child} state={state} setState={setState} />
        ))}
      </View>
    );
  }

  const Component = componentMap[node.type];

  let extraProps = {} as any;

  // Handle dynamic enable logic
  if (node.type === "BUTTON") {
    extraProps.enabled = evaluateExpression(
      node?.enabled?.value as Expression,
      state,
    );
  }

  return (
    <Component {...node} {...extraProps} state={state} setState={setState} />
  );
};

export default RenderNode;
