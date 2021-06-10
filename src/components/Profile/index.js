import { useReducer, useEffect } from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import { getUserByUsername, getUserPhotosByUsername } from '../../services/firebase';

function Profile({ user }) {
    const reducer = (state, newState) => ({
        ...state, ...newState
    });
    
    const initialState = {
        profile: {},
        photosCollection: [],
        followerCount: 0
    };

    const [{ profile, photosCollection, followerCount }, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        async function getProfileInfoAndPhotos() {
            const photos = await getUserPhotosByUsername(user.username);
            // dispatch({ profile: user, photosCollection: photos, followerCount: user.followers.length });
        }

        if (user.username) {
            getProfileInfoAndPhotos();
        }

    }, [user.username])

    return (
        <>
            <Header />
            <p>hello {user.username}</p>
        </>
    )
}

export default Profile;

Profile.propTypes = {
    user: PropTypes.shape({
        dateCreated: PropTypes.number.isRequired,
        emailAddress: PropTypes.number.isRequired,
        followers: PropTypes.array.isRequired,
        following: PropTypes.array.isRequired,
        fullname: PropTypes.string.isRequired,
        userID: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired,
    }).isRequired 
};
