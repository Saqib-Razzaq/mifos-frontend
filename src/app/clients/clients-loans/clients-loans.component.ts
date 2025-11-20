import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  MatTableDataSource,
  MatTableModule,
} from '@angular/material/table';
import {
  MatPaginator,
  MatPaginatorModule,
} from '@angular/material/paginator';
import {
  MatSort,
  MatSortModule,
} from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { STANDALONE_SHARED_IMPORTS } from 'app/standalone-shared.module';
import { ClientsService } from '../clients.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'mifosx-clients-loans',
  standalone: true,
  templateUrl: './clients-loans.component.html',
  styleUrls: ['./clients-loans.component.scss'],
  imports: [
    ...STANDALONE_SHARED_IMPORTS,
    NgIf,
    MatFormFieldModule,
    MatInputModule,
    MatProgressBarModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
  ],
})
export class ClientsLoansComponent implements OnInit, AfterViewInit {
  displayedColumns = [
    'clientName',
    'accountNo',
    'loanProductName',
    'principalDisbursed',
    'principalOutstanding',
    'principalPaid',
    'loanType',
  ];

  dataSource: MatTableDataSource<any> = new MatTableDataSource();
  totalRows = 0;
  pageSize = 50;
  currentPage = 0;
  isLoading = false;
  allLoans: any[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private clientsService: ClientsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadLoans();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.dataSource.sortingDataAccessor = (item, property) => {
      switch (property) {
        case 'principalDisbursed':
        case 'principalOutstanding':
        case 'principalPaid':
          return Number(item.summary?.[property]) || 0;
        default:
          return item[property]?.toString().toLowerCase() || '';
      }
    };
  }

  loadLoans(): void {
    this.isLoading = true;
    this.clientsService.getAllLoans().subscribe({
      next: (data: any) => {
        const loans = data.pageItems || [];
        this.allLoans = loans;
        this.dataSource.data = loans;
        this.totalRows = loans.length;
        this.isLoading = false;
      },
      error: (err: any) => {
        console.error('Failed to load loans', err);
        this.isLoading = false;
      },
    });
  }
  /** 🔹 Navigate to specific loan account */
  navigateToLoanAccount(event: MouseEvent, loan: any): void {
    event.stopPropagation(); // prevent any parent click handlers
    if (loan.clientId && loan.id) {
      this.router.navigate([
        '/clients',
        loan.clientId,
        'loans-accounts',
        loan.id,
        'general',
      ]);
    }
  }

  search(term: string): void {
    const keyword = term.trim().toLowerCase();
    if (!keyword) {
      this.dataSource.data = this.allLoans;
      return;
    }

    this.dataSource.data = this.allLoans.filter((loan) =>
      loan.accountNo?.toLowerCase().includes(keyword) ||
      loan.clientName?.toLowerCase().includes(keyword) ||
      loan.loanProductName?.toLowerCase().includes(keyword)
    );
  }

  /** 🔹 Navigate when user clicks anywhere on the row */
  navigateToClient(loan: any): void {
    if (loan.clientId) {
      this.router.navigate(['/clients', loan.clientId, 'general']);
    }
  }
}
