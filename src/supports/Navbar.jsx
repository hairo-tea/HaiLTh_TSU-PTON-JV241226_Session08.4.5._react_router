import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
    return (
        <div>
            <ul className='flex gap-4 justify-center my-5'>
                <li>
                    <NavLink to="/"
                        className={({ isActive }) => `${isActive ? "bg-red-600 text-white p-3" : ""}`}
                    >Home </NavLink>
                </li>
                <li>
                    <NavLink to="/Contact"
                        className={({ isActive }) => `${isActive ? "bg-red-600 text-white p-3" : ""}`}
                    >Contact</NavLink>
                </li>
                <li>
                    <NavLink to="/Detail"
                        className={({ isActive }) => `${isActive ? "bg-red-600 text-white p-3" : ""}`}
                    >Detail</NavLink>
                </li>
            </ul >
        </div >
    )
}
