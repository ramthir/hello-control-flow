import { Component } from '@angular/core';
import { DeveloperCardComponent } from '../../components/employee-cards/developer-card/developer-card.component';
import { TeamLeadCardComponent } from '../../components/employee-cards/teamlead-card/teamlead-card.component';
import { ManagerCardComponent } from '../../components/employee-cards/manager-card/manager-card.component';
import { CommonModule } from '@angular/common';

type Developer = {
  id: number;
  name: string;
  position: 'Developer';
  specialties: string[];
};

type Manager = {
  id: number;
  name: string;
  position: 'Manager';
  teamSize: number;
};

type TeamLead = {
  id: number;
  name: string;
  position: 'TeamLead';
  project: string;
};

type Employee = Developer | Manager | TeamLead;

@Component({
  selector: 'app-switch-with-type',
  standalone: true,
  imports: [
    CommonModule,
    DeveloperCardComponent,
    ManagerCardComponent,
    TeamLeadCardComponent,
  ],
  templateUrl: './if-with-type.component.html',
  styleUrl: './if-with-type.component.scss',
})
export class IfWithTypeComponent {
  employees: Employee[] = [
    {
      id: 1,
      name: 'Marlin',
      position: 'Developer',
      specialties: ['Angular', 'NgRx'],
    },
    { id: 2, name: 'Dory', position: 'Manager', teamSize: 10 },
    { id: 3, name: 'Nemo', position: 'TeamLead', project: 'Finding Nemo' },
    {
      id: 4,
      name: 'Gill',
      position: 'Developer',
      specialties: ['Flutter', 'Dart'],
    },
    {
      id: 5,
      name: 'Bruce',
      position: 'Developer',
      specialties: ['Java', 'Spring Boot'],
    },
    { id: 6, name: 'Crush', position: 'TeamLead', project: 'Finding Dory' },
  ];
}
