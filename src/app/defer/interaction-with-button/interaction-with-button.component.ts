import { Component } from '@angular/core';
import { MoviesComponent } from '../../components/movies/movies.component';

@Component({
  selector: 'app-interaction-with-button',
  standalone: true,
  imports: [MoviesComponent],
  templateUrl: './interaction-with-button.component.html',
  styleUrl: './interaction-with-button.component.scss'
})
export class InteractionWithButtonComponent {

}
