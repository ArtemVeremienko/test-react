/** @format */

import axios from 'axios'
import { useEffect, useState } from 'react'
import { Table, Button } from 'react-bootstrap'
import { usersEndpoint, baseURL, groupsEndpoint } from '../constants/endpoints'

function UsersTable({ columns = [] }) {
	const [data, setData] = useState([])

	useEffect(() => {
		const fetchData = async () => {
			const result = await axios(`${baseURL}${groupsEndpoint.get()}`)
			setData(result.data)
		}
		fetchData()
	}, [])
	console.log(data)

	return (
		<Table responsive>
			<thead>
				<tr>
					{columns.map((column, index) => (
						<th key={index}>{column}</th>
					))}
					<th>actions</th>
				</tr>
			</thead>
			<tbody>
				{data.map(({ id, name, description }) => (
					<tr>
						<td>{id}</td>
						<td>{name}</td>
						<td>{description}</td>
						<td>
							<Button variant='outline-success'>Edit</Button>{' '}
							<Button variant='outline-danger'>Delete</Button>
						</td>
					</tr>
				))}
			</tbody>
		</Table>
	)
}

export default UsersTable
