import { useState } from 'react';
import { patchArtComment } from '../utils/api';

const ArtVote = ({ article }) => {
	const [voteChange, setVoteChange] = useState(0);
	const giveVote = (value) => {
		setVoteChange((currChange) => currChange + value);
		patchArtComment(article.article_id);
	};
	return (
		<div>
			<p>Article Votes: {article.votes + voteChange}</p>
			<button className="cybr-btn" onClick={() => giveVote(1)}>
				UPVOTE_
			</button>
			<button className="cybr-btn" onClick={() => giveVote(-1)}>
				DOWNVOTE_
			</button>
		</div>
	);
};

export default ArtVote;
