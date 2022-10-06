import { Text, Pressable, View, StyleSheet } from "react-native";
import { Formik } from "formik";
import FormikTextInput from "./FormikTextInput";
import theme from "../theme";
import * as yup from "yup";

const styles = StyleSheet.create({
  button: {
    color: "white",
    backgroundColor: theme.colors.primary,
    borderRadius: 5,
    paddingVertical: 15,
    margin: 10,
    textAlign: "center",
    fontWeight: "700",
    fontSize: 14,
  },
  languages: {
    flexDirection: "row",
  },
  credentials: {
    backgroundColor: "white",
  },
});

const validationSchema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
});

const initialValues = {
  username: "",
  password: "",
};

const CredentialForm = ({ onSubmit }) => {
  return (
    <View style={styles.credentials}>
      <FormikTextInput name="username" placeholder="Username" />
      <FormikTextInput name="password" placeholder="Password" secureTextEntry />
      <Pressable onPress={onSubmit}>
        <Text style={styles.button}>Sign In</Text>
      </Pressable>
    </View>
  );
};

const SignInForm = () => {
  const onSubmit = (values) => {
    const username = values.username;
    const password = values.password;

    console.log(
      `User tried to sign in with credentials: ${username + " " + password}`
    );
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <CredentialForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignInForm;
