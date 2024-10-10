import RideCard from "@/components/RideCard";
import { recent } from "@/constants";
import { FlatList, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Page() {
  return (
    <SafeAreaView className="bg-general-500 flex-1 p-4">
      <FlatList
        data={recent}
        renderItem={({ item }) => <RideCard item={item} />}
      />
    </SafeAreaView>
  );
}
