import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "./NewsLetter.module.css";

const EmailSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
});

type NewsLetterFormProps = {};

const NewsLetterForm: React.FC<NewsLetterFormProps> = () => {
  const initialValues = {
    email: "",
  };

  const validate = (values) => {
    let errors = {email: ''};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!regex.test(values.email)) {
      errors.email = "Invalid Email";
    }
    return errors;
  };

  const submitForm = (values) => {
    console.log("Values: ", values);
  };
  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={submitForm}
    >
      {(formik) => {
        const {
          values,
          handleChange,
          handleSubmit,
          errors,
          touched,
          handleBlur,
          isValid,
          dirty,
        } = formik;
        return (
          <form className={styles["form"]} onSubmit={handleSubmit}>
            <label className={styles["subtitle"]} htmlFor="email">
              Notify Me When It's Ready
            </label>
            <div className={styles["inner-form"]}>
              <div className={styles["email-form"]}>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your email"
                  onChange={handleChange}
                  value={values.email}
                ></input>
                {errors.email !== '' && touched.email ? <span className={styles['error']}>Email address is required</span> : null}
              </div>
              <button type="submit">Subscribe</button>
            </div>
          </form>
        );
      }}
    </Formik>
  );
};

export default NewsLetterForm;
