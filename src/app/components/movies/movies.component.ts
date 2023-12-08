import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

type Movie = {
  title: string;
  director: string;
  year: number;
  actors: string[];
};

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.scss',
})
export class MoviesComponent {
  movies: Movie[] = [
    {
      title: 'Matrix',
      director: 'Wachowski Brothers',
      year: 1999,
      actors: ['Keanu Reeves', 'Laurence Fishburne', 'Carrie-Anne Moss'],
    },
    {
      title: 'Swordfish',
      director: 'Dominic Sena',
      year: 2001,
      actors: ['John Travolta', 'Hugh Jackman', 'Halle Berry'],
    },
    {
      title: 'Mexican',
      director: 'Gore Verbinski',
      year: 2001,
      actors: ['Brad Pitt', 'Julia Roberts', 'James Gandolfini'],
    },
    {
      title: 'Titanic',
      director: 'James Cameron',
      year: 1997,
      actors: ['Leonardo DiCaprio', 'Kate Winslet', 'Billy Zane'],
    },
    {
      title: '12 Angry Men',
      director: 'Sidney Lumet',
      year: 1957,
      actors: ['Henry Fonda', 'Lee J. Cobb', 'Martin Balsam'],
    },
  ];

  displayedColumns: string[] = ['title', 'director', 'year', 'actors'];
}
