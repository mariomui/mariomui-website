import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Header = (props) => (
    <header id="header" style={{ backgroundColor: '#808000', position: 'fixed' }} className="alt">
        <Link to="/" className="logo"><strong>Mario Mui</strong> <span>Software Engineer</span></Link>
        <nav>
            <a className="menu-link" onClick={props.onToggleMenu} href="javascript:;">Menu</a>
        </nav>
    </header>
)

Header.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Header
