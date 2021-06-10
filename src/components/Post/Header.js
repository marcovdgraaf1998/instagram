
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Header({ username }) {
    return (
        <div className="flex border-b border-gray-primary h-4 px-4 py-8">
            <div className="flex items-center">
                <Link className="flex items-center" to={`/p/${username}`}>
                    <img 
                        className="rounded-full h-8 w-8 flex mr-3" 
                        src={`/images/avatars/${username}.jpg`} 
                        alt={`${username} profile`}
                    />
                    <p className="font-medium text-sm text-gray-800 hover:underline">{username}</p>
                </Link>
            </div>
        </div>
    )
}

export default Header;

Header.propTypes = {
    username: PropTypes.string.isRequired
}
