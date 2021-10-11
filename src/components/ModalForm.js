import { Modal } from 'react-bootstrap'

export const ModalForm = ({
	isShow = false,
	title ,
	bodyComponent,
	onClose,
}) => {
	return (
		<>
			<Modal show={isShow} onHide={onClose}>
				<Modal.Header closeButton>
					<Modal.Title>{title}</Modal.Title>
				</Modal.Header>

				{bodyComponent && <Modal.Body>{bodyComponent}</Modal.Body>}
			</Modal>
		</>
	)
}
