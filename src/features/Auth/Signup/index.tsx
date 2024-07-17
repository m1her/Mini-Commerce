"use client";
import { GoogleLogin } from "@/components/GoogleLogin";
import HardRedirect from "@/components/HardRedirect";
import { TextInput } from "@/components/Input";
import { Spinner } from "@/components/Spinner";
import { auth } from "@/Firebase/firebaseConfig";
import { object } from "@/utilities/validation";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, FormEvent, useCallback, useState } from "react";

export const SignupFeat = ({ isModal }: { isModal: boolean }) => {
  const [signupData, setSignupData] = useState<{ [k: string]: string }>({
    email: "",
    password: "",
    confirm_password: "",
  });
  const [errors, setErrors] = useState<{ [k: string]: string }>({
    email: "",
    password: "",
    confirm_password: "",
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  const validate = useCallback(() => {
    const userSchema = object({
      email: ["string", "required", "email"],
      password: ["string", "required", "min=8"],
      confirm_password: ["string", "required", "confirm_password"],
    });
    const result = userSchema.validate(signupData);
    setErrors(result.errors);
    setTimeout(() => {
      setErrors({
        email: "",
        password: "",
        confirm_password: "",
      });
    }, 2000);
    return result.valid;
  }, [signupData]);

  const signupAction = useCallback(
    (event: FormEvent) => {
      event.preventDefault();
      if (validate()) {
        setIsLoading(true);
        createUserWithEmailAndPassword(
          auth,
          signupData.email,
          signupData.password
        )
          .then(() => {
            setIsLoading(false);
            setTimeout(() => {
              isModal ? router.replace("/login") : HardRedirect("/login");
            }, 2400);
          })
          .catch((err) => {
            setErrors({ email: "Wrong email or password", password: "" });
            setIsLoading(false);
          });
      }
    },
    [signupData.email, signupData.password, router, validate]
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setSignupData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="w-[450px] bg-white py-4 px-8 flex flex-col relative rounded-md">
      <div className="text-gray-800 text-center font-anton font-bold text-xl mb-4">
        CREATE NEW ACCOUNT
      </div>
      <div className="flex flex-col gap-y-2">
        <form
          className="flex flex-col gap-y-2"
          onSubmit={signupAction}
          noValidate
        >
          <div className="w-full mb-2">
            <TextInput
              id="signup-email"
              name="email"
              type="email"
              label="Email"
              placeholder="e.g., name@example.com"
              onChange={handleChange}
              value={signupData?.email}
              error={errors?.email}
              errorMsg={errors?.email}
            />
          </div>
          <div className="w-full mb-2">
            <TextInput
              id="signup-password"
              name="password"
              type="password"
              label="Password"
              placeholder="Password (8+ characters)"
              onChange={handleChange}
              value={signupData?.password}
              error={errors?.password}
              errorMsg={errors?.password}
            />
          </div>
          <div className="w-full mb-4">
            <TextInput
              id="signup-confirm-password"
              name="confirm_password"
              type="password"
              label="Confirm Password"
              placeholder="Retype your password"
              onChange={handleChange}
              value={signupData?.confirm_password}
              error={errors?.confirm_password}
              errorMsg={errors?.confirm_password}
            />
          </div>
          <button className="text-white font-semibold text-sm h-10 py-2 text-center w-full rounded bg-blue-600 hover:bg-blue-700 transition-colors duration-300">
            {isLoading ? <Spinner /> : "Create"}
          </button>
        </form>
        <hr className="my-2 h-[1.5px] border-t-0 bg-neutral-100" />
        <GoogleLogin />
        <div className="text-sm text-gray-500 text-center w-full">
          Already have an account?{" "}
          {isModal ? (
            <span
              className="w-fit text-sm text-blue-500 hover:text-blue-700 transition-colors duration-300 cursor-pointer"
              onClick={() => router.replace("/login")}
            >
              Login
            </span>
          ) : (
            <span
              className="w-fit text-sm text-blue-500 hover:text-blue-700 transition-colors duration-300 cursor-pointer"
              onClick={() => HardRedirect("/login")}
            >
              Login
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
