import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MoviesComponent } from '../../components/movies/movies.component';

@Component({
  selector: 'app-prefetch-when',
  standalone: true,
  imports: [MoviesComponent, MatSlideToggleModule, ReactiveFormsModule],
  templateUrl: './prefetch-when.component.html',
  styleUrl: './prefetch-when.component.scss'
})
export class PrefetchWhenComponent {
  showMoviesControl = new FormControl(false);
}
