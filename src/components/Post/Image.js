import PropTypes from 'prop-types';

function Image({ src, caption }) {
    return (
        <img className="w-full object-cover" src={src} alt={caption} />
    )
}

export default Image;

Image.propTypes = {
    src: PropTypes.string.isRequired,
    caption: PropTypes.string.isRequired,
}