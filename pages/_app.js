import '../styles/globals.css';
import { ThemeProvider } from 'next-themes';
import { StrictMode } from 'react';


function MyApp({ Component, pageProps }) {
	return (
		<StrictMode>
			<ThemeProvider attribute="class">
				<Component {...pageProps} />
			</ThemeProvider>
		</StrictMode>
	);
}

export default MyApp;
