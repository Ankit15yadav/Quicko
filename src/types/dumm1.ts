export type WidgetId = string;

export interface BaseNode {
  id?: WidgetId;
  type: string;
}

export interface VerticalRenderer extends BaseNode {
  type: "VERTICAL";
  children: RendererNode[];
}

export type RendererNode =
  | VerticalRenderer
  | TextWidget
  | TextInputWidget
  | ButtonWidget;

export interface TextWidget extends BaseNode {
  type: "TEXT";
  id: WidgetId;
  text: string;
}
export interface TextInputWidget extends BaseNode {
  type: "TEXT_INPUT";
  id: WidgetId;
  placeholder: string;
}
export interface ButtonWidget extends BaseNode {
  type: "BUTTON";
  id: WidgetId;
  text: string;
  enabled?: DynamicValue<boolean>;
}
export type DynamicValue<T> =
  | {
      type: "STATIC";
      value: T;
    }
  | {
      type: "EXPRESSION";
      value: Expression;
    };
export type Expression = AndExpression | NotNilExpression;

export interface AndExpression {
  op: "AND";
  conditions: Expression[];
}

export interface NotNilExpression {
  op: "NOT_NIL";
  path: WidgetId;
}
export interface JsonContext {
  user?: {
    singleMember?: boolean;
  };
}
export interface ScreenSpec {
  screenId: string;
  jsonContext?: JsonContext;
  renderer: RendererNode;
}
