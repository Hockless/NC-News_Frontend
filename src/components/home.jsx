import { useEffect, useState } from 'react';
import { getArticles } from '../utils/api';
import { Link } from 'react-router-dom';

const Home = () => {
	const [articles, setArticles] = useState([]);

	useEffect(() => {
		getArticles().then((articles) => {
			setArticles(articles);
		});
	}, []);

	return (
		<main className="articles">
			<ul className="articles">
				<h4>TODAYS NEWS</h4>

				{articles.map((article) => {
					return (
						<ul>
							<h4 className="articleTitle">
								<Link
									key={article.title}
									to={`/articles/${article.article_id}`}
								>
									{article.title}
								</Link>
							</h4>
						</ul>
					);
				})}
			</ul>
		</main>
	);
};

export default Home;
