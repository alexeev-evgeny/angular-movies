import axios from 'axios';
import * as queryString from 'query-string';

export default class MoviesService {
    _key: String;
    _host: String;
    _pathPopular: String;

    constructor(key: String, host: String, pathPopular: String) {
        this._key = key;
        this._host = host;
        this._pathPopular = pathPopular;
    }

    getFavoritesMovies() {
        const query: string = this.getFavoriteMoviesQuery();
        return axios.get(query);    
    }

    
    private getFavoriteMoviesQuery() {
        const query = queryString.stringify({
            api_key: this._key
        });

        console.error({ query });
        console.error(`${this._host}${this._pathPopular}?${query}`);

        return `${this._host}${this._pathPopular}?${query}`;
    }
}