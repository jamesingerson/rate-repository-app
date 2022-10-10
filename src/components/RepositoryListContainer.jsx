import { FlatList, View, StyleSheet, Pressable } from "react-native";
import RepositoryItem from "./RepositoryItem";
import useRepositories from "../hooks/useRepositories";
import { useNavigate } from "react-router-native";
import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import { Searchbar } from "react-native-paper";
import { useDebounce } from "use-debounce";
import React from "react";

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositorySorter = ({
  selectedSort,
  setSelectedSort,
  searchQuery,
  onChangeSearch,
}) => {
  return (
    <>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
      <Picker
        selectedValue={selectedSort}
        onValueChange={(itemValue, itemIndex) => setSelectedSort(itemValue)}
      >
        <Picker.Item label="Latest Repositories" value="latest" />
        <Picker.Item label="Highest Rated Repositories" value="highest" />
        <Picker.Item label="Lowest Rated Repositories" value="lowest" />
      </Picker>
    </>
  );
};

// export const RepositoryListContainer = ({
//   repositories,
//   selectedSort,
//   setSelectedSort,
//   searchQuery,
//   onChangeSearch,
// }) => {
//   let navigate = useNavigate();

//   const repositoryNodes = repositories
//     ? repositories.edges.map((edge) => edge.node)
//     : [];

//   const onPress = (id) => navigate(`/repository/${id}`);

//   return (
//     <FlatList
//       data={repositoryNodes}
//       ItemSeparatorComponent={ItemSeparator}
//       renderItem={({ item, index, separators }) => (
//         <Pressable onPress={() => onPress(item.id)}>
//           <RepositoryItem key={item.id} item={item} />
//         </Pressable>
//       )}
//       ListHeaderComponent={() => (
//         <RepositorySorter
//           selectedSort={selectedSort}
//           setSelectedSort={setSelectedSort}
//           searchQuery={searchQuery}
//           onChangeSearch={onChangeSearch}
//         />
//       )}
//     />
//   );
// };

export class RepositoryListContainer extends React.Component {
  renderHeader = () => {
    const { selectedSort, setSelectedSort, searchQuery, onChangeSearch } =
      this.props;

    return (
      <RepositorySorter
        selectedSort={selectedSort}
        setSelectedSort={setSelectedSort}
        searchQuery={searchQuery}
        onChangeSearch={onChangeSearch}
      />
    );
  };

  render() {
    const { repositories, onPress } = this.props;

    const repositoryNodes = repositories
      ? repositories.edges.map((edge) => edge.node)
      : [];

    return (
      <FlatList
        data={repositoryNodes}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={({ item, index, separators }) => (
          <Pressable onPress={() => onPress(item.id)}>
            <RepositoryItem key={item.id} item={item} />
          </Pressable>
        )}
        ListHeaderComponent={this.renderHeader}
      />
    );
  }
}

const RepositoryList = () => {
  const [selectedSort, setSelectedSort] = useState("latest");
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedSearch] = useDebounce(searchQuery, 500, { maxWait: 500 });
  const { repositories } = useRepositories(selectedSort, debouncedSearch);
  const onChangeSearch = (query) => setSearchQuery(query);
  let navigate = useNavigate();
  const onPress = (id) => navigate(`/repository/${id}`);

  return (
    <RepositoryListContainer
      repositories={repositories}
      selectedSort={selectedSort}
      setSelectedSort={setSelectedSort}
      searchQuery={searchQuery}
      onChangeSearch={onChangeSearch}
      onPress={onPress}
    />
  );
};

export default RepositoryList;
