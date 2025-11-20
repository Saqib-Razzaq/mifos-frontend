/** Angular Imports */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

/** External Modules */
import { TranslateModule } from '@ngx-translate/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

/** Custom Modules */
import { IconsModule } from './icons.module';
import { MaterialModule } from './material.module';
import { PipesModule } from 'app/pipes/pipes.module';
import { DirectivesModule } from 'app/directives/directives.module';

/** Custom Components */
import { FormfieldComponent } from './form-dialog/formfield/formfield.component';
import { FormDialogComponent } from './form-dialog/form-dialog.component';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';
import { CancelDialogComponent } from './cancel-dialog/cancel-dialog.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { FooterComponent } from './footer/footer.component';
import { LanguageSelectorComponent } from './language-selector/language-selector.component';
import { ThemePickerComponent } from './theme-picker/theme-picker.component';
import { ChangePasswordDialogComponent } from './change-password-dialog/change-password-dialog.component';
import { EnableDialogComponent } from './enable-dialog/enable-dialog.component';
import { DisableDialogComponent } from './disable-dialog/disable-dialog.component';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { ErrorDialogComponent } from './error-dialog/error-dialog.component';
import { NotificationsTrayComponent } from './notifications-tray/notifications-tray.component';
import { SearchToolComponent } from './search-tool/search-tool.component';
import { KeyboardShortcutsDialogComponent } from './keyboard-shortcuts-dialog/keyboard-shortcuts-dialog.component';
import { ServerSelectorComponent } from './server-selector/server-selector.component';
import { TenantSelectorComponent } from './tenant-selector/tenant-selector.component';
import { ExternalIdentifierComponent } from './external-identifier/external-identifier.component';
import { EntityNotesTabComponent } from './tabs/entity-notes-tab/entity-notes-tab.component';
import { EntityDocumentsTabComponent } from './tabs/entity-documents-tab/entity-documents-tab.component';
import { EntityDatatableTabComponent } from './tabs/entity-datatable-tab/entity-datatable-tab.component';
import { DatatableSingleRowComponent } from './tabs/entity-datatable-tab/datatable-single-row/datatable-single-row.component';
import { DatatableMultiRowComponent } from './tabs/entity-datatable-tab/datatable-multi-row/datatable-multi-row.component';
import { SvgIconComponent } from './svg-icon/svg-icon.component';
import { ViewJournalEntryComponent } from './accounting/view-journal-entry/view-journal-entry.component';
import { ViewJournalEntryTransactionComponent } from './accounting/view-journal-entry-transaction/view-journal-entry-transaction.component';
import { AccountNumberComponent } from './account-number/account-number.component';
import { EntityNameComponent } from './entity-name/entity-name.component';
import { TransactionPaymentDetailComponent } from './transaction-payment-detail/transaction-payment-detail.component';
import { StepperButtonsComponent } from './steppers/stepper-buttons/stepper-buttons.component';
import { GlAccountSelectorComponent } from './accounting/gl-account-selector/gl-account-selector.component';
import { GlAccountDisplayComponent } from './accounting/gl-account-display/gl-account-display.component';
import { ViewSavingsAccountingDetailsComponent } from './accounting/view-savings-accounting-details/view-savings-accounting-details.component';
import { ThemeToggleComponent } from './theme-toggle/theme-toggle.component';
import { LongTextComponent } from './long-text/long-text.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { InputAmountComponent } from './input-amount/input-amount.component';
import { InputPasswordComponent } from './input-password/input-password.component';
import { DatetimePickerStubComponent } from './datetime-picker-stub/datetime-picker-stub.component';

/**
 * Shared Module
 * Contains reusable modules, directives, pipes, and components
 * shared across the entire application.
 */
@NgModule({
  imports: [
    /** Angular Core Modules */
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,

    /** External */
    TranslateModule.forChild(),
    FontAwesomeModule,

    /** Custom Modules */
    IconsModule,
    MaterialModule,
    PipesModule,
    DirectivesModule,

    /** Custom Standalone Components */
    FormfieldComponent,
    FormDialogComponent,
    DeleteDialogComponent,
    CancelDialogComponent,
    FileUploadComponent,
    FooterComponent,
    LanguageSelectorComponent,
    ThemePickerComponent,
    ChangePasswordDialogComponent,
    EnableDialogComponent,
    DisableDialogComponent,
    ConfirmationDialogComponent,
    KeyboardShortcutsDialogComponent,
    ErrorDialogComponent,
    NotificationsTrayComponent,
    SearchToolComponent,
    ServerSelectorComponent,
    TenantSelectorComponent,
    ExternalIdentifierComponent,
    EntityNotesTabComponent,
    EntityDocumentsTabComponent,
    EntityDatatableTabComponent,
    DatatableSingleRowComponent,
    DatatableMultiRowComponent,
    SvgIconComponent,
    ViewJournalEntryComponent,
    ViewJournalEntryTransactionComponent,
    AccountNumberComponent,
    EntityNameComponent,
    TransactionPaymentDetailComponent,
    StepperButtonsComponent,
    GlAccountSelectorComponent,
    GlAccountDisplayComponent,
    ViewSavingsAccountingDetailsComponent,
    ThemeToggleComponent,
    LongTextComponent,
    DropdownComponent,
    InputAmountComponent,
    InputPasswordComponent,
    DatetimePickerStubComponent
  ],
  exports: [
    /** Angular / External Modules */
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    FontAwesomeModule,

    /** Custom Modules */
    IconsModule,
    MaterialModule,
    PipesModule,
    DirectivesModule,

    /** Common Components */
    FileUploadComponent,
    FooterComponent,
    LanguageSelectorComponent,
    ServerSelectorComponent,
    ThemePickerComponent,
    NotificationsTrayComponent,
    SearchToolComponent,
    ErrorDialogComponent,
    TenantSelectorComponent,
    ExternalIdentifierComponent,
    AccountNumberComponent,
    EntityNotesTabComponent,
    EntityDocumentsTabComponent,
    EntityDatatableTabComponent,
    ViewJournalEntryComponent,
    ViewJournalEntryTransactionComponent,
    SvgIconComponent,
    EntityNameComponent,
    TransactionPaymentDetailComponent,
    StepperButtonsComponent,
    GlAccountSelectorComponent,
    GlAccountDisplayComponent,
    ViewSavingsAccountingDetailsComponent,
    ThemeToggleComponent,
    LongTextComponent,
    DropdownComponent,
    InputAmountComponent,
    InputPasswordComponent,
    DatetimePickerStubComponent
  ]
})
export class SharedModule {}
