import React, { Component } from 'react';
import InstaServices from '../services/instaServices';
import ErrorMessage from './Error';


export default class Palette extends Component {

    InstaServices = new InstaServices();

    state = {
        errorPhoto: false,
        photos: []
    }

    componentDidMount() {
        this.updatePhotos();
    }

    updatePhotos = () => {
        this.InstaServices.getAllPosts()
            .then(this.onPhotosLoaded)
            .catch(this.onError)
    }

    onPhotoError = () => {
        this.setState({
            errorPhoto: true
        })
    }

    onPhotosLoaded = (photos) => {
        this.setState({
            errorPhoto: false,
            photos
        })
    }

    renderItems = (arr) => {
        return arr.map(item => {
            const { src, alt, id } = item;
            return (
                <img key={id} src={src} alt={alt} />
            )
        })
    }

    render() {

        const { error, photos } = this.state;

        if (error) {
            return <ErrorMessage />
        }

        const items = this.renderItems(photos);

        return (
            <div className="palette">
                {items}
            </div>
        )
    }
}