/** Angular Imports */
import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../shared/shared.module'; // ✅

/**
 * Self service app configuration component.
 *
 * TODO: Complete functionality once API is available.
 */
@Component({
  selector: 'mifosx-app-configuration',
  standalone: true,                 // ✅ explicit
  imports: [SharedModule],          // ✅ shared directives, pipes, material, etc.
  templateUrl: './app-configuration.component.html',
  styleUrls: ['./app-configuration.component.scss']
})
export class AppConfigurationComponent implements OnInit {

  /** Placeholder for languages. */
  languages: any;
  /** Placeholder for date formats. */
  dateFormats: any;
  /** Placeholder for mobile app themes. */
  mobileAppThemes: any;
  /** Placeholder for mobile app fonts. */
  mobileAppFonts: any;
  /** Placeholder for online banking app themes. */
  onlineBankingAppThemes: any;
  /** Placeholder for online banking app fonts. */
  onlineBankingAppFonts: any;

  constructor() { }

  ngOnInit() {
  }

}
