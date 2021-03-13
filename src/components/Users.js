import React, { Component } from 'react';
import InstaServices from '../services/instaServices';
import ErrorMessage from './Error';
import User from './User';



export default class Users extends Component {


    InstaServices = new InstaServices();

    state = {
        users: [],
        errorUsers: false,
        profile: [],
        errorProfile: false
    }

    componentDidMount() {
        this.updateUsers();
        this.updateProfile();
    }

    updateProfile = () => {
        this.InstaServices.getProfile()
            .then(this.onProfileLoaded)
            .catch(this.onProfileError)
    }

    updateUsers = () => {
        this.InstaServices.getAllUsers()
            .then(this.onUsersLoaded)
            .catch(this.onUsersError)
    }

    onUsersLoaded = (users) => {
        this.setState({
            errorUsers: false,
            users
        })
    }

    onProfileLoaded = (profile) => {
        this.setState({
            errorProfile: false,
            profile
        })
    }

    onUsersError = () => {
        this.setState({
            errorUsers: true
        })
    }

    onProfileError = () => {
        this.setState({
            errorProfile: true
        })
    }


    render() {
        const { users, errorUsers, profile, errorProfile } = this.state;

        const items = users.map(item => {

            const { id, name, altname, photo } = item;
            return (
                <div key={id}>
                    <User
                        src={photo}
                        alt={altname}
                        name={name}
                        min
                    />
                </div>
            )
        })

        const myProfile = profile.map(item => {
            const { photo, name, altname, id } = item;
            return (
                <div key={id}>
                    <User
                        src={photo}
                        alt={altname}
                        name={name}
                    />
                </div>
            )
        })

        return (
            <div className="right" >
                {errorProfile ? <ErrorMessage small /> : myProfile}
                <div className="users__block">
                    {errorUsers ? <ErrorMessage small /> : items}
                </div>
            </div>
        )
    }
}

