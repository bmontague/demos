import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { formatRating } from 'nx-demo/store/util-formatters';
import { Game } from 'nx-demo/util-interface';

@Component({
  selector: 'nx-demo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(
    private http: HttpClient,
    @Inject('baseUrl') private baseUrl: string
  ) {}

  title = 'Board Game Hoarding';
  formatRating = formatRating;
  games = this.http.get<Game[]>(`${this.baseUrl}api/games`);
}
