"use client";

import Heading from "../components/Heading";
import Input from "../components/inputs/inputs";
import { useEffect, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Button from "../components/Button";
import { AiOutlineGoogle } from "react-icons/ai";
import Link from "next/link";
import { signIn } from "next-auth/react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { SafeUser } from "@/types";
interface LoginFormProps {
  currentUser:SafeUser | null;
}
const LoginForm:React.FC<LoginFormProps> = ({currentUser}) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    signIn("credentials", {
      ...data,
      redirect: false,
    }).then((callback) => {
      setIsLoading(false);

      if (callback?.ok) {
        router.push("/cart");
        router.refresh();
        toast.success("Logged in seccessfully");
      }

      if (callback?.error) {
        toast.error(callback.error);
      }
      
    })
  };
  useEffect(() => {
    if (currentUser) {
      router.push("/cart");
      router.refresh();
    }
  },[])

  if (currentUser) { 
    return <p className="text-center">Logged In Redirecting....</p>
  }
  return (
    <>
      <Heading title="SignIn" />
      <Button
        label="Continue with Google"
        outline
        icon={AiOutlineGoogle}
        onClick={() => {
          signIn("google")
        }}
      />
      <hr className="bg-slate-300 w-full h-px" />

      <Input
        id="email"
        label="Email"
        type="text"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="password"
        label="Password"
        type="password"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Button
        label={isLoading ? "Loading" : "Login"}
        onClick={handleSubmit(onSubmit)}
      />
      <p className="text-sm hover:opacity-95">
        Do not have an account?{" "}
        <Link className="underline" href="/register">
          SignUp
        </Link>
      </p>
    </>
  );
};

export default LoginForm;
