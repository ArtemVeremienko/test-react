export const baseURL = 'http://127.0.0.1:8000/api/'

const createEndpoints = (path) => ({
	get: () => `list-${path}/`,
	create: (id) => `list-${path}/create/${id}`,
	update: (id) => `list-${path}/update/${id}`,
	delete: (id) => `list-${path}/delete/${id}`,
})

export const groupsEndpoint = createEndpoints('groups')
export const usersEndpoint = createEndpoints('users')
