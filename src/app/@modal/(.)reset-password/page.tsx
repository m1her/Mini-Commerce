import Modal from "@/components/LoginModal";
import { ResetPasswordFeat } from "@/features/Auth/ResetPassword";
import React from "react";

const ResetPass = () => {
  return (
    <Modal>
      <ResetPasswordFeat isModal={true} />
    </Modal>
  );
};

export default ResetPass;
