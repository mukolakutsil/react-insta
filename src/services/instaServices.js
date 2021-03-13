import { Component } from "react";


export default class InstaServices extends Component {

    _apiBase = 'http://localhost:3000';

    getResource = async (url) => {
        // запит на сервер
        const res = await fetch(`${this._apiBase}${url}`);

        // обробляємо помилку
        if (!res.ok) {
            throw new Error(`Could nit fetch ${url}; received ${res.status}`);
        }

        // повертаємо дані
        return await res.json();


    }

    getAllPosts = async () => {
        const res = await this.getResource('/posts/');
        return res;
    }

    getAllPhotos = async () => {
        const res = await this.getResource('/posts/');
        // буремо з сервера тільки те, що нам потрібно
        return res.map(this._transformPosts);
    }

    _transformPosts = (post) => {
        return {
            src: post.src,
            alt: post.alt
        }
    }

    getAllUsers = async () => {
        const res = await this.getResource('/users/');
        return res;
    }

    getProfile = async () => {
        const res = await this.getResource('/profile/');
        return res;
    }
}