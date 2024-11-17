import { View, Text, Pressable } from "react-native";

interface Props {
  name: string;
  label: string;
  size: "text-xl" | "text-2x1" | "text-lg";
  action: () => void;
}

export function Section({ name, size, label, action }: Props) {
  return (
    <View className="w-full flex flex-row items-center justify-between px-4">
      <Text className={`${size} font-semibold my-3.5 self-start`}>{name}</Text>
      <Pressable onPress={action}>
        <Text>{label}</Text>
      </Pressable>
    </View>
  );
}
