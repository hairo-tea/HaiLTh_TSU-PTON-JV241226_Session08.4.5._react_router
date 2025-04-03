import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div>
            <ul className='flex gap-4 justify-center my-5'>
                <li>
                    <Link to="">Home </Link>
                </li>
                <li>
                    <Link to="/Contact">Contact</Link>
                </li>
            </ul>
        </div >
    )
}
