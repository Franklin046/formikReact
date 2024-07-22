import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const AuthorForm = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{ name: "", birthDate: "", bio: "" }}
      validationSchema={Yup.object({
        name: Yup.string().required("Required"),
        birthDate: Yup.date().required("Required"),
        bio: Yup.string().required("Required"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        onSubmit(values);
        setSubmitting(false);
      }}
    >
      <Form>
        <label htmlFor="name">Name</label>
        <Field name="name" type="text" />
        <ErrorMessage name="name" component="div" />

        <label htmlFor="birthDate">Birth Date</label>
        <Field name="birthDate" type="date" />
        <ErrorMessage name="birthDate" component="div" />

        <label htmlFor="bio">Biography</label>
        <Field name="bio" as="textarea" />
        <ErrorMessage name="bio" component="div" />

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default AuthorForm;
