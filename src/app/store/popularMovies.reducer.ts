import { Action } from '@ngrx/store';
import get from 'lodash/get';

import appConfig from 'config/api';
import MoviesService from '../services/movies.service';
import MovieEntity from './movie.entity';

export enum ActionTypes {
    FetchPopularMovies = 'fetch popular movies',
}

export class FetchPopularMovies implements Action {
    readonly type = ActionTypes.FetchPopularMovies;
}

const { key, host, popular } = appConfig;
const moviesService = new MoviesService(key, host, popular);

const initialState = [];

export async function popularMoviesReducer(state: Array<Object> = initialState, action: Action) {
    if (action.type === ActionTypes.FetchPopularMovies) {
        return await fetchPopularMovies(state);
    }    
}

async function fetchPopularMovies(state) {
    try {
        const { data = {} } = await moviesService.getFavoritesMovies();
        const movies = get(data, 'results', []);
        // state = addFullPostersUrls(movies);

        state = movies.map(movie => new MovieEntity(movie));
        
        console.error(state);

        return state;
    } catch(error) {
        console.error('ERROR', error);
    }

    // console.error({ state });
    return state;   
}

function addFullPostersUrls(movies: Object[]): Object[] {
    return movies.map(movie => {
        const backdropUrl: string = get(movie, 'backdrop_path', '');
        const posterUrl: string = get(movie, 'poster_path', '');
        movie['backdrop_url'] = `https://image.tmdb.org/t/p/w200${backdropUrl}`;
        movie['poster_url'] = `https://image.tmdb.org/t/p/w200${posterUrl}`;
        return movie;
    });
} 