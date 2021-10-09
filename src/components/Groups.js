import {Button} from 'react-bootstrap'
import Table from './GroupsTable'

function Groups({ groups }) {
	return (
		<>
			<Button variant='outline-primary' size='lg'>
				Add group
			</Button>
			<Table columns={['ID', 'Name', 'Description', 'Actions']} data={groups} />
		</>
	)
}

export default Groups
