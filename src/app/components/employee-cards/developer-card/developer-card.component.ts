import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

type Developer = {
  id: number;
  name: string;
  position: 'Developer';
  specialties: string[];
};

@Component({
  selector: 'app-developer-card',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './developer-card.component.html',
  styleUrl: './developer-card.component.scss'
})
export class DeveloperCardComponent {
  @Input() data!: Developer;
}
