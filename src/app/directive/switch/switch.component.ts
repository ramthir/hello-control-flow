import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { AdminDashboardComponent } from '../../components/admin-dashboard/admin-dashboard.component';
import { ModeratorDashboardComponent } from '../../components/moderator-dashboard/moderator-dashboard.component';
import { UserDashboardComponent } from '../../components/user-dashboard/user-dashboard.component';

type AccessLevel = 'admin' | 'moderator' | 'user';

@Component({
  selector: 'app-switch',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatSelectModule,
    AdminDashboardComponent,
    UserDashboardComponent,
    ModeratorDashboardComponent,
  ],
  templateUrl: './switch.component.html',
  styleUrl: './switch.component.scss',
})
export class SwitchComponent {
  accessLevelControl = new FormControl<AccessLevel>('admin');
}
