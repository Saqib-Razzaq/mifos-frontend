import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'mifosx-campaign-builder',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatTableModule, MatButtonModule],
  templateUrl: './campaign-builder.component.html',
  styleUrls: ['./campaign-builder.component.scss'],
})
export class CampaignBuilderComponent implements OnInit {
  displayedColumns = ['name', 'type', 'status'];
  campaigns = [
    { name: 'Welcome Campaign', type: 'SMS', status: 'Active' },
    { name: 'End of Month Reminder', type: 'Email', status: 'Scheduled' },
  ];

  ngOnInit(): void {}
}
