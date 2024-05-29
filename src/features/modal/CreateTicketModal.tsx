import { useEffect } from "react";

type CreateTicketModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const CreateTicketModal: React.FC<CreateTicketModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    //  initialization logic here
    return () => {
      // cleanup logic here
    };
  }, []);

  // modal UI code here

  return (
    <>
      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={onClose}>&times;</span>
            <p>new ticket.</p>
          </div>
        </div>
      )}
    </>
  );
};

export default CreateTicketModal;
