import {Button} from 'react-bootstrap'
import Table from './UsersTable'

function Users({ users }) {
	return (
		<>
			<Button variant='outline-primary' size='lg'>
				Add user
			</Button>
			<Table columns={['ID', 'Username', 'Created', 'Group', 'Actions']} data={users} />
		</>
	)
}

export default Users
