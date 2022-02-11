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
		<nav className="">
			{topics.map((topic) => {
				return (
					<ul>
						<figure>
							<li className="">
								<Link key={topic.slug} to={`topics/${topic.slug}`}>
									{topic.slug}
								</Link>
							</li>
						</figure>
					</ul>
				);
			})}
		</nav>
	);
};

export default Nav;
