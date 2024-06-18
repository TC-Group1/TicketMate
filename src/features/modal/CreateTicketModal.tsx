import { FC, useEffect } from 'react';

interface CreateTicketModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CreateTicketModal: FC<CreateTicketModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-4 rounded shadow-lg">
        <button onClick={onClose} className="float-right text-xl font-bold">&times;</button>
        <h2 className="text-2xl mb-4">Create New Ticket</h2>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Title</label>
            <input type="text" className="w-full p-2 border border-gray-300 rounded" />
          </div>
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default CreateTicketModal;