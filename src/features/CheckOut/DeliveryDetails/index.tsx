"use client";
import { TextInput } from "@/components/Input";
import { RootState } from "@/Redux/store";
import { object } from "@/utilities/validation";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { ChangeEvent, FormEvent, useCallback, useState } from "react";
import { useSelector } from "react-redux";

export const DeliveryDetails = () => {
  const [checkoutData, setCheckoutData] = useState<{ [k: string]: string }>({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    postcode: "",
    district: "",
    address: "",
  });
  const [errors, setErrors] = useState<{ [k: string]: string }>({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    postcode: "",
    district: "",
    address: "",
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const validate = useCallback(() => {
    const userSchema = object({
      fname: ["string", "required"],
      lname: ["string", "required"],
      email: ["string", "required", "email"],
      phone: ["string", "required", "max=10", "min=10"],
      postcode: ["string", "required"],
      district: ["string", "required"],
      address: ["string", "required"],
    });
    const result = userSchema.validate(checkoutData);
    setErrors(result.errors);
    setTimeout(() => {
      setErrors({
        fname: "",
        lname: "",
        email: "",
        phone: "",
        postcode: "",
        district: "",
        address: "",
      });
    }, 2000);
    return result.valid;
  }, [checkoutData]);

  const checkoutAction = useCallback(
    (event: FormEvent) => {
      event.preventDefault();
      if (validate()) {
        setIsLoading(true);
      }
    },
    [validate]
  );

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { value, name } = e.target;
    setCheckoutData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <div className="p-4 pb-8 w-full h-full flex flex-col gap-y-6 col-span-2 bg-white rounded shadow-[0_0_10px_5px_rgba(0,0,0,0.1)]">
      <div className="font-anton font-semibold text-lg">Delivery Details</div>
      <div className="flex md:flex-row flex-col gap-y-6 items-center justify-between w-full gap-x-4">
        <div className="w-full">
          <TextInput
            id="fname"
            type="text"
            name="fname"
            label="First Name"
            placeholder="Enter Your First Name"
            value={checkoutData.fname}
            onChange={handleChange}
            error={errors.fname}
            errorMsg={errors.fname}
          />
        </div>
        <div className="w-full">
          <TextInput
            id="lname"
            type="text"
            name="lname"
            label="Last Name"
            placeholder="Enter Your Last Name"
            value={checkoutData.lname}
            onChange={handleChange}
            error={errors.lname}
            errorMsg={errors.lname}
          />
        </div>
      </div>
      <div className="flex md:flex-row flex-col gap-y-6 items-center justify-between w-full gap-x-4">
        <div className="w-full">
          <TextInput
            id="cheackout-email"
            type="text"
            name="email"
            label="Email"
            placeholder="e.g., name@example.com"
            value={checkoutData.email}
            onChange={handleChange}
            error={errors.email}
            errorMsg={errors.email}
          />
        </div>
        <div className="w-full flex flex-col relative">
          <label htmlFor="phone-number" className="text-sm">
            Phone Number
          </label>
          <div className="flex items-center">
            <div className="text-sm flex items-center justify-center border border-[#cbcfd6] rounded-l p-2">
              +20
            </div>
            <input
              className="border rounded-r focus:ring focus:ring-blue-200 focus:border-blue-200 p-2 !outline-none text-sm placeholder:text-sm placeholder:font-normal border-[#cbcfd6] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              id="phone-number"
              name="phone"
              type="text"
              maxLength={10}
              placeholder="1112223334"
              value={checkoutData.phone}
              onChange={handleChange}
            />
          </div>
          {errors.phone && (
            <div className="input-error-msg !mt-8">
              <FontAwesomeIcon icon={faCircleXmark} />
              <span className="text-[0.8rem] font-normal">{errors.phone}</span>
            </div>
          )}
        </div>
      </div>
      <div className="flex md:flex-row flex-col gap-y-6 items-center justify-between w-full gap-x-4">
        <div className="w-full flex flex-col relative">
          <label htmlFor="districts" className="text-sm">
            District
          </label>
          <select
            id="district"
            name="district"
            className="border font-anton bg-gray-50 rounded focus:border-blue-200 px-2 py-[9px] !outline-none text-sm placeholder:text-sm placeholder:font-normal border-[#cbcfd6]"
            value={checkoutData.district}
            onChange={handleChange}
          >
            <option value="" disabled selected className="text-gray-200">
              Select Your District...
            </option>
            <option value="Wust_El_Balad">Wust El Balad</option>
            <option value="Zamalek">Zamalek</option>
            <option value="Nasr_City">Nasr City</option>
            <option value="Giza">Giza</option>
            <option value="Heliopolis">Heliopolis</option>
          </select>
          {errors.district && (
            <div className="input-error-msg !mt-8">
              <FontAwesomeIcon icon={faCircleXmark} />
              <span className="text-[0.8rem] font-normal">
                {errors.district}
              </span>
            </div>
          )}
        </div>
        <div className="w-full">
          <TextInput
            id="post-code"
            type="text"
            name="postcode"
            label="Post Code"
            placeholder="Enter Post Code"
            value={checkoutData.postcode}
            onChange={handleChange}
            error={errors.postcode}
            errorMsg={errors.postcode}
          />
        </div>
      </div>
      <div className="w-full">
        <TextInput
          id="address"
          type="text"
          name="address"
          label="Address"
          placeholder="Enter Your Detailed Address"
          value={checkoutData.address}
          onChange={handleChange}
          error={errors.address}
          errorMsg={errors.address}
        />
      </div>
    </div>
  );
};
