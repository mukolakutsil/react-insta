import React, { Component } from 'react';
import User from './User';


export default class Post extends Component {
    render() {
        return (
            <div className="post">
                <User
                    src="https://dm.henkel-dam.com/is/image/henkel/men_perfect_com_thumbnails_home_pack_400x400-wcms-international?scl=1&fmt=jpg"
                    alt="man"
                    name="Scott"
                    min />
                <img src={this.props.src} alt={this.props.alt} />
                <div className="post__name">
                    some acount
                </div>

                <div className="post__descr">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu.
                </div>
            </div >
        )
    }
}
