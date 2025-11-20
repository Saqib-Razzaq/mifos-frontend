/** Angular Imports */
import {
  Component,
  OnInit,
  Input,
  TemplateRef,
  ElementRef,
  ViewChild,
  AfterViewInit
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { TranslateModule } from '@ngx-translate/core';

/** Custom Components */
import { KeyboardShortcutsDialogComponent } from 'app/shared/keyboard-shortcuts-dialog/keyboard-shortcuts-dialog.component';

/** Custom Services */
import { AuthenticationService } from '../../authentication/authentication.service';
import { SettingsService } from 'app/settings/settings.service';
import { PopoverService } from '../../../configuration-wizard/popover/popover.service';
import { ConfigurationWizardService } from '../../../configuration-wizard/configuration-wizard.service';
import { AuthService } from 'app/zitadel/auth.service';

/** Environment Config */
import { environment } from '../../../../environments/environment';

/** Role-based menu map */
import { ROLE_MENU_MAP } from './role-menu-map';

/**
 * Sidenav component.
 */
@Component({
  selector: 'mifosx-sidenav',
  standalone: true,
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    MatIconModule,
    MatListModule,
    MatTooltipModule,
    MatButtonModule,
    MatDividerModule,
    FaIconComponent,
    TranslateModule
  ]
})
export class SidenavComponent implements OnInit, AfterViewInit {
  /** True if sidenav is in collapsed state. */
  @Input() sidenavCollapsed = false;

  /** Tooltip position */
  tooltipPosition = 'after';

  /** Username of authenticated user. */
  username = '';

  /** Tenant identifier */
  tenantIdentifier = 'default';

  /** Active Role ID */
  roleId: number | null = null;

  /** Menu list based on role */
  menuList: any[] = [];

  /* References for popover walkthroughs */
  @ViewChild('logo') logo: ElementRef<any>;
  @ViewChild('templateLogo') templateLogo: TemplateRef<any>;
  @ViewChild('chartOfAccounts') chartOfAccounts: ElementRef<any>;
  @ViewChild('templateChartOfAccounts') templateChartOfAccounts: TemplateRef<any>;

  constructor(
    private router: Router,
    public dialog: MatDialog,
    private authenticationService: AuthenticationService,
    private settingsService: SettingsService,
    private configurationWizardService: ConfigurationWizardService,
    private popoverService: PopoverService,
    private authService: AuthService
  ) {}

ngOnInit() {
  const credentials = this.authenticationService.getCredentials();
  //console.log('🔹 Raw credentials from AuthService:', credentials);

  this.username = credentials?.username || 'Unknown User';

  // Try reading role ID from localStorage first
  const storedRoleId = localStorage.getItem('roleId');
  //console.log('🔹 roleId from localStorage:', storedRoleId);

  // Check if credentials contain role info (common in Mifos)
  let roleIdFromCreds: number | null = null;

  if (credentials?.roles && Array.isArray(credentials.roles) && credentials.roles.length > 0) {
    // Take first role (or choose based on your logic)
    roleIdFromCreds = credentials.roles[0].id;
    //console.log('🔹 Found roles array in credentials:', credentials.roles);
    //console.log('✅ Extracted roleId from roles[0]:', roleIdFromCreds);
  }

  // Final resolved role ID (fallback = 1)
  this.roleId = storedRoleId ? parseInt(storedRoleId, 10) : roleIdFromCreds || 1;
  //console.log('✅ Final Resolved roleId used for menu:', this.roleId);

  // Load the correct menu
  this.menuList = ROLE_MENU_MAP[this.roleId] || ROLE_MENU_MAP['default'];
  //console.log('📋 Loaded Menu for Role:', this.menuList);

  // Tenant setup
  this.tenantIdentifier =
    this.settingsService.tenantIdentifier && this.settingsService.tenantIdentifier !== ''
      ? this.settingsService.tenantIdentifier
      : 'default';
}


  /** ✅ Load role-based menu */
  loadRoleMenu() {
    const storedRoleId = localStorage.getItem('roleId');
    const parsedRoleId = storedRoleId ? parseInt(storedRoleId, 10) : 1; // default to General
    if (parsedRoleId !== this.roleId) {
      this.roleId = parsedRoleId;
      this.menuList = ROLE_MENU_MAP[this.roleId] || ROLE_MENU_MAP['default'];
    }
  }

  /** Logout */
  logout() {
    if (!environment.OIDC.oidcServerEnabled) {
      this.authenticationService
        .logout()
        .subscribe(() => this.router.navigate(['/login'], { replaceUrl: true }));
    } else {
      this.authService.logout();
    }
  }

  /** Help link */
  help() {
    window.open(
      'https://mifosforge.jira.com/wiki/spaces/docs/pages/52035622/User+Manual',
      '_blank'
    );
  }

  /** Keyboard shortcuts dialog */
  showKeyboardShortcuts() {
    this.dialog.open(KeyboardShortcutsDialogComponent);
  }

  /** Popover walkthroughs */
  ngAfterViewInit() {
    if (this.configurationWizardService.showSideNav === true) {
      setTimeout(() => {
        this.showPopover(this.templateLogo, this.logo.nativeElement, 'bottom', true);
      });
    }
  }

  showPopover(
    template: TemplateRef<any>,
    target: HTMLElement | ElementRef<any>,
    position: string,
    backdrop: boolean
  ): void {
    setTimeout(
      () => this.popoverService.open(template, target, position, backdrop, {}),
      200
    );
  }

  /** Wizard navigation */
  previousStep() {
    this.configurationWizardService.showSideNav = false;
    this.configurationWizardService.showSideNavChartofAccounts = false;
    this.configurationWizardService.showToolbarAdmin = true;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['/home']);
  }

  nextStep() {
    this.configurationWizardService.showSideNav = false;
    this.configurationWizardService.showSideNavChartofAccounts = false;
    this.configurationWizardService.showBreadcrumbs = true;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['/home']);
  }
}
