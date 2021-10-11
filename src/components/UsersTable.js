import { useMemo } from 'react'
import axios from 'axios'
import { Table, Button } from 'react-bootstrap'
import { usersEndpoint } from '../constants/endpoints'
import { UserForm } from './UserForm'

export const UsersTable = ({
	columns = [],
	data,
	setData,
	groups,
	setModal,
}) => {
	const groupsMap = useMemo(
		() =>
			groups.reduce(
				(acc, group) => ({ ...acc, [group.id]: group.namegroups }),
				{}
			),
		[groups]
	)

	const handleDelete = async (id) => {
		try {
			await axios.delete(usersEndpoint.delete(id))
			setData(data.filter((record) => record.id !== id))
		} catch (error) {
			console.error(error)
		}
	}

	const handleModalSubmit = (newUser) => {
		setData((prev) =>
			prev.map((item) => (item.id === newUser.id ? newUser : item))
		)
		setModal({ isShow: false })
	}

	const handleEdit = (id) => {
		setModal({
			isShow: true,
			title: 'Edit your user',
			bodyComponent: (
				<UserForm
					groups={groups}
					onSubmit={handleModalSubmit}
					id={id}
					submitButtonText='Save group'
				/>
			),
		})
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
							<Button
								onClick={() => handleEdit(id)}
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
	)
}
