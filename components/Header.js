import { useDispatch } from "react-redux";
// import { PersonAddSVG } from "@/icons";
// import { setModalOpen } from "@/store";
import Link from "next/link";
import DarckMode from "./DarckMode";

export function Header() {
	// const dispatch = useDispatch();

	return (
		<>
			<header>
				<div className="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
					<a href="/" className="d-flex align-items-center text-dark text-decoration-none">
						<span className="fs-4">VoodooTeam</span>
					</a>
					<nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
						<Link href={'home'}>
							<a className="me-3 py-2 text-dark text-decoration-none" href="#">Home</a>
						</Link>
						<Link href={'timer'}>
							<a className="me-3 py-2 text-dark text-decoration-none" href="#">Timer</a>
						</Link>
						<Link href={'finance'}>
							<a className="me-3 py-2 text-dark text-decoration-none" href="#">Finance</a>
						</Link>
						<Link href={'magic-square'}>
							<a className="me-3 py-2 text-dark text-decoration-none" href="#">Magic square</a>
						</Link>
						<Link href={'secret-peak'}>
							<a className="me-3 py-2 text-dark text-decoration-none" href="#">Secret peak</a>
						</Link>
						<DarckMode/>
					</nav>
				</div>
			</header>
		</>
	);
}
