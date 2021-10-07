import {Button} from 'react-bootstrap'
import Table from './GroupsTable'

function Groups() {
	return (
		<>
			<Button variant='outline-primary' size='lg'>
				Add group
			</Button>
			<Table columns={['id','name','description']} />
		</>
	)
}

export default Groups
