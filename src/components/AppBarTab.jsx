import { Pressable, StyleSheet, Text } from "react-native";
import { Link } from "react-router-native";

const styles = StyleSheet.create({
  text: {
    color: "#FFFFFF",
    fontWeight: "700",
    fontSize: 16,
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
});

const AppBarTab = ({ label, link }) => {
  return (
    <Pressable>
      <Link to={link}>
        <Text style={styles.text}>{label}</Text>
      </Link>
    </Pressable>
  );
};

export default AppBarTab;
