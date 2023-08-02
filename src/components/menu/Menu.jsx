import React from 'react'
import "./menu.scss"
import { Link } from 'react-router-dom'

const Menu = ({ data }) => {
    return (
        <div className='menu'>
            {data?.map((dataItem, index) => (
                <div className='menuItems' key={index}>
                    <Link to="/random">
                        <span>{dataItem}</span>
                    </Link>
                </div>
            ))}

        </div>
    )
}

export default Menu