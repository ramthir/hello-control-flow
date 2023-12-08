import { Component } from '@angular/core';
import { MoviesComponent } from '../../components/movies/movies.component';

@Component({
  selector: 'app-interaction',
  standalone: true,
  imports: [MoviesComponent],
  templateUrl: './interaction.component.html',
  styleUrl: './interaction.component.scss',
})
export class InteractionComponent {}
