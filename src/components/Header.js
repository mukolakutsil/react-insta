import React, { Component } from 'react';

import logo from '../logo.svg';

export default class Header extends Component {

    render() {
        return (
            <header>
                <div className="container h-flex">
                    <a href="3" className="logo">
                        <img src={logo} alt="logo" />
                    </a>
                    <nav className="links">
                        <ul>
                            <li>
                                <a href="#" className="menu__links">Стрічка</a>
                            </li>
                            <li>
                                <a href="#" className="menu__links">Профіль</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        )
    }

}

