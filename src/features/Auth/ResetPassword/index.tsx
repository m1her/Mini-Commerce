"use client";
import HardRedirect from "@/components/HardRedirect";
import { TextInput } from "@/components/Input";
import { Spinner } from "@/components/Spinner";
import { auth } from "@/Firebase/firebaseConfig";
import { object } from "@/utilities/validation";
import { sendPasswordResetEmail } from "firebase/auth";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, FormEvent, useCallback, useState } from "react";
export const ResetPasswordFeat = ({ isModal }: { isModal: boolean }) => {
  const [resettingData, setResettingData] = useState<{ [k: string]: string }>({
    email: "",
  });
  const [errors, setErrors] = useState<{ [k: string]: string }>({
    email: "",
  });
  const [message, setMessage] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  const validate = useCallback(() => {
    const userSchema = object({
      email: ["string", "required", "email"],
    });
    const result = userSchema.validate(resettingData);
    setErrors(result.errors);
    setTimeout(() => {
      setErrors({
        email: "",
      });
    }, 2000);
    return result.valid;
  }, [resettingData]);

  const resetAction = useCallback(
    (event: FormEvent) => {
      event.preventDefault();
      if (validate()) {
        setIsLoading(true);
        sendPasswordResetEmail(auth, resettingData.email)
          .then(() => {
            setMessage("Email Sent Successfully!");
            setIsLoading(false);
            setTimeout(() => {
              setMessage("");
              isModal ? router.replace("login") : HardRedirect("/login");
            }, 2000);
          })
          .catch((error) => {
            setErrors({ email: "Email didn't found" });
            setIsLoading(false);
            setTimeout(() => {
              setErrors({ email: "" });
            }, 2000);
          });
      }
    },
    [isModal, resettingData.email, router, validate]
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setResettingData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="w-[450px] bg-white py-4 px-8 flex flex-col relative rounded-md">
      <div className="text-gray-800 text-center font-anton font-bold text-xl mb-4">
        RESET PASSWORD
      </div>
      <div className="flex flex-col gap-y-2">
        <form
          className="flex flex-col gap-y-2"
          onSubmit={resetAction}
          noValidate
        >
          <div className="w-full mb-4">
            {message ? (
              <div className="text-lg text-green-400 mt-[30px]">{message}</div>
            ) : (
              <TextInput
                id="login-email"
                name="email"
                type="email"
                label="Email"
                placeholder="e.g., name@example.com"
                onChange={handleChange}
                value={resettingData?.email}
                error={errors?.email}
                errorMsg={errors?.email}
              />
            )}
          </div>
          <button className="text-white font-semibold text-sm h-10 py-2 text-center w-full rounded bg-blue-600 hover:bg-blue-700 transition-colors duration-300">
            {isLoading ? <Spinner /> : "Send"}
          </button>
        </form>
      </div>
    </div>
  );
};
