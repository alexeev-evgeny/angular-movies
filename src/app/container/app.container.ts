import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { FetchPopularMovies } from '../store/popularMovies.reducer';

@Component({
    selector: 'app-root',
    template: `
        <div class="container">
            <movies-list [movies]="popularMovies"></movies-list>
        </div>
        <router-outlet></router-outlet>
    `,
    styles: [`
        .container {
            display: block;
            max-width: 1024px;
            margin: 0 auto;
        }
    `]
})
export class AppComponent implements OnInit {
    popularMovies: Object[];

    constructor(private store: Store<{}>) {
        store.select('popularMovies').subscribe(
            async popularMovies => this.popularMovies = await popularMovies
        );
    }

    async ngOnInit() {
        await this.store.dispatch(new FetchPopularMovies());
    }
}
