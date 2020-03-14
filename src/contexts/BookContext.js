import React, { createContext, useState } from 'react'

export const BookContext = createContext();

function BookContextProvider() {
    useState([
        {title: 'name of the wind', author: 'patrick rothfuss', id: 1},
        {title: 'the final empire', author: 'brandon sanderson', id: 2}
    ])
    return (
        <div>
            
        </div>
    )
}

export default BookContextProvider
