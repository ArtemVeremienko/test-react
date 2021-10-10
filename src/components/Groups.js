import { useState } from 'react'
import { Button } from 'react-bootstrap'
import { ModalForm } from './ModalForm'
import { GroupsTable } from './GroupsTable'

function Groups({ groups, setGroups }) {
	const [isShow, setIsShow] = useState(false)

	const handleShow = () => setIsShow(true)

	return (
		<div className='tab'>
			<Button className='add-button' variant='outline-primary' size='lg' onClick={handleShow}>
				Add group
			</Button>
			<GroupsTable
				columns={['ID', 'Name', 'Description', 'Actions']}
				data={groups}
				setData={setGroups}
			/>

			<ModalForm title='Add new group' isShow={isShow} setIsShow={setIsShow} />
		</div>
	)
}

export default Groups
