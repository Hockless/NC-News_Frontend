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
					<ul key="header">
						<Link to="/">Home</Link>
					</ul>
					<ul>
						<Link to="/topics">Topics</Link>
					</ul>
					<ul>Logged in as: jessjelly</ul>
				</nav>
			</figure>
		</header>
	);
};

export default Header;
