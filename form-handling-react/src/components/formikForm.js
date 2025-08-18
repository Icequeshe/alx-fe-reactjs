import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const FormikForm = () => {
  const initialValues = {
    username: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email format").required("Email is required"),
    password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    console.log("Formik Data:", values);
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      body: JSON.stringify(values),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => console.log("API Response:", data))
      .catch((err) => console.error(err));
    resetForm();
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white shadow rounded-lg mt-6">
      <h2 className="text-xl font-bold mb-4">User Registration (Formik)</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="space-y-4">
          <div>
            <Field
              type="text"
              name="username"
              placeholder="Username"
              className="w-full border p-2 rounded"
            />
            <ErrorMessage name="username" component="p" className="text-red-500 text-sm" />
          </div>
          <div>
            <Field
              type="email"
              name="email"
              placeholder="Email"
              className="w-full border p-2 rounded"
            />
            <ErrorMessage name="email" component="p" className="text-red-500 text-sm" />
          </div>
          <div>
            <Field
              type="password"
              name="password"
              placeholder="Password"
              className="w-full border p-2 rounded"
            />
            <ErrorMessage name="password" component="p" className="text-red-500 text-sm" />
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700"
          >
            Register
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default FormikForm;
