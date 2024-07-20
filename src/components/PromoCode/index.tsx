import React, { ChangeEvent, MouseEvent, useCallback, useState } from "react";
import { TextInput } from "../Input";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/Firebase/firebaseConfig";
import { Spinner } from "../Spinner";
import { useDispatch } from "react-redux";
import { ADD_DISCOUNT, REMOVE_DISCOUNT } from "@/Redux/cartSlice";

export const PromoCode = () => {
  const dispatch = useDispatch();
  const [code, setCode] = useState<string>("");
  const [errors, setErrors] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [percentage, setPercentage] = useState<any>(0);

  const applyHandler = useCallback(
    async (event: MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      if (code != "") {
        setIsLoading(true);
        const q = query(collection(db, "promos"), where("id", "==", code));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
          const doc = querySnapshot.docs[0];
          setPercentage(doc.data().percentage);
          dispatch(ADD_DISCOUNT(doc.data().percentage));
          setIsLoading(false);
        } else {
          setErrors("Wrong Code!");
          setIsLoading(false);
          setTimeout(() => {
            setErrors("");
          }, 2000);
        }
      } else {
        setErrors("Enter Code");
        setIsLoading(false);
        setTimeout(() => {
          setErrors("");
        }, 2000);
      }
    },
    [code, dispatch]
  );

  const remoceDiscountHandler = () => {
    dispatch(REMOVE_DISCOUNT());
    setPercentage(0);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setCode(value);
  };

  return (
    <div>
      {percentage ? (
        <>
          <div className="flex items-center justify-between text-neutral-700 font-semibold">
            <div className="text-sm">Discount</div>
            <div>{100 - (percentage * 100)}%</div>
          </div>
          <div
            className="text-sm w-fit text-gray-500 hover:text-red-400 cursor-pointer transition-colors duration-300"
            onClick={remoceDiscountHandler}
          >
            Remove discount
          </div>
        </>
      ) : (
        <>
          <TextInput
            id="promo-code"
            name="promoCode"
            type="text"
            label="Promo Code"
            placeholder="Enter your code"
            labelStyle="mb-3 text-neutral-700 font-semibold"
            value={code}
            onChange={handleChange}
            error={errors}
            errorMsg={errors}
          />
          <div className="w-full mt-4 flex justify-end">
            <button
              className="text-white font-semibold text-sm h-10 py-2 px-4 w-20 text-center rounded bg-red-400 hover:bg-red-600 transition-colors duration-300"
              onClick={applyHandler}
            >
              {isLoading ? <Spinner color="text-red-400" /> : "APPLY"}
            </button>
          </div>
        </>
      )}
    </div>
  );
};
