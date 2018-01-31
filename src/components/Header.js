import React from 'react';
import { NavLink, Link } from 'react-router-dom'

const Header = () => (
    <header className='header'>
        <div className='content-container'>
            <div className="header__content">
                <Link className="header__title" to='/'>
                    <h1>Expenses</h1>
                </Link>
                <Link to='/create'>Create Expense</Link>
            </div>
        </div>
    </header>
)

export default Header