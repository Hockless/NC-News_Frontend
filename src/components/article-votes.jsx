import { useState } from 'react';
import { patchComment } from '../utils/api';

const UpVote = ({ comment }) => {
	const [voteChange, setVoteChange] = useState(0);
	const giveVote = (value) => {
		setVoteChange((currChange) => currChange + value);
		patchComment(comment.comment_id);
	};
	return (
		<div>
			<p>Comment Votes: {comment.votes + voteChange}</p>
			<button className="cybr-btn" onClick={() => giveVote(1)}>
				UPVOTE_
			</button>
			<button className="cybr-btn" onClick={() => giveVote(-1)}>
				downvote_
			</button>
		</div>
	);
};

export default UpVote;
