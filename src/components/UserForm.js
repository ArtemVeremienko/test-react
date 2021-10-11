import axios from 'axios'
import { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { usersEndpoint } from '../constants/endpoints'

export const UserForm = ({
	groups = [],
	onSubmit,
	id,
	submitButtonText = '+ Add',
}) => {
	const [formValues, setFormValues] = useState({
		username: '',
		group_id: '',
	})

	const handleInputChange = (e) => {
		const target = e.target
		const value = target.value
		const name = target.name
		setFormValues((prev) => ({ ...prev, [name]: value }))
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		try {
			const result = id
				? await axios.put(usersEndpoint.update(id), formValues)
				: await axios.post(usersEndpoint.create(), formValues)
			onSubmit(result.data)
		} catch (err) {
			console.error(err)
		}
	}

	return (
		<Form onSubmit={handleSubmit}>
			<Form.Group className='mb-3' controlId='formUsername'>
				<Form.Label>Username:</Form.Label>
				<Form.Control
					name='username'
					value={formValues.username}
					onChange={handleInputChange}
					type='text'
					placeholder='Enter your name'
				/>
			</Form.Group>
			<Form.Group className='mb-3' controlId='formGroupPassword'>
				<Form.Label>Group:</Form.Label>
				<Form.Select
					value={formValues.group_id}
					onChange={handleInputChange}
					name='group_id'
				>
					<option value=''>Select your group</option>
					{groups.map((group) => (
						<option value={group.id} key={group.id}>
							{group.namegroups}
						</option>
					))}
				</Form.Select>
			</Form.Group>
			<Button variant='primary' type='submit'>
				{submitButtonText}
			</Button>
		</Form>
	)
}
