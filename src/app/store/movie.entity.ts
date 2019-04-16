import get from 'lodash/get';

export default class MovieEntity {
    _movie: Object;
    _imageHost: string = 'https://image.tmdb.org/';

    constructor(movie) {
        this._movie = movie;
    }

    getTitle() {
        return get(this._movie, 'title', '');
    }

    getReleaseDate() {
        return get(this._movie, 'release_date', '');
    };

    getVoteAverage(): number {
        return get(this._movie, 'vote_average', 0);
    }

    getVoteCount(): number {
        return get(this._movie, 'vote_count', 0);
    }

    getBackdropUrl(): string {
        const backdropUrl: string = get(this._movie, 'backdrop_path', '');
        return backdropUrl ? `${this._imageHost}t/p/w200${backdropUrl}` : '';
    }

    getPosterUrl(): string {
        const posterUrl: string = get(this._movie, 'poster_path', '');
        return posterUrl ? `${this._imageHost}t/p/w200${posterUrl}` : '';
    }
}