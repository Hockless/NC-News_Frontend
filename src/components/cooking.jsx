import { getArticles } from '../utils/api';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Cooking = () => {
	const [articles, setArticles] = useState([]);
	const [sortBy, setSortby] = useState('');

	const changeSort = (event) => {
		setSortby(event.target.value);
	};

	useEffect(() => {
		getArticles().then((articles) => {
			setArticles(articles);
		});
	}, []);

	return (
		<main className="articles">
			<select value={changeSort}></select>
			<ul className="codingArticle">
				{articles.map((article) => {
					if (article.topic === 'cooking')
						return (
							<ul className="codingArticle">
								<Link to={`/articles/${article.article_id}`}>
									<h4 className="articleTitle">{article.title}</h4>
								</Link>

								<h5 className="articleTopic">Topic: {article.topic}</h5>
								<p className="articleBody">{article.body}</p>
								<Link to={`/articles/${article.article_id}`}> Read more </Link>
								<p className="commentCount">
									{' '}
									Comments: {article.comment_count}
								</p>
							</ul>
						);
				})}
			</ul>
		</main>
	);
};

export default Cooking;
