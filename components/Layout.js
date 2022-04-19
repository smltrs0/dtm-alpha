import Head from "next/head";

export function Layout({ children }) {
	return (
		<main>
			<Head>
				<title>Voodoo team</title>
			</Head>
			{children}
		</main>
	);
}
