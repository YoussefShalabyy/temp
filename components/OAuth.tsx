import { View, Text, Image } from "react-native";
import React from "react";
import MyButton from "./MyButton";
import { icons } from "@/constants";

const OAuth = () => {
  return (
    <>
      <View className="flex flex-row items-center space-x-4">
        <View className="flex-1 bg-[#ADADAD] h-[2px]" />
        <Text className="font-JakartaBold">Or</Text>
        <View className="flex-1 bg-[#ADADAD] h-[2px]" />
      </View>
      <MyButton
        IconLeft={() => (
          <Image source={icons.google} className="w-[30px] h-[30px] mr-3" />
        )}
        title="Log In with Google"
        bg="outline"
        textColor="primary"
        className="shadow-none"
      />
    </>
  );
};

export default OAuth;
