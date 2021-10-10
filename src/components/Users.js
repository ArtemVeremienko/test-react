import { useState, useMemo } from 'react'
import { Button } from 'react-bootstrap'
import { ModalForm } from './ModalForm'
import { AddUserForm } from './AddUserForm'
import { UsersTable } from './UsersTable'

export const Users = ({ users, setUsers, groups }) => {
	const [isShow, setIsShow] = useState(false)
	const groupsMap = useMemo(
		() => groups.reduce((acc, group) => ({ ...acc, [group.id]: group.namegroups }), {}),
		[groups]
	)
	const handleShow = () => setIsShow(true)

	const handleClose = () => setIsShow(false)

	const handleModalSubmit = (user) => {
		setUsers((prev) => [...prev, user])
		handleClose()
	}

	return (
		<div className='tab'>
			<Button className='add-button' variant='outline-primary' size='lg' onClick={handleShow}>
				Add user
			</Button>
			<UsersTable
				columns={['ID', 'Username', 'Created', 'Group', 'Actions']}
				data={users}
				setData={setUsers}
				groupsMap={groupsMap}
			/>
			<ModalForm
				title='Add new user'
				isShow={isShow}
				bodyComponent={AddUserForm}
				groups={groups}
				onClose={handleClose}
				onSubmit={handleModalSubmit}
			/>
		</div>
	)
}
