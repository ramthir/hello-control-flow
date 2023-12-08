import { Component } from '@angular/core';
import { MoviesComponent } from '../../components/movies/movies.component';

@Component({
  selector: 'app-viewport',
  standalone: true,
  imports: [MoviesComponent],
  templateUrl: './viewport.component.html',
  styleUrl: './viewport.component.scss'
})
export class ViewportComponent {

}
