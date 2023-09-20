import { Formik, Form as FormikForm, Field, ErrorMessage } from "formik";
import { Input, Button, Modal } from "antd";
import { LoginProps } from "../../../helpers/form-interface";
import { loginSchema } from "../../../helpers/validation-schema";
import Registration from "./registration";
import { useState } from "react";
import classes from "./css/auth-item.module.css";

export default function LoginForm({ initialValues, onLogin }: LoginProps) {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(true);
  };

  const exitModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={loginSchema}
        onSubmit={(values) => {
          console.log(values);
          onLogin(values);
        }}
      >
        {() => (
          <div>
            <FormikForm className="space-y-5">
              <div>
                <Field name="username" as={Input} placeholder="Username" className="w-full h-12 border border-gray-800 px-3 rounded-lg" />
                <ErrorMessage name="username" component="div" className={classes.error} />
              </div>
              <div>
                <Field name="password" as={Input} type="password" placeholder="password" className="w-full h-12 border border-gray-800 px-3 rounded-lg" />
                <ErrorMessage name="password" component="div" className={classes.error} />
              </div>
              <Button type="primary" htmlType="submit" className="w-full h-12 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Login
              </Button>
              <div>
                <a onClick={openModal} className="text-blue-500 hover:text-blue-800 text-sm">
                  Don't have account yet? Register here.
                </a>
              </div>
            </FormikForm>
          </div>
        )}
      </Formik>

      <Modal centered open={showModal} onCancel={exitModal} footer={null}>
        <Registration />
      </Modal>
    </>
  );
}
