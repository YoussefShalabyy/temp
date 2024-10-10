import {
  ImageBackground,
  ScrollView, // Import this for platform-specific behavior
  Text,
  View,
} from "react-native";
import React, { useCallback, useState } from "react";
import { icons, images } from "@/constants";
import MyTextInput from "@/components/MyTextInput";
import MyButton from "@/components/MyButton";
import { useRouter } from "expo-router";
import OAuth from "@/components/OAuth";

const Signin = () => {
  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();

  const [emailAddress, setEmailAddress] =  useState("");
  const [password, setPassword] =  useState("");
  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-1 bg-white">
        <ImageBackground source={images.signUpCar} className="w-full h-[250]">
          <Text className="text-2xl font-JakartaBold absolute bottom-5 left-5">
            Welcome 👋
          </Text>
        </ImageBackground>
        <View style={{ gap: 15, padding: 20 }}>
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
          <MyButton title="Login" onPress={()=>router.replace("/(root)/(tabs)/home")} />
          <OAuth />
          <Text className="font-JakartaBold text-lg text-[#ADADAD]">
            Don't have an account?{" "}
            <Text
              className="font-JakartaBold text-[#0286FF]"
              onPress={() => router.replace("/(auth)/sign-up")}
            >
              Register
            </Text>
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Signin;
