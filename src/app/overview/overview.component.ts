import { Component, OnInit, OnDestroy } from '@angular/core';
import { OverviewService } from './overview.service';
import { OrganizationService } from '../organization/organization.service';  // ← THIS ONE EXISTS!
import { Subscription } from 'rxjs';

@Component({
  selector: 'mifos-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
  standalone: false,
})
export class OverviewComponent implements OnInit, OnDestroy {

  metrics: any = {};
  loading = true;
  error = false;

  offices: any[] = [];
  selectedOfficeId: number = 1;

  private subscription = new Subscription();

  constructor(
    private overviewService: OverviewService,
    private organizationService: OrganizationService   // ← Correct name + real path
  ) {}

  ngOnInit(): void {
    this.loadOfficesAndData();
  }

  private loadOfficesAndData(): void {
    this.loading = true;

    this.organizationService.getOffices().subscribe((offices: any[]) => {
      this.offices = offices;

      // Exact same logic as official dashboard
      const saved = localStorage.getItem('mifosXOfficeId');
      const credentials = JSON.parse(localStorage.getItem('mifosXCredentials') || '{}');
      const userOfficeId = credentials?.officeId || 1;

      this.selectedOfficeId = saved ? Number(saved) : userOfficeId;

      this.overviewService.setOffice(this.selectedOfficeId);
      this.loadDashboardData();
    });
  }

  onOfficeChange(officeId: number): void {
    this.selectedOfficeId = officeId;
    localStorage.setItem('mifosXOfficeId', officeId.toString());
    this.overviewService.setOffice(officeId);
    this.loadDashboardData();
  }

  private loadDashboardData(): void {
    this.loading = true;
    this.error = false;

    this.subscription.add(
      this.overviewService.getDashboardData().subscribe({
        next: (data) => {
          this.metrics = data;
          this.loading = false;
        },
        error: (err) => {
          console.error('Failed to load dashboard metrics', err);
          this.error = true;
          this.loading = false;
        }
      })
    );
  }

  refresh() {
    this.loadDashboardData();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}