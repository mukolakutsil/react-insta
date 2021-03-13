import React, { Component } from 'react';
import User from './User';
import Palette from './Palette';
import InstaServices from '../services/instaServices';


export default class Profile extends Component {

    InstaServices = new InstaServices();

    state = {
        errorProfile: false,
        profile: []
    }

    componentDidMount() {
        this.updateProfile();
    }

    updateProfile = () => {
        this.InstaServices.getProfile()
            .then(this.onProfileLoaded)
            .catch(this.onProfileError)
    }


    onProfileLoaded = (profile) => {
        this.setState({
            errorProfile: false,
            profile
        })
    }

    onProfileError = () => {
        this.setState({
            errorProfile: true
        })
    }


    render() {

        const { profile } = this.state;

        const item = profile.map(elem => {
            const { name, altname, photo, id } = elem;
            return (
                <User
                    key={id}
                    src={photo}
                    alt={altname}
                    name={name}
                />
            )
        })
        return (
            <div className="container profile" >
                {item}
                <Palette />
            </div>
        )
    }
}
