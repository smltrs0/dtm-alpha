import { wrapper } from "@/store";
import 'bootstrap/dist/css/bootstrap.css';

import "@/styles/main.scss";
import {useEffect} from "react";

function App({ Component, pageProps }) {
	useEffect(() => {
		import("bootstrap/dist/js/bootstrap");
	  }, []);

	  useEffect(() => {
		typeof document !== undefined ? require('bootstrap/dist/js/bootstrap') : null
	  }, [])
	return <Component {...pageProps} />;
}

export default wrapper.withRedux(App);
