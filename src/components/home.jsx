import { useEffect, useState } from 'react';
import { getArticles } from '../utils/api';
import { Link } from 'react-router-dom';

const Home = () => {
	const [articles, setArticles] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		getArticles().then((articles) => {
			setArticles(articles);

			setLoading(false);
		});
	}, []);
	if (loading) return <p>Loading...</p>;
	return (
		<main className="articles">
			<ul className="articles">
				<h4>TODAYS NEWS</h4>

				{articles.map((article) => {
					return (
						<ul key="home">
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
