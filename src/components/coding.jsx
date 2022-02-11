import { getArticles } from '../utils/api';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const Coding = () => {
	const [articles, setArticles] = useState([]);
	const { order, topic } = useParams();
	const [sortBy, setSortby] = useState('');
	const [category, setCategory] = useState('');
	const changeSort = (event) => {
		setSortby(event.target.value);
	};

	useEffect(() => {
		getArticles(order, topic).then((articles) => {
			setArticles(articles);
		});
	}, [order, topic]);

	return (
		<main className="articles">
			<h2>
				<select value={changeSort} onChange={changeSort}>
					<option value="" disabled>
						Filter By
					</option>
					<option value="none">No filter</option>
				</select>
			</h2>
			<ul className="codingArticle">
				{articles.map((article) => {
					if (article.topic === 'coding')
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

export default Coding;
