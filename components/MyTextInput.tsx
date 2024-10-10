import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React from "react";
import { TextInputProps } from "@/types/type";

const MyTextInput = ({
  label,
  placeholder,
  iconLeft,
  iconRight,
  iconRightPress,
  secureTextEntry = false,
  TextInputStyle,
  ...otherprops
}: TextInputProps) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <Pressable onPress={Keyboard.dismiss}>
        <View className="space-y-2 w-full">
          {label && <Text className="font-JakartaBold text-lg">{label}</Text>}

          <View className="w-full rounded-full bg-[#F6F8FA] flex flex-row py-2 px-3 items-center space-x-2">

            {iconLeft && <Image source={iconLeft} className="w-6 h-6" />}

            <TextInput
              placeholder={placeholder}
              placeholderTextColor={"#ADADAD"}
              style={[styles.textInput,TextInputStyle]}
              secureTextEntry={secureTextEntry}
              {...otherprops}
            />

            {iconRight && (
              <Pressable onPress={iconRightPress}>
                <Image source={iconRight} className="w-[20px] h-[20px]" />
              </Pressable>
            )}
          </View>
        </View>
      </Pressable>
    </KeyboardAvoidingView>
  );
};

export default MyTextInput;

const styles = StyleSheet.create({
  textInput: {
    fontFamily: "Jakarta-Medium",
    fontSize: 17,
    flex: 1,
  },
});
