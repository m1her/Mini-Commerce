import Modal from "@/components/LoginModal";
import { SignupFeat } from "@/features/Auth/Signup";
import Link from "next/link";
import React from "react";

const Signup = () => {
  return (
    <Modal>
      <SignupFeat isModal={true} />
    </Modal>
  );
};

export default Signup;
