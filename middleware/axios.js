import axios from "axios"

// Базовая настройка axios

axios.defaults.baseURL = 'https://api.metalmarket.pro';

// Перехватчик всех ответов
axios.interceptors.response.use(function (response) {
	// Когда статус 2xx
	return response
}, function (response) {
	// Место, где сервер отвечает статусом с ошибкой, обработка ошибки и дельнейшие действия
	let error = JSON.stringify(response)
	//deleteToken()
	return Promise.reject(error);
});

function deleteToken() {
	localStorage.removeItem('token')
}

// Функци проверки наличия токена, false - токена нет, при полечении токена нужно его сохранить по заданнуму ключу в сторадж
function checkToken(pathname) {
	if (localStorage.getItem("token") && pathname !== "/auth") {
		let token = localStorage.getItem("token")
		axios.post('https://api.metalmarket.pro/updateTokenDate', {token})
		return true;
	} else {
		if (!axios.defaults.headers.common['Token'])
			axios.defaults.headers.common['Token'] = `${localStorage.getItem("token")}`;
		return false;
	}
}

export { axios, checkToken };