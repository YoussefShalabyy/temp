import { View, Text, Image } from "react-native";
import React from "react";
import { RideCardType } from "@/types/type";
import { icons } from "@/constants";

const formatDate = (dateString: string) => {
  const date = new Date(dateString);

  // Get day, month, year, hour, and minute
  const day = date.getDate();
  const month = date.toLocaleString("en-US", { month: "long" });
  const year = date.getFullYear();

  let hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, "0"); // ensures 2 digits
  const ampm = hours >= 12 ? "PM" : "AM";

  // Convert to 12-hour format
  hours = hours % 12 || 12; // Convert 0 to 12 for midnight

  // Format the string in "16 July 2023, 10:30 PM" format
  return `${day} ${month} ${year}, ${hours}:${minutes} ${ampm}`;
};

const Row = ({ t1, t2 }: { t1: string; t2: string }) => (
  <View
    className={`flex-row justify-between py-3  ${t1 !== "Payment Status" && "border-b  border-white"}`}
  >
    <Text className="text-[15px] font-JakartaSemiBold text-general-800">
      {t1}
    </Text>
    <Text
      className={`text-[15px] font-JakartaSemiBold ${t2 === "paid" ? "text-general-400" : ""}`}
    >
      {t2}
    </Text>
  </View>
);

const RideCard = ({ item }: { item: RideCardType }) => {
  return (
    <View className="w-full p-3 space-y-4 mb-2 bg-white rounded-xl">
      <View className="flex-row justify-between items-center">
        <Image
          className="w-20 h-[90px] rounded-xl"
          source={{
            uri: `https://maps.geoapify.com/v1/staticmap?style=osm-bright&width=600&height=400&center=lonlat:${item.destination_longitude},${item.destination_latitude}&zoom=14&apiKey=${process.env.EXPO_PUBLIC_GIOAPIFY_API_KEY}`,
          }}
        />
        <View>
          <View className="flex-row justify-start items-center space-x-2 ">
            <Image source={icons.to} className="w-6 h-6" />
            <Text className="font-JakartaSemiBold text-lg">
              {item.origin_address}
            </Text>
          </View>

          <View className="flex-row justify-start items-center space-x-2 ">
            <Image source={icons.point} className="w-6 h-6" />
            <Text className="font-JakartaSemiBold text-lg">
              {item.destination_address}
            </Text>
          </View>
        </View>
      </View>

      <View className="bg-general-500 justify-between rounded-xl p-[14px]">
        <Row t1="Date & Time" t2={formatDate(item.created_at)} />
        <Row
          t1="Driver"
          t2={`${item.driver.first_name || ""} ${item.driver.last_name || ""}`}
        />
        <Row t1="Car seats" t2={item.driver?.car_seats?.toString() || "N/A"} />
        <Row t1="Payment Status" t2={item.payment_status} />
      </View>
    </View>
  );
};

export default RideCard;
