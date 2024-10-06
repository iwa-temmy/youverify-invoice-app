import { useState } from "react";
//components
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import AuthLayout from "@/components/layout/auth-layout.tsx";
import { toast } from "sonner";
//formik
import { useFormik } from "formik";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
//utils
import { firebaseApp } from "@/lib/firebase";
import { Dictionary } from "@/types/dictionary";
import { formatErrors } from "@/lib/utils";
import { Link } from "react-router-dom";
import { signupSchema } from "@/lib/schema/authSchema";
const Register = () => {
  const [loading, setLoading] = useState(false);
  const { handleSubmit, values, handleChange, errors } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: signupSchema,
    onSubmit: async (values) => {
      setLoading(true);
      const auth = getAuth(firebaseApp);
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          values?.email,
          values?.password
        );
        setLoading(false);

        // Signed up
        const user = userCredential.user;
        console.log("user", user);
        // You can handle additional logic here (e.g., saving user to a database)
      } catch (error) {
        setLoading(false);
        const errorObject: Dictionary = JSON.parse(JSON.stringify(error));
        // Add more error handling based on the errorCode if needed
        toast.error(
          formatErrors(errorObject?.customData?._tokenResponse?.error?.message)
        );
      }
    },
  });
  return (
    <AuthLayout>
      <form className="w-full flex flex-col gap-5" onSubmit={handleSubmit}>
        <div>
          <h1 className="text-3xl font-semibold text-darkGrey text-left">
            Register
          </h1>
          <p className="text-base font-medium">Please enter your details</p>
        </div>
        <Input
          name="email"
          label="Email"
          type="text"
          placeholder="Enter your email"
          value={values.email}
          onChange={handleChange}
          error={errors?.email}
        />
        <Input
          name="password"
          label="Password"
          type="password"
          placeholder="Password"
          value={values.password}
          error={errors?.password}
          onChange={handleChange}
        />

        <Button
          type="submit"
          className="bg-blue hover:bg-blue/70 text-base font-medium"
          size="lg"
          loading={loading}
        >
          Register
        </Button>
        <p className="text-base font-medium">
          Already have an account? <Link to="/auth/login">Log in</Link>
        </p>
      </form>
    </AuthLayout>
  );
};

export default Register;
