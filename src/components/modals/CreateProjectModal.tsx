import { FC, Dispatch, SetStateAction, FormEvent } from "react";
import Modal from "./modal";

interface Props {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const CreateProjectModal: FC<Props> = ({ isOpen, setIsOpen }) => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // TODO: add create project api call here
    setIsOpen(false);
  };

  return (
    <Modal {...{ isOpen, setIsOpen }} closeButton>
      <div className="bg-white p-4 rounded shadow-lg">
        <h2 className="text-2xl mb-4">Create New Project</h2>
        <form onSubmit={(event) => handleSubmit(event)}>
          <div className="mb-4">
            <label className="text-sm font-bold mb-2" htmlFor="name">
              Project Name
            </label>
            <input
              id="name"
              type="text"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          {/*↓↓ placeholder for functioning Team Member selection ↓↓*/}
          <div className="mb-4">
            <label className="text-sm font-bold mb-2" htmlFor="members">
              Team Members
            </label>
            <input
              id="members"
              type="text"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded"
          >
            Submit
          </button>
        </form>
      </div>
    </Modal>
  );
};

export default CreateProjectModal;
