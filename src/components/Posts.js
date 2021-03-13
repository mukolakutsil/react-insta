import React, { Component } from 'react';
import InstaServices from '../services/instaServices';
import ErrorMessage from './Error';
import User from './User';

export default class Posts extends Component {

    InstaServices = new InstaServices();


    state = {
        posts: [],
        error: false
    }


    componentDidMount() {
        this.updatePosts()
    }


    updatePosts() {
        this.InstaServices.getAllPosts()
            .then(this.onPostsLoaded)
            .catch(this.onError);
    }

    onPostsLoaded = (posts) => {
        this.setState({
            posts,
            error: false
        })
    }

    onError = () => {
        this.setState({
            error: true
        })
    }

    renderItems(arr) {
        return arr.map(item => {
            const { name, altname, src, photo, alt, descr, id } = item;

            return (
                <div key={id} className="post">
                    <User
                        src={photo}
                        alt={altname}
                        name={name}
                        min />
                    <img src={src} alt={alt} />
                    <div className="post__name">
                        {name}
                    </div>

                    <div className="post__descr">
                        {descr}
                    </div>
                </div >
            )
        })
    }




    render() {

        const { error, posts } = this.state;

        if (error) {
            return <ErrorMessage />
        }

        const items = this.renderItems(posts)
        return (
            <div className="left" >
                {items}
            </div>
        )

    }
}