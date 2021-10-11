import axios from 'axios'
import { groupsEndpoint } from '../constants/endpoints'
import { Table, Button } from 'react-bootstrap'
import { GroupForm } from './GroupForm'

export const GroupsTable = ({ columns = [], data, setData, setModal }) => {
	const handleDelete = async (id) => {
		try {
			await axios.delete(groupsEndpoint.delete(id))
			setData(data.filter((record) => record.id !== id))
		} catch (error) {
			console.error(error)
		}
	}

	const handleModalSubmit = (newData) => {
		console.log(newData)
		setData((prev) =>
			prev.map((item) => (item.id === newData.id ? newData : item))
		)
		setModal({isShow: false})
	}

	const handleEdit = (id) =>
		setModal({
			isShow: true,
			title: 'Edit your group',
			bodyComponent: (
				<GroupForm
					id={id}
					submitButtonText='Save user'
					onSubmit={handleModalSubmit}
				/>
			),
			id,
		})

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
							<Button
								variant='outline-success'
								onClick={() => handleEdit(id)}
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
	)
}
