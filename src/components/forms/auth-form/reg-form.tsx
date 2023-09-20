import { Input, Button } from "antd";
import { RegistrationProps } from "../../../helpers/form-interface";
import { registerSchema } from "../../../helpers/validation-schema";
import { Formik, Form as FormikForm, Field, ErrorMessage } from "formik";
import classes from "./css/auth-item.module.css";

export default function RegistrationForm({ initialValues, onRegister }: RegistrationProps) {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={registerSchema}
      onSubmit={(values) => {
        console.log(values);
        onRegister(values);
      }}
    >
      {() => (
        <FormikForm>
          <div>
            <Field name="username" as={Input} placeholder="Username" />
            <ErrorMessage name="username" component="div" className={classes.error} />
          </div>
          <div>
            <Field name="email" as={Input} placeholder="Email Address" />
            <ErrorMessage name="email" component="div" className={classes.error} />
          </div>
          <div>
            <Field name="password" as={Input} placeholder="password" />
            <ErrorMessage name="password" component="div" className={classes.error} />
          </div>
          <Button type="primary" htmlType="submit" className="bg-blue-700">
            Register
          </Button>
        </FormikForm>
      )}
    </Formik>
  );
}
