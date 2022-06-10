import io from 'socket.io-client'

const users_socket = io.connect('https://api.metalmarket.pro/users')
const messages_socket = io.connect('http://localhost:3001/messages')

export { users_socket, messages_socket }