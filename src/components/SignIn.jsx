import useSignIn from "../hooks/useSignIn";
import SignInForm from "./SignInForm";
import { useNavigate } from "react-router-native";

const SignIn = () => {
  const [signIn] = useSignIn();
  let navigate = useNavigate();

  const onSubmit = async (values) => {
    const { username, password } = values;
    console.log(username, password);
    try {
      const { authenticate } = await signIn({ username, password });
      console.log(authenticate);
      navigate("/", { replace: true });
    } catch (e) {
      console.log(e);
    }
  };

  return <SignInForm onSubmit={onSubmit} />;
};

export default SignIn;
