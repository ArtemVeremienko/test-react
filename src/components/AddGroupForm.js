import { Form, Button } from 'react-bootstrap'

export const AddUserForm = ({ groups, onSuccessSubmit }) => {
	const handleSubmit = (e) => {
		e.preventDefault()
		console.log('submit')
		onSuccessSubmit()
	}

	return (
		<Form onSubmit={handleSubmit}>
			<Form.Group className='mb-3' controlId='formUsername'>
				<Form.Label>Username:</Form.Label>
				<Form.Control type='text' placeholder='Enter your name' />
			</Form.Group>
			<Form.Group className='mb-3' controlId='formGroupPassword'>
				<Form.Label>Group:</Form.Label>
				<Form.Select>
					<option>Select your group</option>
					{groups.map((group) => (
						<option value={group.id}>{group.namegroups}</option>
					))}
				</Form.Select>
			</Form.Group>
			<Button variant='primary' type='submit'>
				Add
			</Button>
		</Form>
	)
}
