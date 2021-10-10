import axios from 'axios'
import { groupsEndpoint } from '../constants/endpoints'
import { Table, Button } from 'react-bootstrap'

export const GroupsTable = ({ columns = [], data, setData }) => {
	const handleDelete = async (id) => {
		try {
			await axios.delete(groupsEndpoint.delete(id))
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
				{data.map(({ id, namegroups, description }) => (
					<tr key={id}>
						<td>{id}</td>
						<td>{namegroups}</td>
						<td>{description}</td>
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
