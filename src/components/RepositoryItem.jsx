import { View, Text, StyleSheet, Image } from "react-native";
import Statistic from "./Statistic";
import Details from "./Details";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
  statistics: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 5,
    margin: 10,
  },
  details: {
    flexDirection: "row",
  },
});

const RepositoryItem = ({ item }) => {
  return (
    <View style={styles.container} testID="repositoryItem">
      <View style={styles.details}>
        <Image style={styles.avatar} source={{ uri: item.ownerAvatarUrl }} />
        <Details
          name={item.fullName}
          description={item.description}
          language={item.language}
        />
      </View>
      <View style={styles.statistics}>
        <Statistic label={"Stars"} value={item.stargazersCount} />
        <Statistic label={"Forks"} value={item.forksCount} />
        <Statistic label={"Reviews"} value={item.reviewCount} />
        <Statistic label={"Rating"} value={item.ratingAverage} />
      </View>
    </View>
  );
};

export default RepositoryItem;
