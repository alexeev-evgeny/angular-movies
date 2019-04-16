import { Component, Input } from '@angular/core';

@Component({
    selector: 'movies-list',
    template: `
        <div class="movies-list" *ngIf="movies">
            <h1>Movies</h1>
            <pre>LENGTH: {{movies.length}}</pre>
        
            <div *ngFor="let movie of movies">
                <movies-list-item [movie]="movie"></movies-list-item>
            </div>
        </div>
    `,
    styles: [`
        .movies-list {
            display: block;
        }
    `]
})

export class MoviesList {
    @Input() movies: Array<Object> = []; 
}
