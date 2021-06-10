import { useEffect } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Timeline from '../components/Timeline';

function Dashboard() {
    useEffect(() => {
        document.title = 'Instagram';
    }, [])

    return (
        <div className="bg-gray-background">
            <Header />
            <div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-4 justify-between mx-auto max-w-screen-lg">
                <Timeline />
                <Sidebar />
            </div>
        </div>
    )
}

export default Dashboard
