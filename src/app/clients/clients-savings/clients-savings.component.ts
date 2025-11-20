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
  selector: 'mifosx-clients-savings',
  standalone: true,
  templateUrl: './clients-savings.component.html',
  styleUrls: ['./clients-savings.component.scss'],
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
export class ClientsSavingsComponent implements OnInit, AfterViewInit {
  displayedColumns = [
    'clientName',
    'accountNo',
    'savingsProductName',
    'lastActive',
    'balance',
  ];

  dataSource: MatTableDataSource<any> = new MatTableDataSource();
  totalRows = 0;
  pageSize = 50;
  currentPage = 0;
  isLoading = false;
  allSavings: any[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private clientsService: ClientsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadSavings();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    // 🔹 Sorting logic for first 3 columns
    this.dataSource.sortingDataAccessor = (item, property) => {
      switch (property) {
        case 'accountNo':
          return (item.accountNo || item.accountNumber || '').toString().toLowerCase();
        case 'clientName':
          return (
            item.clientName?.toString().toLowerCase() ||
            item.displayName?.toString().toLowerCase() ||
            ''
          );
        case 'savingsProductName':
          return (
            item.savingsProductName?.toString().toLowerCase() ||
            item.productName?.toString().toLowerCase() ||
            ''
          );
        case 'balance':
          return Number(item.summary?.accountBalance) || 0;
        case 'lastActive':
          const d = item.lastActiveTransactionDate;
          return d ? new Date(d).getTime() : 0;
        default:
          return item[property]?.toString().toLowerCase() || '';
      }
    };
  }

  loadSavings(): void {
    this.isLoading = true;
    this.clientsService.getAllSavings().subscribe({
      next: (data: any) => {
        const savings = data.pageItems || [];
        this.allSavings = savings;
        this.dataSource.data = savings;
        this.totalRows = savings.length;
        this.isLoading = false;
        // 🔹 Attach paginator & sort after data load
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: (err: any) => {
        console.error('Failed to load savings', err);
        this.isLoading = false;
      },
    });
  }

  /** 🔹 Search logic identical to Loans */
  search(term: string): void {
    const keyword = term.trim().toLowerCase();
    if (!keyword) {
      this.dataSource.data = this.allSavings;
      return;
    }

    this.dataSource.data = this.allSavings.filter((s) =>
      (s.accountNo || '').toLowerCase().includes(keyword) ||
      (s.clientName || s.displayName || '').toLowerCase().includes(keyword) ||
      (s.savingsProductName || s.productName || '').toLowerCase().includes(keyword)
    );
  }

/** 🔹 Navigate to a specific savings account */
navigateToSavingsAccount(event: MouseEvent, saving: any): void {
  event.stopPropagation();
  if (saving.clientId && saving.id) {
    this.router.navigate([
      '/clients',
      saving.clientId,
      'savings-accounts',
      saving.id,
      'general',
    ]);
  }
}

/** 🔹 Navigate to the client’s general profile */
navigateToClient(event: MouseEvent, saving: any): void {
  event.stopPropagation();
  if (saving.clientId) {
    this.router.navigate(['/clients', saving.clientId, 'general']);
  }
}


  /** 🔹 Format date for “Last Active” column */
  getLastActive(date: string): string {
    if (!date) return '—';
    return new Date(date).toLocaleDateString();
  }
}
