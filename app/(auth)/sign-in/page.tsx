"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import React, { useEffect } from "react";
import { signIn } from "@/redux/slices/authSlice";
import axiosInstance from "@/lib/axiosInstance";
import retreiveUserDataFromCookie from "@/lib/retriveUserDataFromCookie";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { FieldValues, useForm } from "react-hook-form";
import { AxiosError } from "axios";
import { TSignInSchema, signInSchema } from "@/lib/authType";
import { Loader } from "lucide-react";

interface ErrorResponseData {
  message: string;
}

const SignIn = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const storedUserData = retreiveUserDataFromCookie();

  // const [username, setUsername] = useState("jidan");
  // const [password, setPassword] = useState("jidan12345");

  // const handleSignIn = async (e: any) => {
  //   e.preventDefault();
  //   try {
  //     const response = await axiosInstance.post("/login", {
  //       username: username,
  //       password: password,
  //     });
  //     dispatch(signIn(response.data));
  //     router.push("/brevet");
  //   } catch (error) {
  //     console.error("Login error:", error);
  //   }
  // };

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<TSignInSchema>({ resolver: zodResolver(signInSchema) });

  const onSubmit = async (data: FieldValues) => {
    try {
      const response = await axiosInstance.post("/login", {
        username: data.username,
        password: data.password,
      });
      console.log(response.data);
      dispatch(signIn(response.data));
      reset();
      router.push("/brevet");
    } catch (error) {
      const err = error as AxiosError<ErrorResponseData>;
      console.log("Login error:", err.response?.data?.message);
    }
  };

  const handleClickGoogle = (e: any) => {
    e.preventDefault();
    router.push(
      "http://be-brevet.vercel.app/api/auth/google?back=http://localhost:3000/brevet"
    );
  };

  if (storedUserData?.email) {
    router.push("/brevet");
  }

  return (
    <div className="md:bg-secondary rounded-lg w-full h-screen flex flex-col items-center justify-center m-auto">
      <div className="bg-[#fff] py-8 px-12">
        <div className="text-center space-y-2 mb-6">
          <h1 className="text-[24px] font-semibold">Sign In</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <Button
          variant={"secondary"}
          className="flex flex-row items-center justify-center space-x-2 w-full"
          onClick={handleClickGoogle}
        >
          <Image src={"/google.svg"} alt="google" width={35} height={35} />
          <p>Sign in with Google</p>
        </Button>
        <Separator className="my-6" />
        <p className="text-center mb-6 text-muted-foreground">Or with Email</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-3">
            <Input
              type="username"
              placeholder="Username"
              {...register("username")}
            />
            {errors.username && (
              <p className="text-red-500">{`${errors.username.message}`}</p>
            )}
            <Input
              type="password"
              placeholder="Password"
              {...register("password")}
            />
            {errors.password && (
              <p className="text-red-500">{`${errors.password.message}`}</p>
            )}
          </div>
          <p className="text-[12px] text-muted-foreground my-3">
            Use 8 or more characters with a mix of letters, numbers & symbols.
          </p>
          <div className="flex items-center mt-4 justify-end">
            <Link href={"/forgot-password"} className="text-[#95A4FC]">
              Forgot Password?
            </Link>
          </div>
          <Button
            className="w-full text-center mt-6 rounded-lg flex flex-row items-center justify-center gap-x-2"
            type="submit"
            variant={"yellowTaxCenter"}
          >
            {isSubmitting ? (
              <>
                <Loader />
                <h1>Loading...</h1>
              </>
            ) : (
              <h1>Sign In</h1>
            )}
          </Button>
          <p className="text-center text-[14px] mt-6">
            Not a member yet?{" "}
            <Link href={"/sign-up"} className="text-[#95A4FC]">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
