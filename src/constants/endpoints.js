const baseURL = 'http://127.0.0.1:8000/api/'

const createEndpoints = (path) => ({
	get: () => `${baseURL}list-${path}/`,
	create: () => `${baseURL}list-${path}/create/`,
	update: (id) => `${baseURL}list-${path}/update/${id}/`,
	delete: (id) => `${baseURL}list-${path}/delete/${id}/`,
})

export const groupsEndpoint = createEndpoints('groups')
export const usersEndpoint = createEndpoints('users')
