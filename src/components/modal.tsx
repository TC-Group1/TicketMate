import React, { FC } from "react";
import { ModalProps } from "../types";

const Modal: FC<ModalProps> = ({ content, handleCancel }) => {
  return (
    <dialog>
      <div
        id="modal-content"
        className="w-50 flex justify-center items-center relative"
      >
        <span
          role="button"
          onClick={handleCancel}
          className="text-black bg-inherit w-12 h-12  absolute top-3 right-0 m-2"
        >
          <p
            className="text-lg  hover:cursor-pointer
          "
          >
            x
          </p>
        </span>
        {content}
      </div>
    </dialog>
  );
};

export default Modal;
