import Modal from "@/components/LoginModal";
import { LoginFeat } from "@/features/Auth/Login";
import Link from "next/link";
import React from "react";

export default function Login() {
  return (
    <Modal>
      <LoginFeat isModal={true} />
    </Modal>
  );
}
