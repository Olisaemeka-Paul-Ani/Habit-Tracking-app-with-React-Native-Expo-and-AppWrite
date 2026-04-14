import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { Redirect, Tabs } from "expo-router";

export default function Layout() {
  const isAuth = false;

  if (!isAuth) {
    return <Redirect href="/auth" />;
  }

  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "coral" }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) =>
            focused ? <FontAwesome5 name="home" size={24} color={color} /> : <AntDesign name="home" size={24} color={color} />,
        }}
      />
      <Tabs.Screen name="login" options={{ title: "Login" }} />
    </Tabs>
  );
}