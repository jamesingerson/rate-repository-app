import { FlatList, View, StyleSheet, Pressable } from "react-native";
import RepositoryItem from "./RepositoryItem";
import useRepositories from "../hooks/useRepositories";
import { useNavigate } from "react-router-native";
import { Picker } from "@react-native-picker/picker";
import { useState } from "react";

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositorySorter = ({ selectedSort, setSelectedSort }) => {
  return (
    <Picker
      selectedValue={selectedSort}
      onValueChange={(itemValue, itemIndex) => setSelectedSort(itemValue)}
    >
      <Picker.Item label="Latest Repositories" value="latest" />
      <Picker.Item label="Highest Rated Repositories" value="highest" />
      <Picker.Item label="Lowest Rated Repositories" value="lowest" />
    </Picker>
  );
};

export const RepositoryListContainer = ({
  repositories,
  selectedSort,
  setSelectedSort,
}) => {
  let navigate = useNavigate();

  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  const onPress = (id) => navigate(`/repository/${id}`);

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item, index, separators }) => (
        <Pressable onPress={() => onPress(item.id)}>
          <RepositoryItem key={item.id} item={item} />
        </Pressable>
      )}
      ListHeaderComponent={() => (
        <RepositorySorter
          selectedSort={selectedSort}
          setSelectedSort={setSelectedSort}
        />
      )}
    />
  );
};

const RepositoryList = () => {
  const [selectedSort, setSelectedSort] = useState("latest");
  const { repositories } = useRepositories(selectedSort);

  return (
    <RepositoryListContainer
      repositories={repositories}
      selectedSort={selectedSort}
      setSelectedSort={setSelectedSort}
    />
  );
};

export default RepositoryList;
