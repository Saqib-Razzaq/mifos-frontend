// src/app/overview/overview.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, map, Observable } from 'rxjs';
import { AuthenticationService } from '../core/authentication/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class OverviewService {
  private officeId: number = 1;

  constructor(
    private http: HttpClient,
    private authService: AuthenticationService
  ) {
    const creds = this.authService.getCredentials();
    this.officeId = creds?.officeId ?? 1;
  }

  getDashboardData(): Observable<any> {
    return forkJoin({
      clientTrends: this.http.get(`/runreports/ClientTrendsByMonth?R_officeId=${this.officeId}&ResultSet=false`),
      loanTrends:   this.http.get(`/runreports/LoanTrendsByMonth?R_officeId=${this.officeId}&ResultSet=false`),
      statement:    this.http.get(`/runreports/Income%20Statement%20Table?locale=en&R_endDate=2025-12-31&R_startDate=2025-01-01&R_officeId=${this.officeId}`)
    }).pipe(
      map(raw => this.mapToRequiredMetrics(raw))
    );
  }

  /** Convert array-of-arrays + headers → object using last row */
  private rowToObject(report: any): any {
    if (!report?.columnHeaders || !report?.data?.length) return {};
    const headers = report.columnHeaders.map((h: any) => h.columnName);
    const lastRow = report.data[report.data.length - 1].row;
    const obj: any = {};
    headers.forEach((h: string, i: number) => obj[h] = lastRow[i]);
    return obj;
  }

  private mapToRequiredMetrics(raw: any): any {
    const client = this.rowToObject(raw.clientTrends);   // e.g. { count: 2, Months: "July" }
    const loan   = this.rowToObject(raw.loanTrends);     // e.g. { lcount: 3, Months: "October" }

    return {
      customers: {
        all:      Number(client.count || client.lcount || 0),
        active:   0,  // Not available in your current reports
        inactive: 0,  // Not available
        new:      0   // Not available
      },
      loans: {
        principalOutstanding: Number(loan.lcount || 0),
        interestOutstanding: 0,
        chargesOutstanding:  0,
        totalOutstanding:    Number(loan.lcount || 0)
      },
      loanOverdue: {
        principal: 0,
        interest:  0,
        charges:   0,
        total:     0
      },
      overpaidLoans:     0,
      expectedPayments:  0,
      pendingApproval:   0,
      pendingDisbursal:  0,
      disbursedToday:    0,
      savings: {
        total:            0,
        fixedDeposits:    0,
        recurrentDeposits:0
      }
    };
  }

  setOffice(officeId: number): void {
    this.officeId = officeId;
  }
}