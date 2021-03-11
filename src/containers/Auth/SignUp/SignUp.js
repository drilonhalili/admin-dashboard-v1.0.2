import React from "react";
import { connect } from "react-redux";
import { Formik, Field } from "formik";
import * as Yup from "yup";

import { FormWrapper, StyledFrom } from "../../../containers/elements";
import Input from "../../../components/UI/Forms/Input/Input";
import Button from "../../../components/UI/Forms/Button/Button";
import Headings from "../../../components/UI/Headings/Headings";

import * as actions from "../../../store/actions";

const SignUpShema = Yup.object().shape({
  firstName: Yup.string()
    .required("Your first name is required.")
    .min(3, "Too short.")
    .max(25, "Too long."),
  lastName: Yup.string()
    .required("Your last name is required.")
    .min(3, "Too short.")
    .max(25, "Too long."),
  email: Yup.string()
    .email("Invalid email.")
    .required("The email is required."),
  password: Yup.string()
    .required("The password is required.")
    .min(8, "The password is too short."),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null, `Password doesn't match`])
    .required("You need to confirm your password."),
});

const SignUp = ({ signUp }) => {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={SignUpShema}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values);
        signUp(values);
        setSubmitting(false);
      }}
    >
      {(isSubmitting, isValid) => (
        <FormWrapper>
          <Headings noMargin size="h1" color="white">
            Sign up for an account
          </Headings>
          <Headings bold size="h4" color="white">
            Fill in your details to register your new account
          </Headings>
          <StyledFrom>
            <Field
              type="text"
              name="firstName"
              placeholder="Your first name..."
              component={Input}
            />
            <Field
              type="text"
              name="lastName"
              placeholder="Your last name..."
              component={Input}
            />
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
            <Field
              type="password"
              name="confirmPassword"
              placeholder="Re-type your password..."
              component={Input}
            />
            <Button disabled={!isValid} type="submit">
              Sign up
            </Button>
          </StyledFrom>
        </FormWrapper>
      )}
    </Formik>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  signUp: actions.signUp,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
