import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MoviesComponent } from '../../components/movies/movies.component';

@Component({
  selector: 'app-when',
  standalone: true,
  imports: [MoviesComponent, MatSlideToggleModule, ReactiveFormsModule],
  templateUrl: './when.component.html',
  styleUrl: './when.component.scss',
})
export class WhenComponent {
  showMoviesControl = new FormControl(false);
}
