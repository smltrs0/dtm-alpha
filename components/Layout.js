import Head from "next/head";

export function Layout({ children }) {
	return (
		<main className="container">
			<Head>
				<title>Voodoo team</title>
			</Head>
			{children}
		</main>
	);
}
