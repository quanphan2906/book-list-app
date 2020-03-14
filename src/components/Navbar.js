import React, { useContext } from 'react'
import { BookContext } from '../contexts/BookContext'

function Navbar() {
    const { books } = useContext(BookContext)
    return (
        <div className="navbar">
            <h1> Ninja Reading List </h1>
            <p> Current you have {books.length} to get through... </p>
        </div>
    )
}

export default Navbar
