import { Container, Tabs, Tab } from 'react-bootstrap'
import './App.css'
import Users from './components/Users'
import Groups from './components/Groups'

function App() {
	return (
		<Container>
			<Tabs
				defaultActiveKey='users'
				id='uncontrolled-tab-example'
				className='mb-3'
			>
				<Tab eventKey='users' title='Users'>
					<Users />
				</Tab>
				<Tab eventKey='groups' title='Groups'>
					<Groups />
				</Tab>
			</Tabs>
		</Container>
	)
}

export default App
