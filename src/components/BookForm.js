import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const BookForm = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{ title: "", author: "", isbn: "", publicationDate: "" }}
      validationSchema={Yup.object({
        title: Yup.string().required("Required"),
        author: Yup.string().required("Required"),
        isbn: Yup.string().required("Required"),
        publicationDate: Yup.date().required("Required"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        onSubmit(values);
        setSubmitting(false);
      }}
    >
      <Form>
        <label htmlFor="title">Title</label>
        <Field name="title" type="text" />
        <ErrorMessage name="title" component="div" />

        <label htmlFor="author">Author</label>
        <Field name="author" type="text" />
        <ErrorMessage name="author" component="div" />

        <label htmlFor="isbn">ISBN</label>
        <Field name="isbn" type="text" />
        <ErrorMessage name="isbn" component="div" />

        <label htmlFor="publicationDate">Publication Date</label>
        <Field name="publicationDate" type="date" />
        <ErrorMessage name="publicationDate" component="div" />

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default BookForm;
