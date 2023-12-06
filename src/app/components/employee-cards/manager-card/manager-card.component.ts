import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

type Manager = {
  id: number;
  name: string;
  position: 'Manager';
  teamSize: number;
};

@Component({
  selector: 'app-manager-card',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './manager-card.component.html',
  styleUrl: './manager-card.component.scss',
})
export class ManagerCardComponent {
  @Input() data!: Manager;
}
