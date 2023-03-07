import React from 'react'
import Featured from '../../Components/featured/Featured'
import TrustedBy from '../../Components/trustedBy/TrustedBy'

const Home = () => {
    return (
        <div className='home'>
            <Featured/>
            <TrustedBy/>
        </div>
    )
}

export default Home