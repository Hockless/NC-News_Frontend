import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getArticleID } from '../utils/api';
import { getComments } from '../utils/api';
import UpVote from './upvotes';
import { postComment } from '../utils/api';
import { deleteComment } from '../utils/api';

const Article = () => {
	const [loading, setLoading] = useState(true);
	const [article, setArticle] = useState([]);
	const [comments, setComments] = useState([]);
	const { article_id, reqBody } = useParams();
	const [commentBody, setCommentBody] = useState('');
	const [status, setStatus] = useState(null);

	useEffect(() => {
		getArticleID(article_id).then((apiArticle) => {
			setArticle(apiArticle.article);
			setLoading(false);
		});
	}, [article_id]);

	useEffect(() => {
		getComments(article_id).then((apiComments) => {
			setComments(apiComments);
		});
	}, [article_id]);

	function removeComment(comment_id) {
		deleteComment(comment_id).then(() => {
			setComments((previous) =>
				previous.filter((comment) => {
					return comment.comment_id !== comment_id;
				})
			);
		});
	}

	const handleSubmit = (event) => {
		event.preventDefault();
		const request = {
			body: commentBody,
			username: 'jessjelly',
		};
		postComment(article_id, request).then((commentFromAPI) => {
			console.log(commentFromAPI);
			setComments((previous) => [commentFromAPI, ...previous]);
			setCommentBody('');
		});
	};
	console.log(commentBody);

	if (loading) return <p>Loading...</p>;
	return (
		<main>
			<h4 className="articleTitle">{article.title}</h4>
			<h5 className="articleTopic">Topic: {article.topic}</h5>
			<p className="articleBody2">{article.body}</p>
			<p className="commentCount"> Comments: {article.comment_count}</p>

			<p> Article votes: {article.votes}</p>

			<div>
				{' '}
				<form onSubmit={handleSubmit}>
					<textarea
						placeholder="Write a comment..."
						onChange={(event) => setCommentBody(event.target.value)}
						rows="1"
						cols="50"
						className="textbox"
						value={commentBody}
					/>
					<button>Submit</button>
				</form>
			</div>
			<ul className="codingArticle">
				{comments.map((comment) => {
					return (
						<li className="commentBody">
							<p> {comment.body}</p>
							<p>Author: {comment.author}</p>

							<p>Created at: {comment.created_at}</p>
							{comment.author === 'jessjelly' ? (
								<button onClick={() => removeComment(comment.comment_id)}>
									Delete
								</button>
							) : null}
							<UpVote comment={comment} />
						</li>
					);
				})}
			</ul>
		</main>
	);
};

export default Article;
