import { Formik, Form as FormikForm, Field, ErrorMessage } from "formik";
import { Input, Button } from "antd";
import { LoginProps } from "../../../helpers/form-interface";
import { loginSchema } from "../../../helpers/validation-schema";

export default function LoginForm({ initialValues, onLogin }: LoginProps) {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={loginSchema}
      onSubmit={(values) => {
        console.log(values);
        onLogin(values);
      }}
    >
      {() => (
        <FormikForm>
          <div>
            <Field name="username" as={Input} placeholder="Username" />
            <ErrorMessage name="username" component="div" className="" />
          </div>
          <div>
            <Field name="password" as={Input} placeholder="password" />
            <ErrorMessage name="password" component="div" className="" />
          </div>
          <Button type="primary" htmlType="submit" className="bg-blue-700">
            Login
          </Button>
        </FormikForm>
      )}
    </Formik>
  );
}
