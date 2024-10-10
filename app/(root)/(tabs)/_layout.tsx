import { Tabs } from "expo-router";
import { Image, ImageSourcePropType, StyleSheet, View } from "react-native";
import { icons } from "@/constants";

// Define the props interface for TabIcon
interface TabIconProps {
  source: ImageSourcePropType;
  focused: boolean;
}

const TabIcon = ({ source, focused }: TabIconProps) => (
  <View style={[styles.iconContainer, focused && styles.focusedContainer]}>
    <Image
      source={source}
      style={styles.icon}
      resizeMode="contain"
    />
  </View>
);

const Layout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "white",
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon source={icons.home} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="rides"
        options={{
          title: "Rides",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon source={icons.list} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          title: "Chat",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon source={icons.chat} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon source={icons.profile} focused={focused} />
          ),
        }}
      />
    </Tabs>
  );
};

export default Layout;

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: "#333333",
    borderRadius: 50,
    marginHorizontal: 20,
    marginBottom: 20,
    paddingBottom: 0, // for iOS
    overflow: "hidden",
    height: 78,
    position: "absolute",
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  focusedContainer: {
    backgroundColor: "#00A86B", // Change to match your `bg-general-400` color
  },
  icon: {
    width: 28,
    height: 28,
    tintColor: "white",
  },
});
