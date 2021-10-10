import axios from 'axios'
import { Table, Button } from 'react-bootstrap'
import { usersEndpoint } from '../constants/endpoints'

export const UsersTable = ({ columns = [], data, setData, groupsMap }) => {
	const handleDelete = async (id) => {
		try {
			await axios.delete(usersEndpoint.delete(id))
			setData(data.filter((record) => record.id !== id))
		} catch (error) {
			console.error(error)
		}
	}

	return (
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
							<Button variant='outline-success'>Edit</Button>{' '}
							<Button variant='outline-danger' onClick={() => handleDelete(id)}>
								Delete
							</Button>
						</td>
					</tr>
				))}
			</tbody>
		</Table>
	)
}
