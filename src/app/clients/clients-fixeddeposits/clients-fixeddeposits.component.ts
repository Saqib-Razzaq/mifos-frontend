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
  selector: 'mifosx-clients-fixeddeposits',
  standalone: true,
  templateUrl: './clients-fixeddeposits.component.html',
  styleUrls: ['./clients-fixeddeposits.component.scss'],
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
export class ClientsFixedDepositsComponent implements OnInit, AfterViewInit {
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
  allFixedDeposits: any[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private clientsService: ClientsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadFixedDeposits();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    // 🔹 Sorting logic for string & numeric fields
    this.dataSource.sortingDataAccessor = (item, property) => {
      switch (property) {
        case 'accountNo':
          return (item.accountNo || '').toString().toLowerCase();
        case 'clientName':
          return (item.clientName || '').toString().toLowerCase();
        case 'productName':
          return (
            item.fixedDepositProductName?.toString().toLowerCase() ||
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

  loadFixedDeposits(): void {
    this.isLoading = true;
    this.clientsService.getAllFixedDeposits().subscribe({
      next: (data: any) => {
        const fixedDeposits = data.pageItems || [];
        this.allFixedDeposits = fixedDeposits;
        this.dataSource.data = fixedDeposits;
        this.totalRows = fixedDeposits.length;
        this.isLoading = false;
        // 🔹 Attach sort & paginator
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error: (err) => {
        console.error('Error loading fixed deposits', err);
        this.isLoading = false;
      },
    });
  }

  /** 🔹 Search */
  search(term: string): void {
    const keyword = term.trim().toLowerCase();
    if (!keyword) {
      this.dataSource.data = this.allFixedDeposits;
      return;
    }

    this.dataSource.data = this.allFixedDeposits.filter(
      (f) =>
        f.accountNo?.toLowerCase().includes(keyword) ||
        f.clientName?.toLowerCase().includes(keyword) ||
        f.fixedDepositProductName?.toLowerCase().includes(keyword) ||
        f.productName?.toLowerCase().includes(keyword)
    );
  }

  /** 🔹 Navigate to Fixed Deposit Account details */
  navigateToFixedDepositAccount(event: MouseEvent, deposit: any): void {
    event.stopPropagation();
    if (deposit.clientId && deposit.id) {
      this.router.navigate([
        '/clients',
        deposit.clientId,
        'fixed-deposit-accounts',
        deposit.id,
        'general',
      ]);
    }
  }

  /** 🔹 Navigate to Client Profile */
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
