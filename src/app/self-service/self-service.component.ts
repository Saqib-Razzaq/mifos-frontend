import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

/**
 * Root component for the Self Service feature module.
 */
@Component({
  selector: 'mifosx-self-service',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './self-service.component.html',
  styleUrls: ['./self-service.component.scss']
})
export class SelfServiceComponent {}
