import { Component } from '@angular/core';
import { MoviesComponent } from '../../components/movies/movies.component';

@Component({
  selector: 'app-prefetch',
  standalone: true,
  imports: [MoviesComponent],
  templateUrl: './prefetch.component.html',
  styleUrl: './prefetch.component.scss'
})
export class PrefetchComponent {

}
