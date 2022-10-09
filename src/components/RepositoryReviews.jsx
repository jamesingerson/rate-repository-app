import Text from "./Text";
import { useParams } from "react-router-native";
import useRepository from "../hooks/useRepository";
import RepositoryItem from "./RepositoryItem";
import { FlatList, View } from "react-native";
import ReviewItem from "../components/ReviewItem";
import theme from "../theme";

const ItemSeparator = () => <View style={theme.separator} />;

const RepositoryReviews = () => {
  const { id } = useParams();
  const { repository } = useRepository(id);

  if (!repository) return <Text>Loading Repository...</Text>;

  // Get the nodes from the edges array
  const reviews = repository.reviews
    ? repository.reviews.edges.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      data={reviews}
      renderItem={({ item }) => <ReviewItem key={item.id} review={item} />}
      keyExtractor={({ id }) => id}
      ItemSeparatorComponent={ItemSeparator}
      ListHeaderComponent={() => (
        <RepositoryItem item={repository} showUrlButton={true} />
      )}
    />
  );
};

export default RepositoryReviews;
