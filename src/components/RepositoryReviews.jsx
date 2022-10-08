import Text from "./Text";
import { useParams } from "react-router-native";
import useRepository from "../hooks/useRepository";
import RepositoryItem from "./RepositoryItem";

const RepositoryReviews = () => {
  const { id } = useParams();
  const { repository } = useRepository(id);

  if (!repository) return <Text>Loading Repository...</Text>;

  return <RepositoryItem item={repository} showUrlButton={true} />;
};

export default RepositoryReviews;
