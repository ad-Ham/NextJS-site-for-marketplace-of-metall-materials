import axios from "axios";
import { UserChats } from "../../components/chats/chats";

export async function getServerSideProps(context) {
	// const dialogs = await axios.get('https://api.metalmarket.pro/getdialogs', {
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


const ChatsPage = ({ dialogs }) => {
	return (<>
		<div>
			<UserChats dialogs={dialogs}/>
		</div>
	</>)
}

export default ChatsPage;