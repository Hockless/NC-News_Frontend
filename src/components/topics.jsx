import { useEffect, useState } from 'react';
import { getTopics } from '../utils/api';
import { Link } from 'react-router-dom';

const Nav = () => {
	const [topics, setTopics] = useState([]);

	useEffect(() => {
		getTopics().then((topicsFromApi) => {
			setTopics(topicsFromApi);
		});
	}, []);

	return (
		<nav className="topicsNav">
			{topics.map((topic) => {
				return (
					<ul>
						<figure>
							<ui className="">
								<Link key={topic.slug} to={`topics/${topic.slug}`}>
									{topic.slug}
								</Link>
							</ui>
						</figure>
					</ul>
				);
			})}
		</nav>
	);
};

export default Nav;
