// import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_REPOSITORIES } from "../graphql/queries";

// const useRepositories = () => {
//   const [repositories, setRepositories] = useState();
//   const [loading, setLoading] = useState(false);

//   const fetchRepositories = async () => {
//     setLoading(true);

//     const response = await fetch("http://172.22.17.179:5000/api/repositories");
//     const json = await response.json();

//     setLoading(false);
//     setRepositories(json);
//   };

//   useEffect(() => {
//     fetchRepositories();
//   }, []);

//   return { repositories, loading, refetch: fetchRepositories };
// };

const useRepositories = (selectedSort) => {
  let sortParams;
  switch (selectedSort) {
    case "latest":
      sortParams = { orderBy: "CREATED_AT", orderDirection: "DESC" };
      break;
    case "highest":
      sortParams = { orderBy: "RATING_AVERAGE", orderDirection: "DESC" };
      break;
    case "lowest":
      sortParams = { orderBy: "RATING_AVERAGE", orderDirection: "ASC" };
      break;
    default:
      sortParams = { orderBy: "CREATED_AT", orderDirection: "DESC" };
      break;
  }

  const { data, error, loading } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: "cache-and-network",
    variables: sortParams,
  });
  console.log(data);
  const repositories = data?.repositories;
  return { repositories, error, loading };
};

export default useRepositories;
