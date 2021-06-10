import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Footer({ caption, username }) {
    return (
        <div className="px-4 pt-2 pb-0">
            <Link to={`/p/${username}`}>
                <span className="mr-1 font-medium text-sm">{username}</span>
            </Link>
            <span className="text-sm">{caption}</span>
        </div>
    )
}

export default Footer;

Footer.propTypes = {
    caption: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired
}
