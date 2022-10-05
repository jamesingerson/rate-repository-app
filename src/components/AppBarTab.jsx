import { Pressable, StyleSheet, Text } from "react-native";

const styles = StyleSheet.create({
  text: {
    color: "#FFFFFF",
    fontWeight: "700",
    fontSize: 16,
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
});

const AppBarTab = ({ label }) => {
  return (
    <Pressable>
      <Text style={styles.text}>{label}</Text>
    </Pressable>
  );
};

export default AppBarTab;
