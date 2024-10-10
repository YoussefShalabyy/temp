import { Image, Text, TouchableOpacity, View } from "react-native";
import React, { useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import Swiper from "react-native-swiper";
import { Welcome } from "@/constants";
import MyButton from "@/components/MyButton";

const welcome = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const isLastSlide = activeIndex === Welcome.length - 1;
  const swiperRef = useRef<Swiper>(null);

  return (
    <SafeAreaView className="flex-1 items-center bg-white">
      <TouchableOpacity
        className="w-full items-end p-4 "
        onPress={() => router.replace("/(auth)/sign-up")}
      >
        <Text className=" text-md font-JakartaBold">Skip</Text>
      </TouchableOpacity>

      <Swiper
        ref={swiperRef}
        loop={false}
        dot={
          <View className="w-[32px] h-[4px] bg-[#E2E8F0] mx-1 rounded-full" />
        }
        activeDot={
          <View className="w-[32px] h-[4px] bg-[#0286FF] mx-1 rounded-full" />
        }
        onIndexChanged={setActiveIndex}
      >
        {Welcome.map((item) => (
          <View key={item.id} className="justify-center items-center ">
            <Image
              source={item.image}
              className="w-full h-4/6"
              resizeMode="contain"
            />
            <Text className="text-center text-3xl mt-4 font-JakartaBold mx-12">
              {item.title}
            </Text>
            <Text className="text-center text-gray-500 text-lg font-JakartaMedium mx-12 mt-4">
              {item.description}
            </Text>
          </View>
        ))}
      </Swiper>
      <MyButton
        title={isLastSlide ? "Get started" : "Next"}
        onPress={() => {
          isLastSlide
            ? router.replace("/(auth)/sign-up")
            : swiperRef.current?.scrollBy(1);
        }}
        className="w-11/12 mb-7 mt-10"
      />
    </SafeAreaView>
  );
};
export default welcome;
