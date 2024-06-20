import React, { useEffect, useContext, useState } from "react"


interface CreateTicketModalProps {
	onClose: () => void,
	isOpen: boolean
}

const CreateTicketModal: React.FC<CreateTicketModalProps> = ({ onClose, isOpen }) => {
	
	const [open, setOpen] = useState(false)
	
	useEffect(() => {
		const dialog = document.getElementById(
			"create-ticket-dialog"
		) as HTMLDialogElement
		if (dialog) {
			if (isOpen) {
				dialog.showModal()
			} else {
				dialog.close()
			}
		}
	}, [isOpen])

	return (
		<dialog id="create-ticket-dialog" onClose={onClose}>
			<div className="bg-white p-4 rounded shadow-lg">
				<button onClick={onClose} className="float-right text-xl font-bold">
					&times;
				</button>
				<h2 className="text-2xl mb-4">Create New Ticket</h2>
				<form>
					<div className="mb-4">
						<label className="block text-sm font-bold mb-2">Title</label>
						<input
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
		</dialog>
	)
}

export default CreateTicketModal
