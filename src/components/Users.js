import {Button} from 'react-bootstrap'
import Table from './UsersTable'

function Users() {
	return (
		<>
			<Button variant='outline-primary' size='lg'>Add user</Button>
			<Table columns={['id','username','created','group']}/>
		</>
	)
}

export default Users
