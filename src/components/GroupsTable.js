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
				{data.map(({ id, namegroups, description }) => (
					<tr>
						<td>{id}</td>
						<td>{namegroups}</td>
						<td>{description}</td>
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
