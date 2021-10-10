import { Modal } from 'react-bootstrap'

export const ModalForm = ({
	title,
	isShow,
	bodyComponent: BodyComponent,
	groups,
	onClose,
	onSubmit,
}) => {
	return (
		<>
			<Modal show={isShow} onHide={onClose}>
				<Modal.Header closeButton>
					<Modal.Title>{title}</Modal.Title>
				</Modal.Header>

				{BodyComponent && (
					<Modal.Body>
						<BodyComponent groups={groups} onSubmit={onSubmit} />
					</Modal.Body>
				)}
			</Modal>
		</>
	)
}
