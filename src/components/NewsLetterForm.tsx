import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import emailjs from "emailjs-com";
import env from "react-dotenv";
import styles from "./NewsLetter.module.css";

const SubscribeSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
});

type NewsLetterFormProps = {};

const NewsLetterForm: React.FC<NewsLetterFormProps> = () => {
  const initialValues = { email: "" };
  const [isSubscribe, setIsSubscribe] = useState(false);

  return (
    <>
      {isSubscribe ? (
        <div className={styles["news-letter"]}>
          <label className={styles["subtitle"]} htmlFor="email">
            Thank you! We will contact you once we launch the website!
          </label>
        </div>
      ) : (
        <Formik
          initialValues={initialValues}
          validationSchema={SubscribeSchema}
          onSubmit={async ({ email }) => {
            console.log("Form is validated! Submiting the form...", email);
            // send email
            try {
              const result = await emailjs.send(
                env.SERVICE,
                env.TEMPLATE_ID,
                { email: email },
                env.USER_ID
              );
              if (result.status === 200) {
                // hide horm and show message
                setIsSubscribe(true);
              }
            } catch (error) {
              console.log("error: ", error);
            }
          }}
        >
          {(formik) => {
            const { values, handleChange, errors, touched, isSubmitting } =
              formik;
            return (
              <Form className={styles["news-letter"]}>
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
                    {touched.email && errors.email ? (
                      <span className={styles["error"]}>
                        Email address is required
                      </span>
                    ) : null}
                  </div>
                  <button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Please wait..." : "Subscribe"}
                  </button>
                </div>
              </Form>
            );
          }}
        </Formik>
      )}
    </>
  );
};

export default NewsLetterForm;
