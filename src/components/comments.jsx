import { useEffect, useState } from 'react';
import { getComments } from '../utils/api';

const Comments = () => {
	const [com, newCom] = useState([]);
};

useEffect(() => {
	getComments().then((comments) => {
		console.log(newCom(comments));
	});
}, []);
