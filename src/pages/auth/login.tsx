import { useState } from "react";
//components
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import AuthLayout from "@/components/layout/auth-layout.tsx";
import { toast } from "sonner";
//formik
import { useFormik } from "formik";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
//utils
import { firebaseApp } from "@/lib/firebase";
import { Dictionary } from "@/types/dictionary";
import { formatErrors } from "@/lib/utils";
import { signinSchema } from "@/lib/schema/authSchema";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const { handleSubmit, values, handleChange, errors } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: signinSchema,
    onSubmit: async (values) => {
      setLoading(true);
      const auth = getAuth(firebaseApp);
      try {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          values?.email,
          values?.password
        );
        setLoading(false);
        const user: Dictionary = userCredential.user;
        sessionStorage.setItem("token", user?.accessToken);
        sessionStorage.setItem("user", JSON.stringify(user));
        toast.success("Sign in successful");
        navigate("/getting-started");
      } catch (error) {
        setLoading(false);
        const errorObject: Dictionary = JSON.parse(JSON.stringify(error));
        console.log("errorObject", errorObject);
        toast.error(formatErrors(errorObject?.code));
      }
    },
  });
  return (
    <AuthLayout>
      <form className="w-full flex flex-col gap-5" onSubmit={handleSubmit}>
        <div>
          <h1 className="text-3xl font-semibold text-darkGrey text-left">
            Sign in
          </h1>
          <p className="text-sm font-medium">
            Enter your credentials to sign in
          </p>
        </div>
        <Input
          name="email"
          label="Email"
          type="text"
          placeholder="Enter your email"
          error={errors?.email}
          value={values.email}
          onChange={handleChange}
        />
        <Input
          name="password"
          label="Password"
          type="password"
          placeholder="Password"
          error={errors?.password}
          value={values.password}
          onChange={handleChange}
        />
        <Button
          type="submit"
          className="bg-blue hover:bg-blue/70 text-base font-medium"
          size="lg"
          loading={loading}
        >
          Sign in
        </Button>
      </form>
    </AuthLayout>
  );
};

export default Login;
