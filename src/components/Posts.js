import React, { Component } from 'react';
import Post from './Post'


export default class Posts extends Component {
    render() {
        return (
            <div className="left" >
                <Post src="https://media.wired.com/photos/5d09594a62bcb0c9752779d9/1:1/w_1500,h_1500,c_limit/Transpo_G70_TA-518126.jpg" alt="dwd" />
                <Post src="https://cars.usnews.com/pics/size/640x420/static/images/article/202002/128389/1_title_2020_kia_optima.jpg" alt="dwd" />
            </div>
        )

    }
}