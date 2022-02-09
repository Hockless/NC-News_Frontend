import axios from 'axios';

const newsApi = axios.create({
	baseURL: 'https://nc-news-server-jim.herokuapp.com/api',
});

export const getTopics = () => {
	return newsApi.get('/topics').then(({ data }) => {
		return data.topics;
	});
};

export const getArticles = () => {
	return newsApi.get('/articles').then(({ data }) => {
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
