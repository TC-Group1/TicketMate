"use client"

import React, { createContext, useContext, useState, ReactNode } from "react"
import { ModalContext } from "@/types"
import CreateTicketModal from "../../components/modals/CreateTicketModal"

export const ModalContextProp = createContext<ModalContext | null>(null)

export const ModalContextProvider = ({ children }: { children: ReactNode }) => {
	const [isOpen, setIsOpen] = useState<boolean>(false)

	const openModal = () => setIsOpen(true)
	const closeModal = () => setIsOpen(false)

	const modalProps = {
		isOpen,
		openModal,
		closeModal,
	}

	return (
		<ModalContextProp.Provider value={modalProps}>
			{isOpen && <CreateTicketModal isOpen={isOpen} onClose={closeModal} />} 
			{children}
		</ModalContextProp.Provider>
	)
}

export function useModalContext() {
	const context = useContext(ModalContextProp)
	if (!context) {
		throw new Error("useModal must be used within a ModalContextProvider")
	}
	return context
}
