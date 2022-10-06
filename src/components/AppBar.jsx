import { View, StyleSheet, ScrollView, Pressable, Text } from "react-native";
import Constants from "expo-constants";
import theme from "../theme";
import AppBarTab from "./AppBarTab";
import useMe from "../hooks/useMe";
import useAuthStorage from "../hooks/useAuthStorage";
import { useApolloClient } from "@apollo/client";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.navBackground,
    flexDirection: "row",
  },
});

const AppBar = () => {
  const { me } = useMe();
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();

  const signOut = async () => {
    await authStorage.removeAccessToken();
    apolloClient.resetStore();
  };

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab label={"Repositories"} link={"/"} />
        {!me && <AppBarTab label={"Sign in"} link={"/signin"} />}
        {!!me && (
          <Pressable onPress={signOut}>
            <Text style={theme.text}>Sign out</Text>
          </Pressable>
        )}
      </ScrollView>
    </View>
  );
};

export default AppBar;
