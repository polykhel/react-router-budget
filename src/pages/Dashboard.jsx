// rrd imports
import { useLoaderData } from 'react-router-dom';

// helper functions
import { fetchData } from '../helpers'

// loader
export function dashboardLoader() {
    const username = fetchData('username');
    return { username }
}

const Dashboard = () => {
    const { username } = useLoaderData()

    return (
        <div>
            <h1>{username}</h1>
            Dashboard
        </div>
    )
}

export default Dashboard