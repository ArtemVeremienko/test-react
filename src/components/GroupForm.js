import { useState } from 'react'
import axios from 'axios'
import { groupsEndpoint } from '../constants/endpoints'
import { Form, Button } from 'react-bootstrap'

export const GroupForm = ({ onSubmit, id, submitButtonText = '+ Add' }) => {
	const [formValues, setFormValues] = useState({
		namegroups: '',
		description: '',
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
				? await axios.put(groupsEndpoint.update(id), formValues)
				: await axios.post(groupsEndpoint.create(), formValues)
			onSubmit(result.data)
		} catch (err) {
			console.error(err)
		}
	}

	return (
		<Form onSubmit={handleSubmit}>
			<Form.Group className='mb-3' controlId='formUsername'>
				<Form.Label>Group name:</Form.Label>
				<Form.Control
					name='namegroups'
					value={formValues.namegroups}
					onChange={handleInputChange}
					type='text'
					placeholder='Enter your group name'
				/>
			</Form.Group>
			<Form.Group className='mb-3' controlId='formUsername'>
				<Form.Label>Description:</Form.Label>
				<Form.Control
					name='description'
					value={formValues.description}
					onChange={handleInputChange}
					type='text'
					placeholder='Enter your group description'
				/>
			</Form.Group>
			<Button variant='primary' type='submit'>
				{submitButtonText}
			</Button>
		</Form>
	)
}
