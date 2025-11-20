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
  selector: 'mifosx-clients-timedeposits',
  standalone: true,
  templateUrl: './clients-timedeposits.component.html',
  styleUrls: ['./clients-timedeposits.component.scss'],
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
export class ClientsTimeDepositsComponent implements OnInit, AfterViewInit {
  displayedColumns = [
    'clientName',
    'accountNo',
    'productName',
    'lastActive',
    'balance',
  ];

  dataSource: MatTableDataSource<any> = new MatTableDataSource();
  totalRows = 0;
  pageSize = 50;
  currentPage = 0;
  isLoading = false;
  allTimeDeposits: any[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private clientsService: ClientsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadTimeDeposits();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    // 🔹 Sorting logic
    this.dataSource.sortingDataAccessor = (item, property) => {
      switch (property) {
        case 'accountNo':
          return (item.accountNo || '').toString().toLowerCase();
        case 'clientName':
          return (item.clientName || '').toString().toLowerCase();
        case 'productName':
          return (
            item.recurringDepositProductName?.toString().toLowerCase() ||
            item.productName?.toString().toLowerCase() ||
            ''
          );
        case 'balance':
          return Number(item.summary?.accountBalance) || 0;
        case 'lastActive':
          return item.lastActiveTransactionDate
            ? new Date(item.lastActiveTransactionDate).getTime()
            : 0;
        default:
          return item[property]?.toString().toLowerCase() || '';
      }
    };
  }

  loadTimeDeposits(): void {
    this.isLoading = true;
    this.clientsService.getAllTimeDeposits().subscribe({
      next: (data: any) => {
        const timeDeposits = data.pageItems || [];
        this.allTimeDeposits = timeDeposits;
        this.dataSource.data = timeDeposits;
        this.totalRows = timeDeposits.length;
        this.isLoading = false;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: (err) => {
        console.error('Error loading time deposits', err);
        this.isLoading = false;
      },
    });
  }

  /** 🔹 Search */
  search(term: string): void {
    const keyword = term.trim().toLowerCase();
    if (!keyword) {
      this.dataSource.data = this.allTimeDeposits;
      return;
    }

    this.dataSource.data = this.allTimeDeposits.filter(
      (t) =>
        t.accountNo?.toLowerCase().includes(keyword) ||
        t.clientName?.toLowerCase().includes(keyword) ||
        t.recurringDepositProductName?.toLowerCase().includes(keyword) ||
        t.productName?.toLowerCase().includes(keyword)
    );
  }

  /** 🔹 Navigate to specific recurring deposit account */
  navigateToRecurringDepositAccount(event: MouseEvent, deposit: any): void {
    event.stopPropagation();
    if (deposit.clientId && deposit.id) {
      this.router.navigate([
        '/clients',
        deposit.clientId,
        'recurring-deposit-accounts',
        deposit.id,
        'general',
      ]);
    }
  }

  /** 🔹 Navigate to client profile */
  navigateToClient(event: MouseEvent, deposit: any): void {
    event.stopPropagation();
    if (deposit.clientId) {
      this.router.navigate(['/clients', deposit.clientId, 'general']);
    }
  }


  /** 🔹 Format “Last Active” Date */
  getLastActive(date: string): string {
    if (!date) return '—';
    return new Date(date).toLocaleDateString();
  }
}
