import axios from "axios";
import { UserChats } from "../../components/chats/chats";

export async function getServerSideProps(context) {
	// const dialogs = await axios.get('http://localhost:3001/getdialogs', {
	// 	headers: {
	// 		'Accept': 'application/json'
	// 	}
	// })
	const dialogs = {id: 1}
	return {
		props: {
			dialogs: dialogs
		},
	}
}


const ChatsPage = ({ dialogs, user }) => {
	return (<>
		<UserChats dialogs={dialogs} user={user}/>
	</>)
}

export default ChatsPage;