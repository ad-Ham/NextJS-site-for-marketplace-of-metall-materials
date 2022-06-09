import io from 'socket.io-client'

const users_socket = io.connect('https://api.metalmarket.pro/users')
const messages_socket = io.connect('https://api.metalmarket.pro/messages', { autoConnect: false })

export { users_socket, messages_socket }