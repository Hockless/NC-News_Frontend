import { getArticles } from '../utils/api';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const Coding = () => {
	const [articles, setArticles] = useState([]);
	const [loading, setLoading] = useState(true);

	const [sortBy, setSortby] = useState('created_at');
	const [category, setCategory] = useState('');

	// const changeSort = (event) => {
	// 	setSortby(event.target.value);
	// };

	useEffect(() => {
		getArticles(sortBy).then((articles) => {
			setArticles(articles);

			setLoading(false);
		});
	}, [sortBy]);
	if (loading) return <p>Loading...</p>;
	return (
		<main className="articles">
			<h2>
				<button onClick={() => setSortby('created_at')}>Published</button>
				<button onClick={() => setSortby('votes')}>Votes</button>
				<button onClick={() => setSortby('comment_count')}>Comments</button>
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
									{article.created_at} | Votes: {article.votes} | Comments:{' '}
									{article.comment_count}
								</p>
							</ul>
						);
				})}
			</ul>
		</main>
	);
};

export default Coding;
