import { Component, Input } from '@angular/core';

@Component({
    selector: 'movies-list-item',
    template: `
        <div class="movies-list-item">
            <div class="movies-list-item__col _image ">
                <img class="image" src="{{ movie.getBackdropUrl() }}" alt="{{ movie.getTitle() }}"/>
            </div>
            <div class="movies-list-item__col">
                <h3 class="title">{{ movie.getTitle() }}</h3>
                <div class="text vote-average">Vote average: {{ movie.getVoteAverage() }}</div>
                <div class="text vote-count">Vote count: {{ movie.getVoteCount() }}</div>
                <div class="text release-date">Release date: {{ movie.getReleaseDate() }}</div>
            </div>
        </div> 
    `,
    styles: [`
        .movies-list-item {
            display: table;
            width: 100%;
            table-layout: fixed;
            padding: 15px 0;
            box-sizing: border-box;
            border-top: 1px solid #999;
            font-family: Sans-Serif;
        }

        .movies-list-item:hover {
            background-color: #f2f2f2;
        }

        .movies-list-item__col {
            display: table-cell;
            vertical-align: top;
            text-align: left;
            padding-left: 15px;
        }

        .movies-list-item__col:first-child {
            padding-left: 0;
        }

        .movies-list-item__col._image {
            width: 200px;
        }

        .title {
            margin: 0;
        }

        .image {
            max-width: 200px;
        }

        .text {
            display: block;
            margin-top: 10px;
            text-align: left;
        }

        .release-date {}

        .vote-average {}

        .vote-count {}
        
    `]
})

export class MoviesListItem {
    @Input() movie: Object = {}; 
}
