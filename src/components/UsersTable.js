import { Table, Button } from 'react-bootstrap'

function UsersTable({ columns = [], data }) {
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
					<tr>
						<td>{id}</td>
						<td>{username}</td>
						<td>{created}</td>
						<td>{group_id}</td>
						<td>
							<Button variant='outline-success'>Edit</Button>{' '}
							<Button variant='outline-danger'>Delete</Button>
						</td>
					</tr>
				))}
			</tbody>
		</Table>
	)
}

export default UsersTable
