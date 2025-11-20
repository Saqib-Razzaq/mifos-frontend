import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../shared/shared.module'; // ✅

@Component({
  selector: 'mifosx-task-management',
  standalone: true,                 // ✅ explicit
  imports: [SharedModule],          // ✅ shared directives, pipes, material, etc.
  templateUrl: './task-management.component.html',
  styleUrls: ['./task-management.component.scss']
})
export class TaskManagementComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
