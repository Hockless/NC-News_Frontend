import { getArticles } from '../utils/api';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Cooking = () => {
	const [articles, setArticles] = useState([]);
	const [sortBy, setSortby] = useState('created_at');
	const [loading, setLoading] = useState(true);
	const changeSort = (event) => {
		setSortby(event.target.value);
	};

	useEffect(() => {
		getArticles(sortBy).then((articles) => {
			setArticles(articles);
			setLoading(false);
		});
	}, [sortBy]);
	if (loading) return <p>Loading...</p>;
	return (
		<main className="articles">
			<h2 className="buttonBox">
				{' '}
				Sort By :&nbsp;
				<button onClick={() => setSortby('created_at')} className="sortBy">
					Published
				</button>
				<div class="divider" />
				<button onClick={() => setSortby('votes')} className="sortBy">
					Votes
				</button>
				<div class="divider" />
				<button onClick={() => setSortby('comment_count')} className="sortBy">
					Comments
				</button>
			</h2>
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

export default Cooking;
