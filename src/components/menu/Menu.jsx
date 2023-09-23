import React from 'react'
import "./menu.scss"
import { Link } from 'react-router-dom'

const Menu = ({ data, arrayName,id }) => {

    return (
        <div className='menu'>
            {data?.map((dataItem, index) => (
                <div className='menuItems' key={index}>
                    {index === 0 ? (
                        <Link to={`/${id}/${arrayName}`}>
                            <span>{dataItem}</span>
                        </Link>
                    ) : (
                        <Link to={`/${id}/${arrayName}/${dataItem.toLowerCase()}`}>
                            <span>{dataItem}</span>
                        </Link>
                    )}
                </div>
            ))}

        </div>
    )
}

export default Menu