import Text from "./Text";
import { format, parseISO } from "date-fns";
import { StyleSheet, View } from "react-native";
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    marginTop: 10,
    flexDirection: "row",
    alignItems: "flex-start",
    paddingVertical: 10,
  },
  rating: {
    color: theme.colors.primary,
    fontSize: 16,
    fontWeight: "700",
    alignSelf: "center",
  },
  ratingContainer: {
    margin: 10,
    borderRadius: 50 / 2,
    width: 50,
    height: 50,
    borderColor: theme.colors.primary,
    backgroundColor: "#ffffff",
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  details: {
    flexDirection: "column",
    justifyContent: "space-around",
  },
  textContainer: {
    marginRight: 80,
  },
});

const ReviewItem = ({ review }) => {
  return (
    <View style={styles.container}>
      <View style={styles.ratingContainer}>
        <Text style={styles.rating}>{review.rating}</Text>
      </View>
      <View style={styles.details}>
        <Text style={{ marginVertical: 3 }} fontWeight={"bold"}>
          {review.user.username}
        </Text>
        <Text style={{ marginVertical: 3 }} color={"textSecondary"}>
          {format(parseISO(review.createdAt), "dd.MM.yyyy")}
        </Text>
        <View style={styles.textContainer}>
          <Text>{review.text}</Text>
        </View>
      </View>
    </View>
  );
};

export default ReviewItem;
