import axios from 'axios';

const newsApi = axios.create({
	baseURL: 'https://nc-news-server-jim.herokuapp.com/api',
});

export const getTopics = () => {
	return newsApi.get('/topics').then(({ data }) => {
		return data.topics;
	});
};

export const getArticles = (sort_by, order, topic) => {
	return newsApi
		.get('/articles', {
			params: { sort_by, order, topic },
		})
		.then(({ data }) => {
			return data.articles;
		});
};

export const getComments = (article_id) => {
	return newsApi.get(`/articles/${article_id}/comments`).then(({ data }) => {
		return data.comments;
	});
};

export const getArticleID = (article_id) => {
	return newsApi.get(`/articles/${article_id}`).then(({ data }) => {
		return data;
	});
};

export const getUser = () => {
	return newsApi.get(`/user/`).then(({ data }) => {
		return data.users;
	});
};

export const patchComment = (comment_id) => {
	return newsApi.patch(`/comments/${comment_id}`, { inc_votes: 1 });
};

export const patchArtComment = (article_id) => {
	return newsApi.patch(`/articles/${article_id}`, {
		inc_votes: 1,
	});
};

export const postComment = (article_id, reqBody) => {
	return newsApi
		.post(`/articles/${article_id}/comments`, reqBody)
		.then(({ data }) => {
			return data.comment;
		});
};

export const deleteComment = (comment_id) => {
	return newsApi.delete(`/comments/${comment_id}`);
};
