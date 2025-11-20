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
  selector: 'mifosx-clients-shares',
  standalone: true,
  templateUrl: './clients-shares.component.html',
  styleUrls: ['./clients-shares.component.scss'],
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
export class ClientsSharesComponent implements OnInit, AfterViewInit {
  displayedColumns = [
    'clientName',
    'accountNo',
    'productName',
    'approvedShares',
    'pendingShares',
  ];

  dataSource: MatTableDataSource<any> = new MatTableDataSource();
  totalRows = 0;
  pageSize = 50;
  currentPage = 0;
  isLoading = false;
  allShares: any[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private clientsService: ClientsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadShares();
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
            item.shareProductName?.toString().toLowerCase() ||
            item.productName?.toString().toLowerCase() ||
            ''
          );
        case 'approvedShares':
          return Number(item.summary?.totalApprovedShares) || 0;
        case 'pendingShares':
          return Number(item.summary?.totalPendingForApprovalShares) || 0;
        default:
          return item[property]?.toString().toLowerCase() || '';
      }
    };
  }

  loadShares(): void {
    this.isLoading = true;
    this.clientsService.getAllShares().subscribe({
      next: (data: any) => {
        const shares = data.pageItems || [];
        this.allShares = shares;
        this.dataSource.data = shares;
        this.totalRows = shares.length;
        this.isLoading = false;

        // Attach paginator and sort after data load
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: (err) => {
        console.error('Error loading share data', err);
        this.isLoading = false;
      },
    });
  }

  /** 🔹 Search */
  search(term: string): void {
    const keyword = term.trim().toLowerCase();
    if (!keyword) {
      this.dataSource.data = this.allShares;
      return;
    }

    this.dataSource.data = this.allShares.filter(
      (s) =>
        s.accountNo?.toLowerCase().includes(keyword) ||
        s.clientName?.toLowerCase().includes(keyword) ||
        s.shareProductName?.toLowerCase().includes(keyword) ||
        s.productName?.toLowerCase().includes(keyword)
    );
  }

  /** 🔹 Navigate to specific share account */
  navigateToShareAccount(event: MouseEvent, share: any): void {
    event.stopPropagation();
    if (share.clientId && share.id) {
      this.router.navigate([
        '/clients',
        share.clientId,
        'share-accounts',
        share.id,
        'general',
      ]);
    }
  }

  /** 🔹 Navigate to client profile */
  navigateToClient(event: MouseEvent, share: any): void {
    event.stopPropagation();
    if (share.clientId) {
      this.router.navigate(['/clients', share.clientId, 'general']);
    }
  }

}
