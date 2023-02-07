import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
    return (
        <>
            <ul style={{display: 'flex', gap: '5rem', listStyle: 'none', fontSize: '2rem' }}>
                <li style={{cursor: 'pointer'}}><Link to='/signup'>Sign UP</Link></li>
                <li style={{cursor: 'pointer'}}><Link to='/login'>Login</Link></li>
                <li style={{cursor: 'pointer'}}><Link to='/google'>Google</Link></li>
            </ul>
        </>
    )
}

export default Navigation