import React from 'react';
import './Modal.css';

interface ModalProps {
	isOpen: boolean;
	onRequestClose: () => void;
	children?: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onRequestClose, children }) => {
	if (!isOpen) return null;
	return (
		<div className='modal-overlay'>
			<div
				className='modal-content'
				onClick={e => e.stopPropagation()}>
				{children}
			</div>
		</div>
	);
};

export default Modal;
