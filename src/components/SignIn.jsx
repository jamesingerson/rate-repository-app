import useSignIn from "../hooks/useSignIn";
import SignInForm from "./SignInForm";

const SignIn = () => {
  const [signIn] = useSignIn();

  const onSubmit = async (values) => {
    const { username, password } = values;
    console.log(username, password);
    try {
      const { authenticate } = await signIn({ username, password });
      console.log(authenticate);
    } catch (e) {
      console.log(e);
    }
  };

  return <SignInForm onSubmit={onSubmit} />;
};

export default SignIn;
