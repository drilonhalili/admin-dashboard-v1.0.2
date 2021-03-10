import React from "react";
import { Formik, Field } from "formik";
import * as Yup from "yup";

import { FormWrapper, StyledFrom } from "../../../containers/elements";
import Input from "../../../components/UI/Forms/Input/Input";
import Button from "../../../components/UI/Forms/Button/Button";
import Headings from "../../../components/UI/Headings/Headings";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email.").required("The email is required"),
  password: Yup.string()
    .required("The password is required.")
    .min(8, "Too short."),
});

const Login = () => {
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={LoginSchema}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values);
      }}
    >
      {(isSubmitting, isValid) => (
        <FormWrapper>
          <Headings noMargin size="h1" color="white">
            Login into your account
          </Headings>
          <Headings bold size="h4" color="white">
            Fill in your details to login into your account
          </Headings>
          <StyledFrom>
            <Field
              type="email"
              name="email"
              placeholder="Your email..."
              component={Input}
            />
            <Field
              type="password"
              name="password"
              placeholder="Your password..."
              component={Input}
            />
            <Button disabled={!isValid} type="submit">
              Login
            </Button>
          </StyledFrom>
        </FormWrapper>
      )}
    </Formik>
  );
};

export default Login;
