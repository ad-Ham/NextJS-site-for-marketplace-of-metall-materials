import { MainLayout } from '../components/Layout/MainLayout';
import '/styles/_app.scss';

const MyApp = ({ Component, pageProps }) => {
	return (
		<>
			<MainLayout>
				<Component {...pageProps} />
			</MainLayout>
		</>
	)
}

export default MyApp;