import { useState } from 'react'
import axios from 'axios'
import { Table, Button } from 'react-bootstrap'
import { usersEndpoint } from '../constants/endpoints'
import {ModalForm} from './ModalForm'
import {AddUserForm} from './AddUserForm'

export const UsersTable = ({ columns = [], data, setData, groupsMap }) => {
	const [isShow, setIsShow] = useState(false)

	const handleClose = () => setIsShow(false)

	const handleShow = () => setIsShow(true)

	const handleDelete = async (id) => {
		try {
			await axios.delete(usersEndpoint.delete(id))
			setData(data.filter((record) => record.id !== id))
		} catch (error) {
			console.error(error)
		}
	}

	const handleEdit = async (id) => {
		try {
			const result = await axios.delete(usersEndpoint.update(id))
			setData((prev) =>
				prev.map((item) => (item.id === id ? result.data : item))
			)
		} catch (error) {
			console.error(error)
		}
	}

	return (
		<>
			<Table responsive>
				<thead>
					<tr>
						{columns.map((column, index) => (
							<th key={index}>{column}</th>
						))}
					</tr>
				</thead>
				<tbody>
					{data.map(({ id, username, created, group_id }) => (
						<tr key={id}>
							<td>{id}</td>
							<td>{username}</td>
							<td>{created}</td>
							<td>{groupsMap[group_id]}</td>
							<td>
								<Button
									onClick={handleShow}
									variant='outline-success'
								>
									Edit
								</Button>{' '}
								<Button
									variant='outline-danger'
									onClick={() => handleDelete(id)}
								>
									Delete
								</Button>
							</td>
						</tr>
					))}
				</tbody>
			</Table>
			<ModalForm
				title='Edit user'
				isShow={isShow}
				onClose={handleClose}
				onSubmit={handleEdit}
				bodyComponent={AddUserForm}
			/>
		</>
	)
}
