import { Component } from '@angular/core';
import { MoviesComponent } from '../../components/movies/movies.component';

@Component({
  selector: 'app-hover',
  standalone: true,
  imports: [MoviesComponent],
  templateUrl: './hover.component.html',
  styleUrl: './hover.component.scss'
})
export class HoverComponent {

}
