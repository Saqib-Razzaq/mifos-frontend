import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { LoginActivitiesService, LoginActivity } from './login-activities.service';

@Component({
  selector: 'mifosx-login-activities',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatTableModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: './login-activities.component.html',
  styleUrls: ['./login-activities.component.scss'],
})
export class LoginActivitiesComponent {
  displayedColumns = ['browser', 'device', 'ip', 'location', 'time'];
  loginActivities: LoginActivity[] = [];
  loading = true;

  constructor(private loginService: LoginActivitiesService) {}

  ngOnInit(): void {
    this.loginService.getLoginActivities().subscribe({
      next: (data) => {
        this.loginActivities = data;
        this.loading = false;
      },
      error: () => (this.loading = false),
    });
  }
}
