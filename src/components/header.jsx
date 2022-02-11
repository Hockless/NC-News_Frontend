import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<header>
			<figure>
				<nav className="Nav">
					<div>
						<Link className="header" style={{ textDecoration: 'none' }} to="/">
							NC NEWS
						</Link>
					</div>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/topics">Topics</Link>
					</li>
					<li>Logged in as: jessjelly</li>
				</nav>
			</figure>
		</header>
	);
};

export default Header;
