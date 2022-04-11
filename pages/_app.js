import {wrapper} from "@/store";
import 'bootstrap/dist/css/bootstrap.css';

import "@/styles/main.scss";
import {useEffect} from "react";

function App({Component, pageProps}) {
	useEffect(() => {
		require('bootstrap/dist/js/bootstrap')
	}, [])
	return <Component {...pageProps} />;
}

export default wrapper.withRedux(App);
