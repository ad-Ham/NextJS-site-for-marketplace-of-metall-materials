import axios from "axios";
import { UserChats } from "../../components/chats/chats";
// const imageToBase64 = require('image-to-base64')


export async function getServerSideProps(context) {
	const user_id = 84

	const res = await axios.get('http://localhost:3001/getuserdialogs', {
		params: {
			user_id: user_id
		},
		headers: {
			'Accept': 'application/json'
		}
	})
	
	const userDialogs = res.data.userDialogs

	for (let i = 0; i < userDialogs.length; i++) {
		// userDialogs[i].dialog_user.user_image = await imageToBase64(userDialogs[i].dialog_user.photopath)
	}	

	return {
		props: {
			userDialogs: userDialogs
		}
	}
}


const ChatsPage = ({ userDialogs, user, userStatus }) => {
	return (<>
		{(userStatus === false) && <><h1 className="errorHeader"></h1><p className="errorText">Пожалуйста, авторизуйтесь</p></>}

		<UserChats userDialogs={userDialogs} user={user} userStatus={userStatus}/>
	</>)
}

export default ChatsPage;