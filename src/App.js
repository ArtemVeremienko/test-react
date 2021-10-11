import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { groupsEndpoint, usersEndpoint } from './constants/endpoints'
import { Container, Tabs, Tab } from 'react-bootstrap'
import './App.css'
import { Users } from './components/Users'
import { ModalForm } from './components/ModalForm'
import Groups from './components/Groups'

function App() {
	const [users, setUsers] = useState([])
	const [groups, setGroups] = useState([])
	const [modal, setModal] = useState({})

	useEffect(() => {
		const fetchData = async () => {
			const result = await axios(groupsEndpoint.get())
			setGroups(result.data)
		}
		fetchData()
	}, [])

	useEffect(() => {
		const fetchData = async () => {
			const result = await axios(usersEndpoint.get())
			setUsers(result.data)
		}
		fetchData()
	}, [])

	const handleModalClose = () => setModal({ isShow: false })

	return (
		<Container>
			<Tabs
				defaultActiveKey='users'
				id='uncontrolled-tab-example'
				className='mb-3'
			>
				<Tab eventKey='users' title='Users'>
					<Users
						users={users}
						setUsers={setUsers}
						groups={groups}
						setModal={setModal}
					/>
				</Tab>
				<Tab eventKey='groups' title='Groups'>
					<Groups
						groups={groups}
						setGroups={setGroups}
						setModal={setModal}
					/>
				</Tab>
			</Tabs>
			<ModalForm onClose={handleModalClose} {...modal} />
		</Container>
	)
}

export default App
