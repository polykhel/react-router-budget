// rrd imports
import { Outlet, useLoaderData } from 'react-router-dom';

// assets
import wave from '../assets/wave.svg'

// helper functions
import { fetchData } from '../helpers'
import Nav from '../components/Nav';

// loader
export function mainLoader() {
    const username = fetchData('username');
    return { username }
}

const Main = () => {
    const { username } = useLoaderData()

    return (
        <div className='layout'>
            <Nav username={username}/>
            <main>
                <Outlet />
            </main>
            <img src={wave} alt='' />
        </div>
    )
}

export default Main