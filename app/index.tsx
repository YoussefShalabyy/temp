import { useFetch } from "@/lib/fetch";
import { Redirect } from "expo-router";

const Home = () => {

  //if signed in router.replace(home)
  return <Redirect href="/(auth)/welcome" />;
};

export default Home;
