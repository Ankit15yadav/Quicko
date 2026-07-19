import { Button, Text, TextInput } from "react-native";

const componentMap = {
  TEXT: ({ text }: { text: string }) => <Text>{text}</Text>,

  TEXT_INPUT: ({
    id,
    placeholder,
    state,
    setState, 
  }: {
    id: string;
    placeholder: string;
    state: Record<string, any>;
    setState: (
      updater: (prev: Record<string, any>) => Record<string, any>,
    ) => void;
  }) => (
    <TextInput
      placeholder={placeholder}
      value={state[id] || ""}
      onChangeText={(val) => setState((s) => ({ ...s, [id]: val }))}
      style={{ borderWidth: 1, margin: 10, padding: 10 }}
    />
  ),

  BUTTON: ({ text, enabled }: { text: string; enabled: boolean }) => (
    <Button title={text} disabled={!enabled} />
  ),
};

export default componentMap;
