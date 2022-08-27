import { Link } from 'react-router-dom'

function NavbarList({LinkName, LinkUrl}) {
	return (
		<li  className="nav-item">
			<Link to="LinkUrl" className="nav-link js-scroll-trigger" >
				{LinkName}
			</Link>
		</li>
	);
}

export default NavbarList;
