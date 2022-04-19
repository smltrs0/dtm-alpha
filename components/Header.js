import Image from 'next/image'
import icon from "@/public/logon.png";
// import { PersonAddSVG } from "@/icons";
// import { setModalOpen } from "@/store";
import Link from "next/link";
import DarckMode from "./DarckMode";

export function Header() {
	// const dispatch = useDispatch();
	const linkHeader = {
		fontSize: '.95rem',
		fontWeight: 700,
		fontStyle: 'normal',
		lineHeight: 1.25,
		textTransform: 'uppercase'
	}

	return (
		<>
			<div style={{ backgroundColor: '#14141a', height: '34px' }}> </div>
			<header className="navbar navbar-expand-md navbar-dark bg-dark" style={{padding : 0}}>
				<div className="container-fluid" style={{ 
					backgroundColor: '#1b1a23f7',
					height: '75px',
					borderTopColor: '#eceeef',
					borderTopStyle: 'solid',
					borderTopWidth: 0,
					borderBottomColor: '#3c3c3c59',
					borderBottomStyle: 'solid',
					borderBottomWidth: '1px'
					}}>
					
					<div className="navbar-brand">
						<div className="site-branding grimlock-site_identity">
							<div className="grimlock-site-logo grimlock-navbar-brand__logo site-logo navbar-brand__logo">
								<a href="https://teamvoodoo.net/" className="custom-logo-link" rel="home">
									<Image style={{transform: 'rotate(180deg)'}} className='img-fluid' src={icon} width="50" height={50}></Image>		
								</a> 
							</div>
						</div>
					</div>
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarCollapse">
						<ul className="navbar-nav me-auto mb-2 mb-md-0">
							<li className="nav-item">
								<Link href={'home'}>
									<a className="nav-link text-white mb-0" style={linkHeader} href="#">Home</a>
								</Link>
							</li>
							<li className="nav-item">
								<Link href={'timer'}>
								<a className="nav-link text-white mb-0" style={linkHeader} href="#">Timer</a>
								</Link>
							</li>
							<li className="nav-item">
								<Link href={'finance'}>
								<a className="nav-link text-white mb-0" style={linkHeader} href="#">Finance</a>
								</Link>
							</li>
							<li className="nav-item">
								<Link href={'magic-square'}>
									<a className="nav-link text-white mb-0" style={linkHeader} href="#">Magic square</a>
								</Link>
							</li>
							<li className="nav-item">
								<Link href={'secret-peak'}>
									<a className="nav-link text-white mb-0" style={linkHeader} href="#">Secret peak</a>
								</Link>
							</li>

						</ul>
					</div>
				</div>
				
			</header>
		</>
	);
}
