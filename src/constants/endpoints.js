export const baseURL = 'http://localhost:8000/api/'

const createEndpoints = (path) => ( {
	'get': () => `${path}/`,
	'create': (id) => `${path}/create/${id}`,
	'update': (id) => `${path}/update/${id}`,
	'delete': (id) => `${path}/delete/${id}`
})

export const groupsEndpoint = createEndpoints('groups')
export const usersEndpoint = createEndpoints('users')
