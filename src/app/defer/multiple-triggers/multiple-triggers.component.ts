import { Component } from '@angular/core';
import { MoviesComponent } from '../../components/movies/movies.component';

@Component({
  selector: 'app-multiple-triggers',
  standalone: true,
  imports: [MoviesComponent],
  templateUrl: './multiple-triggers.component.html',
  styleUrl: './multiple-triggers.component.scss'
})
export class MultipleTriggersComponent {

}
