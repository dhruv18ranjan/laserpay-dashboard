import React from 'react'
import "./menu.scss"

const Menu = () => {
    return (
        <div className='menu'>
                <div className='menuItems'>
                    <span>Home</span>
                </div>
                <div className='menuItems'>
                    <span>Credentials Groups</span>
                </div>
                <div className='menuItems'>
                    <span>Designs</span>
                </div>
                <div className='menuItems'>
                    <span>Unpublished</span>
                </div>
                <div className='menuItems'>
                    <span>Reviews</span>
                </div>
        </div>
    )
}

export default Menu