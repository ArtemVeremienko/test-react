import { Button } from 'react-bootstrap'
import { UserForm } from './UserForm'
import { UsersTable } from './UsersTable'

export const Users = ({ users, setUsers, groups, setModal }) => {
	const handleModalSubmit = (user) => {
		setUsers((prev) => [...prev, user])
		setModal({ isShow: false })
	}

	const handleShowModal = () =>
		setModal({
			title: 'Add new user',
			isShow: true,
			bodyComponent: (
				<UserForm groups={groups} onSubmit={handleModalSubmit} />
			),
		})

	return (
		<div className='tab'>
			<Button
				className='add-button'
				variant='outline-primary'
				size='lg'
				onClick={handleShowModal}
			>
				Add user
			</Button>
			<UsersTable
				columns={['ID', 'Username', 'Created', 'Group', 'Actions']}
				data={users}
				setData={setUsers}
				groups={groups}
				setModal={setModal}
			/>
		</div>
	)
}
