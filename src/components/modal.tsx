"use client";

import React, { FC } from "react";
import { ModalContext } from "../types";
import { useModal } from "@/features/modal/ModalContextProvider";

const Modal: FC<ModalContext> = ({ form }) => {
  const { closeModal } = useModal();

  return (
    <dialog>
      <div
        id="modal-content"
        className="w-50 flex justify-center items-center relative"
      >
        <span
          role="button"
          onClick={closeModal}
          className="text-black bg-inherit w-12 h-12  absolute top-3 right-0 m-2"
        >
          <p
            className="text-lg  hover:cursor-pointer
          "
          >
            x
          </p>
        </span>
        {form}
      </div>
    </dialog>
  );
};

export default Modal;
