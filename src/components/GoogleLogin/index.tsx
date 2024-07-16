import { auth, db } from "@/Firebase/firebaseConfig";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import React from "react";

export const GoogleLogin = () => {
  const router = useRouter();
  const provider = new GoogleAuthProvider();

  const googleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((loggedUser) => {
        const docRef = doc(db, loggedUser.user.email || "", "empty");
        setDoc(docRef, {});
      })
      .then(() => router.back())
      .catch((err) => console.log(err));
  };

  return (
    <button
      type="submit"
      className="text-white font-semibold text-sm py-2 text-center w-full rounded bg-blue-600 hover:bg-blue-700 transition-colors duration-300"
      onClick={googleSignIn}
    >
      Continue With Google
    </button>
  );
};
