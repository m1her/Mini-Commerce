"use client";
import { GoogleLogin } from "@/components/GoogleLogin";
import { TextInput } from "@/components/Input";
import { Spinner } from "@/components/Spinner";
import { auth } from "@/Firebase/firebaseConfig";
import { object } from "@/utilities/validation";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, FormEvent, useCallback, useState } from "react";

export const LoginFeat = () => {
  const [loginData, setLoginData] = useState<{ [k: string]: string }>({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<{ [k: string]: string }>({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  const validate = useCallback(() => {
    const userSchema = object({
      email: ["string", "required", "email"],
      password: ["string", "required", "min=8"],
    });
    const result = userSchema.validate(loginData);
    setErrors(result.errors);
    setTimeout(() => {
      setErrors({
        email: "",
        password: "",
      });
    }, 2000);
    return result.valid;
  }, [loginData]);

  const loginAction = useCallback(
    (event: FormEvent) => {
      event.preventDefault();
      if (validate()) {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, loginData.email, loginData.password)
          .then(() => {
            setIsLoading(false);
            setTimeout(() => {
              router.push("/");
            }, 2400);
          })
          .catch((err) => {
            setErrors({ email: "Wrong email or password", password: "" });
            setIsLoading(false);
          });
      }
    },
    [loginData.email, loginData.password, router, validate]
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setLoginData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="w-[450px] bg-white py-4 px-8 flex flex-col relative rounded-md">
      <div className="text-gray-800 text-center font-anton font-bold text-xl mb-4">
        LOGIN
      </div>
      <div className="flex flex-col gap-y-2">
        <form className="flex flex-col gap-y-2" onSubmit={loginAction}>
          <div className="w-full mb-2">
            <TextInput
              id="login-email"
              name="email"
              type="email"
              label="Email"
              placeholder="e.g., name@example.com"
              onChange={handleChange}
              value={loginData?.email}
              error={errors?.email}
              errorMsg={errors?.email}
            />
          </div>
          <TextInput
            id="login-password"
            name="password"
            type="password"
            label="Password"
            placeholder="Password (8+ characters)"
            onChange={handleChange}
            value={loginData?.password}
            error={errors?.password}
            errorMsg={errors?.password}
          />
          <div className="w-full flex justify-end">
            <div className="w-fit text-sm text-blue-500 hover:text-blue-700 transition-colors duration-300 cursor-pointer">
              Frogot Password?
            </div>
          </div>
          <button className="text-white font-semibold text-sm h-10 py-2 text-center w-full rounded bg-blue-600 hover:bg-blue-700 transition-colors duration-300">
            {isLoading ? <Spinner /> : "Login"}
          </button>
        </form>
        <hr className="my-2 h-[1.5px] border-t-0 bg-neutral-100" />
        <GoogleLogin />
        <div className="text-sm text-gray-500 text-center w-full">
          Don&apos;t have an account?{" "}
          <span className="w-fit text-sm text-blue-500 hover:text-blue-700 transition-colors duration-300 cursor-pointer">
            Signup
          </span>
        </div>
      </div>
    </div>
  );
};
