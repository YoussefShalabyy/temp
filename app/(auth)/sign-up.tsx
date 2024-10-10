import * as React from "react";
import { TextInput, Button, View } from "react-native";
import { useRouter } from "expo-router";
import { Image, ImageBackground, ScrollView, Text } from "react-native";
import { useState } from "react";
import { icons, images } from "@/constants";
import MyTextInput from "@/components/MyTextInput";
import MyButton from "@/components/MyButton";
import OAuth from "@/components/OAuth";
import { fetchAPI } from "@/lib/fetch";

export default function SignUpScreen() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);



  return (
    <View className="flex-1 bg-white">

        <ScrollView className="flex-1 bg-white">
          <View className="flex-1 bg-white">
            <ImageBackground
              source={images.signUpCar}
              className="w-full h-[250]"
            >
              <Text className="text-2xl font-JakartaBold absolute bottom-5 left-5">
                Create your account
              </Text>
            </ImageBackground>
            <View style={{ gap: 20, padding: 20 }}>
              <MyTextInput
                iconLeft={icons.person}
                placeholder={"Enter name"}
                label={"Name"}
                value={name}
                onChangeText={setName}
              />
              <MyTextInput
                label={"Email"}
                iconLeft={icons.email}
                placeholder={"Enter email"}
                autoCapitalize={"none"}
                textContentType={"emailAddress"}
                value={emailAddress}
                onChangeText={setEmailAddress}
              />
              <MyTextInput
                label={"Password"}
                iconLeft={icons.lock}
                iconRight={icons.eyecross}
                iconRightPress={() => {
                  setShowPassword(!showPassword);
                }}
                placeholder={"Enter password"}
                secureTextEntry={!showPassword}
                value={password}
                onChangeText={setPassword}
              />
              <MyButton title="Register" onPress={()=>router.replace("/(root)/(tabs)/home")} />
              <OAuth />
              <Text className="font-JakartaBold text-lg text-[#ADADAD]">
                Already have an account?{" "}
                <Text
                  className="font-JakartaBold text-[#0286FF]"
                  onPress={() => router.push("/(auth)/sign-in")}
                >
                  Log in
                </Text>
              </Text>
            </View>
          </View>
        </ScrollView>
    </View>
  );
}
