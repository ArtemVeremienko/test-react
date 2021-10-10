/** @format */

import { useState } from 'react'
import { Button } from 'react-bootstrap'
import { ModalForm } from './ModalForm'
import { GroupsTable } from './GroupsTable'
import { AddGroupForm } from './AddGroupForm'

function Groups({ groups, setGroups }) {
	const [isShow, setIsShow] = useState(false)

	const handleShow = () => setIsShow(true)
	const handleClose = () => setIsShow(false)

	const handleModalSubmit = (group) => {
		setGroups((prev) => [...prev, group])
		handleClose()
	}

	return (
		<div className='tab'>
			<Button
				className='add-button'
				variant='outline-primary'
				size='lg'
				onClick={handleShow}
			>
				Add group
			</Button>
			<GroupsTable
				columns={['ID', 'Name', 'Description', 'Actions']}
				data={groups}
				setData={setGroups}
			/>

			<ModalForm
				title='Add new group'
				isShow={isShow}
				bodyComponent={AddGroupForm}
				onClose={handleClose}
				onSubmit={handleModalSubmit}
			/>
		</div>
	)
}

export default Groups
