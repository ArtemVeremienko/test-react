import { Button } from 'react-bootstrap'
import { GroupsTable } from './GroupsTable'
import { GroupForm } from './GroupForm'

function Groups({ groups, setGroups, setModal }) {


	const handleModalSubmit = (group) => {
		setGroups((prev) => [...prev, group])
		setModal({ isShow: false })
	}

	const handleShowModal = () => setModal({
		isShow: true,
		title: 'Add new group',
		bodyComponent: <GroupForm onSubmit={handleModalSubmit}/>
	})

	return (
		<div className='tab'>
			<Button
				className='add-button'
				variant='outline-primary'
				size='lg'
				onClick={handleShowModal}
			>
				Add group
			</Button>
			<GroupsTable
				columns={['ID', 'Name', 'Description', 'Actions']}
				data={groups}
				setData={setGroups}
				setModal={setModal}
			/>
		</div>
	)
}

export default Groups
