"use client"
import Modal from "@/components/Modal";
import React, { useState } from "react";

export default function Login() {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <Modal isOpen={modalOpen} onClose={closeModal}>
      <p className="text-gray-700">Looooogin</p>
    </Modal>
  );
}
