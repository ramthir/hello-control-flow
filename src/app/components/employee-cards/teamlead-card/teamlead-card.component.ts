import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

type TeamLead = {
  id: number;
  name: string;
  position: 'TeamLead';
  project: string;
};

@Component({
  selector: 'app-teamlead-card',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './teamlead-card.component.html',
  styleUrl: './teamlead-card.component.scss'
})
export class TeamLeadCardComponent {
  @Input() data!: TeamLead;
}
