import { useState } from 'react';
import PropTypes from 'prop-types';
import { formatDistance } from 'date-fns';
import { Link } from 'react-router-dom';
import AddComment from './AddComment';

function Comments({ docId, comments: allComments, posted, commentInput }) {
    const [comments, setComments] = useState(allComments);
    return (
        <>
            <div className="px-4 pt-1 pb-4">
                {comments.length >= 3 && (
                    <p className="text-sm text-gray-500 mb-1 cursor-pointer">
                        View all comments
                    </p>
                )}
                {comments.slice(0, 2).map((item) => (
                    <p className="mb-1" key={`${item.comment}-${item.displayName}`}>
                        <Link to={`/p/${item.displayName}`}>
                            <span className="mr-1 font-medium text-sm">{item.displayName}</span>
                        </Link>
                        <span className="text-sm">{item.comment}</span>
                    </p>
                ))}
                <p className="text-gray-500 uppercase text-xs mt-2">
                    {formatDistance(posted, new Date())} ago
                </p>
            </div>
            <AddComment 
                docId={docId}
                comments={comments}
                setComments={setComments}
                commentInput={commentInput}
            />
        </>
    )
}

export default Comments;

Comments.propTypes = {
    docId: PropTypes.string.isRequired,
    comments: PropTypes.array.isRequired,
    posted: PropTypes.number.isRequired,
    commentInput: PropTypes.object.isRequired,
}