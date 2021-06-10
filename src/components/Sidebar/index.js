import React  from 'react';
import useUser from '../../hooks/use-user';
import User from './User';
import Suggestions from './Suggestions';

export default function Sidebar() {
    const { user: { docId, fullName, username, userId, following }} = useUser();

    return (
        <div className="p-4 h-1 sticky top-16 hidden sm:block">
            <User username={username} fullName={fullName} />
            <Suggestions userId={userId} following={following} loggedInUserDocId={docId} />
        </div>
    );
}
