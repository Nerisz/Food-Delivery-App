import { View, Pressable, Text, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { FoodProps } from "..";

export function CardHorizontalFood({ food }: { food: FoodProps }) {
  return (
    <Pressable className="flex flex-col rounded-x1">
      <Image source={{ uri: food.image }} className="w-44 h-36 rounded-xl" />

      <View className="flex flex-row bg-neutral-800/90 w-fit gap-1 rounded-full absolute top-2 right-2 px-2 py-1 items-center justify-center">
        <Ionicons name="star" size={14} color="#ca8a04" />
        <Text className="text-white text-sm">{food.rating}</Text>
      </View>
      <View className="flex flex-row items-center justify-between">
        <Text className="text-green-700 font-medium text-lg">
          R$ {food.price}
        </Text>
        <Text className="text-sm text-black/50 font-semibold line-through">
          {food.discount}
        </Text>
      </View>
      <Text className="text-black mt-1">{food.name}</Text>
      <Text className="text-neutral-600">
        {food.time} - R$ {food.delivery}
      </Text>
    </Pressable>
  );
}