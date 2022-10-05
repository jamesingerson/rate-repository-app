import Text from "./Text";
import { StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    marginBottom: 10,
  },
});

const abbreviateValue = (value) => {
  return value >= 1000 ? (value / 1000).toFixed(1) + "k" : value;
};

const Statistic = ({ label, value }) => {
  return (
    <View style={styles.container}>
      <Text fontWeight={"bold"}>{abbreviateValue(value)}</Text>
      <Text color={"textSecondary"}>{label}</Text>
    </View>
  );
};

export default Statistic;
