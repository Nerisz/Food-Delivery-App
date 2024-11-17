import { Text, View, ScrollView, FlatList } from "react-native";
import { Header } from "../components/header";
import { Banner } from "../components/banner";
import { Search } from "../components/search";
import { Section } from "../section";
import { TrendingFoods } from "../components/trending";
import { Restaurants } from "../components/restaurants";
import { RestaurantsVerticalList } from "../components/list";

import Constants from "expo-constants";

const statusBarHeight = Constants.statusBarHeight;

export default function Index() {
  return (
    <ScrollView
      style={{ flex: 1 }}
      className="bg-slate-200"
      showsVerticalScrollIndicator={false}
    >
      <View className="w-full px-4" style={{ marginTop: statusBarHeight + 8 }}>
        <Header />

        <Banner />

        <Search />
      </View>

      <Section
        name="Comidas em alta"
        label="Veja mais"
        action={() => console.log("Clicou no veja mais")}
        size="text-xl"
      />
      <TrendingFoods />
      <Section
        name="Famosos no App"
        label="Veja todos"
        action={() => console.log("Clicou no veja todos")}
        size="text-lg"
      />
      <Restaurants />
      <Section
        name="Restaurantes"
        label="Veja todos"
        action={() => console.log("Clicou no veja todos")}
        size="text-lg"
      />
      <RestaurantsVerticalList />
    </ScrollView>
  );
}
