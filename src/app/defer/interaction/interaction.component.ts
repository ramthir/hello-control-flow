import { Component } from '@angular/core';
import { MoviesComponent } from '../../components/movies/movies.component';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-interaction',
  standalone: true,
  imports: [MoviesComponent,MatButtonModule],
  templateUrl: './interaction.component.html',
  styleUrl: './interaction.component.scss'
})
export class InteractionComponent {

}
