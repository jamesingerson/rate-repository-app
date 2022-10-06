import { useQuery } from "@apollo/client";
import { ME } from "../graphql/queries";

const useMe = () => {
  const { data, error, loading } = useQuery(ME, {
    fetchPolicy: "cache-and-network",
  });
  console.log(data);
  const me = data?.me;
  return { me, error, loading };
};

export default useMe;
