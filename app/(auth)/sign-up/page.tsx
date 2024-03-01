"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { TSignUpSchema, signUpSchema } from "@/lib/authType";
import axiosInstance from "@/lib/axiosInstance";
import retreiveUserDataFromCookie from "@/lib/retriveUserDataFromCookie";
import { signUp } from "@/redux/slices/authSlice";
import { zodResolver } from "@hookform/resolvers/zod";
import { AxiosError } from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

interface ErrorResponseData {
  message: string;
}

const SignUp = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const storedUserData = retreiveUserDataFromCookie();

  // const [fullName, setFullName] = useState("zidan indratama");
  // const [username, setUsername] = useState("zidanindratama");
  // const [email, setEmail] = useState("zidanindratama31@gmail.com");
  // const [password, setPassword] = useState("zidan12345");
  // const [confirmPassword, setConfirmPassword] = useState("zidan12345");

  // const handleSubmitRegister = async (e: any) => {
  //   e.preventDefault();
  //   try {
  //     const response = await axiosInstance.post("/register", {
  //       fullname: fullName,
  //       username,
  //       email,
  //       password,
  //       confirmPassword,
  //     });
  //     dispatch(signUp(response.data));
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
  } = useForm<TSignUpSchema>({ resolver: zodResolver(signUpSchema) });

  const onSubmit = async (data: FieldValues) => {
    try {
      const response = await axiosInstance.post("/register", {
        fullname: data.fullName,
        username: data.username,
        email: data.email,
        password: data.password,
        confirmPassword: data.confirmPassword,
      });
      dispatch(signUp(response.data));
      reset();
      router.push("/brevet");
    } catch (error) {
      const err = error as AxiosError<ErrorResponseData>;
      console.log("Login error:", err.response?.data?.message);
    }
  };

  if (storedUserData?.email) {
    router.push("/brevet");
  }

  return (
    <div className="md:bg-secondary rounded-lg w-full h-screen flex flex-col items-center justify-center m-auto">
      <div className="bg-[#fff] py-8 px-12">
        <div className="text-center space-y-2 mb-6">
          <h1 className="text-[24px] font-semibold">Sign Up</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <Button
          variant={"secondary"}
          className="flex flex-row items-center justify-center space-x-2 w-full"
        >
          <Image src={"/google.svg"} alt="google" width={35} height={35} />
          <p>Sign up with Google</p>
        </Button>
        <Separator className="my-6" />
        <p className="text-center mb-6 text-muted-foreground">Or with Email</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-3">
            <Input
              type="fullName"
              placeholder="Full Name"
              {...register("fullName")}
            />
            {errors.fullName && (
              <p className="text-red-500">{`${errors.fullName.message}`}</p>
            )}
            <Input
              type="text"
              placeholder="Username"
              {...register("username")}
            />
            {errors.username && (
              <p className="text-red-500">{`${errors.username.message}`}</p>
            )}
            <Input type="email" placeholder="Email" {...register("email")} />
            {errors.email && (
              <p className="text-red-500">{`${errors.email.message}`}</p>
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
            Use 5 or more characters with a mix of letters, numbers & symbols.
          </p>
          <Input
            type="password"
            placeholder="Repeat Password"
            {...register("confirmPassword")}
          />
          {errors.confirmPassword && (
            <p className="text-red-500 mt-3">{`${errors.confirmPassword.message}`}</p>
          )}
          <Button
            className="w-full text-center mt-6 rounded-lg"
            variant={"yellowTaxCenter"}
            type="submit"
          >
            Sign Up
          </Button>
          <p className="text-center text-[14px] mt-6">
            Already have an Account?{" "}
            <Link href={"/sign-in"} className="text-[#95A4FC]">
              Sign In
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
