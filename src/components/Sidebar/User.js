import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton'

export default function User({ username, fullName }) {
    return !username || !fullName ? (
        <Skeleton count={1} height={61} />
    ) : (
        <Link className="grid grid-cols-4 gap-4 mt-3 mb-6 items-center" to={`/p/${username}`}>
            <div className="flex items-center justify-between col-span-1"> 
                <img 
                    className="rounded-full w-16 flex mr-3" 
                    src={`/images/avatars/${username}.jpg`}
                    alt=""
                
                />
            </div>
            <div className="col-span-3">
                <p className="font-medium text-sm text-gray-800">{username}</p>
                <p className="text-sm text-gray-500">{fullName}</p>
            </div>
        </Link>
    );
}

User.propTypes = {
    username: PropTypes.string,
    fullName: PropTypes.string,
}