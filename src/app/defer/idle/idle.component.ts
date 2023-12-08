import { Component } from '@angular/core';
import { MoviesComponent } from '../../components/movies/movies.component';

@Component({
  selector: 'app-idle',
  standalone: true,
  imports: [MoviesComponent],
  templateUrl: './idle.component.html',
  styleUrl: './idle.component.scss'
})
export class IdleComponent {

}
