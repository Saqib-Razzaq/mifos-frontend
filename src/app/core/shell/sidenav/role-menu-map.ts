// src/app/core/shell/sidenav/role-menu-map.ts

export const ROLE_MENU_MAP: Record<string | number, any[]> = {
  /** ------------------ GENERAL ROLE (ID: 11) ------------------ */
  11: [
    { name: 'Dashboard', icon: 'dashboard', route: '/dashboard' },
    { name: 'Overview', icon: 'insights', route: '/overview' },
    {
      name: 'Clients Mgmt',
      icon: 'groups',
      subMenus: [
        { name: 'Clients', route: '/clients' },
        { name: 'Loans', route: '/clients/loans' },
        { name: 'Savings', route: '/clients/savings' },
        { name: 'Shares', route: '/clients/shares' },
        { name: 'Fixed Deposits', route: '/clients/fixeddeposits' },
        { name: 'Time Deposits', route: '/clients/timedeposits' }
      ]
    },
    {
      name: 'Institution',
      icon: 'account_balance',
      subMenus: [
        { name: 'Branch Mgmt', route: '/organization/offices' },
        { name: 'Staff Mgmt', route: '/organization/employees' },
        { name: 'Standing Order History', route: '/organization/standing-instructions-history' }
      ]
    },
    {
      name: 'Users Admin',
      icon: 'manage_accounts',
      subMenus: [
        { name: 'Internal Users', route: '/appusers' },
        { name: 'External Users', route: '/self-service/users' }
      ]
    },
    {
      name: 'Finance Settings',
      icon: 'account_balance_wallet',
      subMenus: [
        { name: 'Chart of Account', route: '/accounting/chart-of-accounts' },
        { name: 'Charges', route: '/products/charges' },
        { name: 'Tax Setup', route: '/products/tax-configurations' },
        { name: 'Collateral Mgmt', route: '/products/collaterals' },
        { name: 'Floating/Base Rates', route: '/products/floating-rates' },
        { name: 'Delinquent Ranges', route: '/products/delinquency-bucket-configurations/ranges' },
        { name: 'Delinquent Buckets', route: '/products/delinquency-bucket-configurations/buckets' }
      ]
    },
    {
      name: 'Investors',
      icon: 'savings',
      subMenus: [
        { name: 'Investors', route: '/organization/investors' },
        { name: 'Manage Funds', route: '/organization/manage-funds' }
      ]
    },
    {
      name: 'Settings',
      icon: 'settings',
      subMenus: [
        { name: 'Holiday', route: '/organization/holidays' },
        { name: 'Working Days', route: '/organization/working-days' },
        { name: 'Currency', route: '/organization/currencies' },
        { name: 'SMS Campaign', route: '/organization/sms-campaigns' },
        { name: 'Adhoc Enquiry', route: '/organization/adhoc-query' }
      ]
    },
    {
      name: 'Bulk Upload',
      icon: 'cloud_upload',
      subMenus: [
        { name: 'Branches', route: '/organization/bulk-import/Offices' },
        { name: 'Staff', route: '/organization/bulk-import/Employees' },
        { name: 'Users', route: '/organization/bulk-import/Users' },
        { name: 'Clients/Customers', route: '/organization/bulk-import/Clients' },
        { name: 'Groups', route: '/organization/bulk-import/Groups' },
        { name: 'Centers', route: '/organization/bulk-import/Centers' },
        { name: 'Loan Accounts', route: '/organization/bulk-import/Loan Accounts' },
        { name: 'Savings', route: '/organization/bulk-import/Savings Accounts' },
        { name: 'Share Account', route: '/organization/bulk-import/Share Accounts' },
        { name: 'Fixed Deposits', route: '/organization/bulk-import/Fixed Deposit Accounts' },
        { name: 'Recurring Deposit', route: '/organization/bulk-import/Recurring Deposit Transactions' },
        { name: 'Chart Of Accounts', route: '/organization/bulk-import/Chart of Accounts' },
        { name: 'Guarantors', route: '/organization/bulk-import/Guarantors' },
        { name: 'Journal Entries', route: '/organization/bulk-import/Journal Entries' },
        { name: 'Loan Repayments', route: '/organization/bulk-import/Loan Repayments' },
        { name: 'Savings Transactions', route: '/organization/bulk-import/Savings Transactions' },
        { name: 'Fixed Deposits Transactions', route: '/organization/bulk-import/Fixed Deposit Transactions' },
        { name: 'Recurring Deposit Transactions', route: '/organization/bulk-import/Recurring Deposit Transactions' }
      ]
    },
    {
      name: 'General',
      icon: 'tune',
      subMenus: [
        { name: 'Roles and Permissions', route: '/system/roles-and-permissions' },
        { name: 'Marker Checker Settings', route: '/system/configure-mc-tasks' },
        { name: 'Entity Mapping', route: '/system/entity-to-entity-mapping' }
      ]
    },
    {
      name: 'Audit Activities',
      icon: 'fact_check',
      subMenus: [
        { name: 'Audit Trails', route: '/system/audit-trails' },
        { name: 'Login Activities', route: '/system/login-activities' }
      ]
    },
    { name: 'Campaign Builder', icon: 'campaign', route: '/system/campaign-builder' },
    { name: 'Profile', icon: 'account_circle', route: '/profile' }
  ],

 /** ------------------ ADMIN ROLE (12) ------------------ */
  12: [
    { name: 'Dashboard', icon: 'dashboard', route: '/dashboard' },
    { name: 'Overview', icon: 'insights', route: '/overview' },

    {
      name: 'Institution',
      icon: 'account_balance',
      subMenus: [
        { name: 'Branch Mgmt', route: '/organization/offices' },
        { name: 'Staff Mgmt', route: '/organization/employees' },
        { name: 'Standing Order History', route: '/organization/standing-instructions-history' }
      ]
    },

    {
      name: 'Users Admin',
      icon: 'manage_accounts',
      subMenus: [
        { name: 'Internal Users', route: '/appusers' },
        { name: 'External Users', route: '/external-user-management/external-users' },
        { name: 'User Mgmt', route: '/self-service/users' }
      ]
    },

    {
      name: 'Finance Settings',
      icon: 'account_balance_wallet',
      subMenus: [
        { name: 'Chart of Account', route: '/accounting/chart-of-accounts' },
        { name: 'Charges', route: '/products/charges' },
        { name: 'Tax Setup', route: '/products/tax-configurations' }
      ]
    },

    {
      name: 'Products Admin',
      icon: 'inventory_2',
      subMenus: [
        { name: 'Loan Products', route: '/products/loan-products' },
        { name: 'Saving Products', route: '/products/saving-products' },
        { name: 'Share Products', route: '/products/share-products' },
        { name: 'Fixed Deposit Products', route: '/products/fixed-deposit-products' },
        { name: 'Time Deposit', route: '/products/recurring-deposit-products' },
        { name: 'Product Mix', route: '/products/products-mix' }
      ]
    },

    {
      name: 'Investors',
      icon: 'savings',
      subMenus: [
        { name: 'Investors', route: '/organization/investors' },
        { name: 'Manage Funds', route: '/organization/manage-funds' }
      ]
    },

    {
      name: 'Settings',
      icon: 'settings',
      subMenus: [
        { name: 'Site Settings', route: '/settings' },
        { name: 'Holiday', route: '/organization/holidays' },
        { name: 'Working Days', route: '/organization/working-days' },
        { name: 'Payment Types', route: '/organization/payment-types' },
        { name: 'Password Rules', route: '/organization/password-preferences' },
        { name: 'Currency', route: '/organization/currencies' },
        { name: 'SMS Campaign', route: '/organization/sms-campaigns' },
        { name: 'Data Table Validation', route: '/organization/entity-data-table-checks' },
        { name: 'Adhoc Enquiry', route: '/organization/adhoc-query' }
      ]
    },

    {
      name: 'Bulk Upload',
      icon: 'cloud_upload',
      subMenus: [
        { name: 'Branches', route: '/organization/bulk-import/Offices' },
        { name: 'Staff', route: '/organization/bulk-import/Employees' },
        { name: 'Users', route: '/organization/bulk-import/Users' },
        { name: 'Clients/Customers', route: '/organization/bulk-import/Clients' },
        { name: 'Groups', route: '/organization/bulk-import/Groups' },
        { name: 'Centers', route: '/organization/bulk-import/Centers' },
        { name: 'Loan Accounts', route: '/organization/bulk-import/Loan Accounts' },
        { name: 'Savings', route: '/organization/bulk-import/Savings Accounts' },
        { name: 'Share Account', route: '/organization/bulk-import/Share Accounts' },
        { name: 'Fixed Deposits', route: '/organization/bulk-import/Fixed Deposit Accounts' },
        { name: 'Recurring Deposit', route: '/organization/bulk-import/Recurring Deposit Transactions' },
        { name: 'Chart Of Accounts', route: '/organization/bulk-import/Chart of Accounts' },
        { name: 'Guarantors', route: '/organization/bulk-import/Guarantors' },
        { name: 'Journal Entries', route: '/organization/bulk-import/Journal Entries' },
        { name: 'Loan Repayments', route: '/organization/bulk-import/Loan Repayments' },
        { name: 'Savings Transactions', route: '/organization/bulk-import/Savings Transactions' },
        { name: 'Fixed Deposits Transactions', route: '/organization/bulk-import/Fixed Deposit Transactions' },
        { name: 'Recurring Deposit Transactions', route: '/organization/bulk-import/Recurring Deposit Transactions' }
      ]
    },

    {
      name: 'General',
      icon: 'tune',
      subMenus: [
        { name: 'Manage Codes', route: '/system/codes' },
        { name: 'Local Data Tables', route: '/system/data-tables' },
        { name: 'Account Number Format', route: '/system/account-number-preferences' },
        { name: 'Roles and Permissions', route: '/system/roles-and-permissions' },
        { name: 'Marker Checker Settings', route: '/system/configure-mc-tasks' },
        { name: 'Entity Mapping', route: '/system/entity-to-entity-mapping' }
      ]
    },

    {
      name: 'Global Configuration',
      icon: 'build',
      subMenus: [
        { name: 'Configurations', route: '/system/configurations' },
        { name: '2FA Settings', route: '/system/configurations' }
      ]
    },

    {
      name: 'Integrations',
      icon: 'integration_instructions',
      subMenus: [
        { name: 'SMS - Other HTTP', route: '/system/external-services/sms' },
        { name: 'Email - SMTP', route: '/system/external-services/email' },
        { name: 'S3 Amazon', route: '/system/external-services/amazon-s3' },
        { name: 'Notification Services', route: '/external-services/notification' },
        { name: 'NIN - IPRS', route: '/system/external-services/nin-iprs' },
        { name: 'Credit Bureau (CRB)', route: '/system/external-services/crb' },
        { name: 'Exchange Rates', route: '/system/external-services/exchangeRates' },
        { name: 'ComplyCube', route: '/system/external-services/complycube' },
        { name: 'SMS - Twilio', route: '/system/external-services/twilio' },
        { name: 'Google Maps', route: '/system/external-services/googlemaps' },
        { name: 'Tawk To', route: '/system/external-services/tawkto' },
        { name: 'Paystack', route: '/system/external-services/paystack' },
        { name: 'External Events', route: '/system/external-events' },
        { name: 'Web Hooks', route: '/system/hooks' },
        { name: 'Two Factor Authentication', route: '/system/twofactor' }
      ]
    },

    { name: 'Batch Jobs', icon: 'schedule', route: '/system/manage-jobs' },

    { name: 'Report Mgmt', icon: 'bar_chart', route: '/system/reports' },

    {
      name: 'Audit Activities',
      icon: 'fact_check',
      subMenus: [
        { name: 'Audit Trails', route: '/system/audit-trails' },
        { name: 'Login Activities', route: '/system/login-activities' }
      ]
    },

    { name: 'Campaign Builder', icon: 'campaign', route: '/system/campaign-builder' },

    {
      name: 'Profile',
      icon: 'account_circle',
      subMenus: [
        { name: 'Profile', route: '/profile' },
        { name: 'Settings', route: '/settings' }
      ]
    }
  ],


  /** ------------------ CREDIT ROLE (7) ------------------ */
  7: [
    { name: 'Dashboard', icon: 'dashboard', route: '/dashboard' },
    { name: 'Overview', icon: 'insights', route: '/overview' },
    {
      name: 'Clients Mgmt',
      icon: 'groups',
      subMenus: [
        { name: 'Clients', route: '/clients' },
        { name: 'Loans', route: '/clients/loans' },
        { name: 'Savings', route: '/clients/savings' },
        { name: 'Shares', route: '/clients/shares' },
        { name: 'Fixed Deposits', route: '/clients/fixeddeposits' },
        { name: 'Time Deposits', route: '/clients/timedeposits' }
      ]
    },
    {
      name: 'Operation Tasks',
      icon: 'task',
      subMenus: [
        { name: 'Collateral Mgmt', route: '/products/collaterals' },
        { name: 'Standing Order History', route: '/organization/standing-instructions-history' },
        { name: 'Pending Tasks', route: '/checker-inbox-and-tasks/checker-inbox' },
        { name: 'Collections', route: '/collections/collection-sheet' },
        { name: 'Individual Collection Sheet', route: '/collections/individual-collection-sheet' }
      ]
    },
    {
      name: 'Products Admin',
      icon: 'inventory',
      subMenus: [
        { name: 'Loan Products', route: '/products/loan-products' },
        { name: 'Saving Products', route: '/products/saving-products' },
        { name: 'Share Products', route: '/products/share-products' },
        { name: 'Fixed Deposit Products', route: '/products/fixed-deposit-products' },
        { name: 'Time Deposit', route: '/products/recurring-deposit-products' },
        { name: 'Product Mix', route: '/products/products-mix' },
        { name: 'Charges', route: '/products/charges' },
        { name: 'Tax Setup', route: '/products/tax-configurations' },
        { name: 'Floating/Base Rates', route: '/products/floating-rates' },
        { name: 'Delinquent Ranges', route: '/products/delinquency-bucket-configurations/ranges' },
        { name: 'Delinquent Buckets', route: '/products/delinquency-bucket-configurations/buckets' }
      ]
    },
    {
      name: 'Loan Settings',
      icon: 'settings_applications',
      subMenus: [
        { name: 'Loan Provisioning', route: '/organization/provisioning-criteria' },
        { name: 'Loan Reassignment (Bulk)', route: '/organization/bulkloan' }
      ]
    },
    {
      name: 'Investors',
      icon: 'savings',
      subMenus: [
        { name: 'Investors', route: '/organization/investors' },
        { name: 'Manage Funds', route: '/organization/manage-funds' }
    ]
    },
    {
      name: 'Bulk Upload',
      icon: 'cloud_upload',
      subMenus: [
        { name: 'Branches', route: '/organization/bulk-import/Offices' },
        { name: 'Staff', route: '/organization/bulk-import/Employees' },
        { name: 'Users', route: '/organization/bulk-import/Users' },
        { name: 'Clients/Customers', route: '/organization/bulk-import/Clients' },
        { name: 'Groups', route: '/organization/bulk-import/Groups' },
        { name: 'Centers', route: '/organization/bulk-import/Centers' },
        { name: 'Loan Accounts', route: '/organization/bulk-import/Loan Accounts' },
        { name: 'Savings', route: '/organization/bulk-import/Savings Accounts' },
        { name: 'Share Account', route: '/organization/bulk-import/Share Accounts' },
        { name: 'Fixed Deposits', route: '/organization/bulk-import/Fixed Deposit Accounts' },
        { name: 'Recurring Deposit', route: '/organization/bulk-import/Recurring Deposit Transactions' },
        { name: 'Chart Of Accounts', route: '/organization/bulk-import/Chart of Accounts' },
        { name: 'Guarantors', route: '/organization/bulk-import/Guarantors' },
        { name: 'Journal Entries', route: '/organization/bulk-import/Journal Entries' },
        { name: 'Loan Repayments', route: '/organization/bulk-import/Loan Repayments' },
        { name: 'Savings Transactions', route: '/organization/bulk-import/Savings Transactions' },
        { name: 'Fixed Deposits Transactions', route: '/organization/bulk-import/Fixed Deposit Transactions' },
        { name: 'Recurring Deposit Transactions', route: '/organization/bulk-import/Recurring Deposit Transactions' }
      ]
    },
    {
      name: 'Reports',
      icon: 'bar_chart',
      subMenus: [
        { name: 'Clients', route: '/reports/Client' },
        { name: 'Loans', route: '/reports/Loan' },
        { name: 'Savings', route: '/reports/Savings' },
        { name: 'Funds', route: '/reports/Fund' },
        { name: 'All', route: '/reports' },
        { name: 'Portfolio', route: '/#' },
        { name: 'Aging Analysis', route: '/#' },
        { name: 'Installments', route: '/#' },
      ]
    },
    { name: 'Profile', icon: 'account_circle', route: '/profile' }
  ],

  /** ------------------ CSO ROLE (6) ------------------ */
  6: [
    { name: 'Dashboard', icon: 'dashboard', route: '/dashboard' },
    { name: 'Overview', icon: 'insights', route: '/overview' },
    {
      name: 'Clients Mgmt',
      icon: 'groups',
      subMenus: [
        { name: 'Clients', route: '/clients' },
        { name: 'Loans', route: '/clients/loans' },
        { name: 'Savings', route: '/clients/savings' },
        { name: 'Shares', route: '/clients/shares' },
        { name: 'Fixed Deposits', route: '/clients/fixeddeposits' },
        { name: 'Time Deposits', route: '/clients/timedeposits' }
      ]
    },
    {
      name: 'Teller / Cashier',
      icon: 'payments',
      subMenus: [
        { name: 'Tellers', route: '/organization/tellers' },
        { name: 'Cashiers', route: '/organization/tellers/1/cashiers' }
      ]
    },
    {
      name: 'Operation Tasks',
      icon: 'task_alt',
      subMenus: [
        { name: 'Collateral Mgmt', route: '/products/collaterals' },
        { name: 'Standing Order History', route: '/organization/standing-instructions-history' },
        { name: 'Pending Tasks', route: '/checker-inbox-and-tasks/checker-inbox' },
        { name: 'Client Approval', route: '/checker-inbox-and-tasks/client-approval' },
        { name: 'Loan Approval', route: '/checker-inbox-and-tasks/loan-approval' },
        { name: 'Loan Disbursal', route: '/checker-inbox-and-tasks/loan-disbursal' },
        { name: 'Reschedule Loan', route: '/checker-inbox-and-tasks/reschedule-loan' },
        { name: 'Collections', route: '/collections/collection-sheet' },
        { name: 'Individual Collection Sheet', route: '/collections/individual-collection-sheet' }  
      ]
    },
    {
      name: 'Reports',
      icon: 'bar_chart',
      subMenus: [
        { name: 'Clients', route: '/reports/Client' },
        { name: 'Loans', route: '/reports/Loan' },
        { name: 'Savings', route: '/reports/Savings' },
        { name: 'Funds', route: '/reports/Fund' },
        { name: 'All', route: '/reports' },
        { name: 'Portfolio', route: '/#' },
        { name: 'Aging Analysis', route: '/#' },
        { name: 'Installments', route: '/#' },
      ]
    },    { name: 'Profile', icon: 'account_circle', route: '/profile' }
  ],

  /** ------------------ FINANCE ROLE (8) ------------------ */
  8: [
    { name: 'Dashboard', icon: 'dashboard', route: '/dashboard' },
    { name: 'Overview', icon: 'insights', route: '/overview' },
    {
      name: 'Ledger Control',
      icon: 'book',
      subMenus: [
        { name: 'Frequent Postings', route: '/accounting/journal-entries/frequent-postings' },
        { name: 'Journal Entries', route: '/accounting/journal-entries/create' },
        { name: 'Search Journal', route: '/accounting/journal-entries' },
        { name: 'Provision Entries', route: '/accounting/provisioning-entries' },
        { name: 'Periodic Accruals', route: '/accounting/periodic-accruals' }
      ]
    },
    {
      name: 'Finance Ops',
      icon: 'account_balance_wallet',
      subMenus: [
        { name: 'Chart of Accounts', route: '/accounting/chart-of-accounts' },
        { name: 'Financial Activity Mapping', route: '/accounting/financial-activity-mappings' },
        { name: 'Accounting Rules', route: '/accounting/accounting-rules' },
        { name: 'Closing Entries', route: '/accounting/closing-entries' },
        { name: 'Migrate Branch Balances', route: '/accounting/migrate-opening-balances' },
        { name: 'Charges', route: '/products/charges' },
        { name: 'Tax Setup', route: '/products/tax-configurations' },
        { name: 'Floating/Base Rates', route: '/products/floating-rates' },
        { name: 'Deliquent Ranges', route: '/products/delinquency-bucket-configurations/ranges' },
        { name: 'Deliquent Buckets', route: '/products/delinquency-bucket-configurations/buckets' }
      ]
    },
    {
      name: 'Operation Tasks',
      icon: 'task',
      subMenus: [
        { name: 'Pending Tasks', route: '/checker-inbox-and-tasks/checker-inbox' },
        { name: 'Collections', route: '/collections/collection-sheet' },
        { name: 'Individual Collection Sheet', route: '/collections/individual-collection-sheet' }
      ]
    },
    {
      name: 'Investors',
      icon: 'savings',
      subMenus: [
        { name: 'Investors', route: '/organization/investors' },
        { name: 'Manage Funds', route: '/organization/manage-funds' }
      ]
    },
    {
      name: 'Finance Reports',
      icon: 'bar_chart',
      subMenus: [
        { name: 'Financials', route: '/reports/Accounting' },
        { name: 'Funds', route: '/reports/Fund' },
        { name: 'Portfolio', route: '/reports' },
        { name: 'Aging Analysis', route: '/reports/aging' },
        { name: 'Installments', route: '/reports/installments' },
        { name: 'Transactions', route: '/reports/transactions' },
      ]
    },
    { name: 'Profile', icon: 'account_circle', route: '/profile' }
  ],

  /** ------------------ audit ROLE (Role ID 10) ------------------ */
  10: [
    { name: 'Dashboard', icon: 'dashboard', route: '/dashboard' },
    { name: 'Overview', icon: 'insights', route: '/overview' },

    {
      name: 'Clients Mgmt',
      icon: 'groups',
      subMenus: [
        { name: 'Clients', route: '/clients' },
        { name: 'Loans', route: '/clients/loans' },
        { name: 'Savings', route: '/clients/savings' },
        { name: 'Shares', route: '/clients/shares' },
        { name: 'Fixed Deposits', route: '/clients/fixeddeposits' },
        { name: 'Time Deposits', route: '/clients/timedeposits' }
      ]
    },
    {
      name: 'Audit Activities',
      icon: 'fact_check',
      subMenus: [
        { name: 'Audit Trails', route: '/system/audit-trails' },
        { name: 'Login Activities', route: '/system/login-activities' }
      ]
    },
    {
      name: 'Operation Tasks',
      icon: 'task',
      subMenus: [
        { name: 'Collateral Mgmt', route: '/products/collaterals' },
        { name: 'Standing Order History', route: '/organization/standing-instructions-history' },
        { name: 'Pending Tasks', route: '/checker-inbox-and-tasks/checker-inbox' },
        { name: 'Collections', route: '/collections/collection-sheet' },
        { name: 'Individual Collection Sheet', route: '/collections/individual-collection-sheet' }
      ]
    },
    {
      name: 'Products Admin',
      icon: 'inventory_2',
      subMenus: [
        { name: 'Loan Products', route: '/products/loan-products' },
        { name: 'Saving Products', route: '/products/saving-products' },
        { name: 'Share Products', route: '/products/share-products' },
        { name: 'Fixed Deposit Products', route: '/products/fixed-deposit-products' },
        { name: 'Time Deposit', route: '/products/recurring-deposit-products' },
        { name: 'Product Mix', route: '/products/products-mix' }
      ]
    },
    {
      name: 'Loan Settings',
      icon: 'settings_applications',
      subMenus: [
        { name: 'Loan Provisioning', route: '/organization/provisioning-criteria' },
        { name: 'Loan Reassignment (Bulk)', route: '/organization/bulkloan' }
      ]
    },
    {
      name: 'Investors',
      icon: 'savings',
      subMenus: [{ name: 'Investors', route: '/organization/investors' }]
    },
    {
      name: 'Reports',
      icon: 'bar_chart',
      subMenus: [
        { name: 'Clients', route: '/reports/Client' },
        { name: 'Loans', route: '/reports/Loan' },
        { name: 'Savings', route: '/reports/Savings' },
        { name: 'Funds', route: '/reports/Fund' },
        { name: 'All', route: '/reports' }
      ]
    },
    {
      name: 'General',
      icon: 'tune',
      subMenus: [{ name: 'Marker Checker Settings', route: '/system/configure-mc-tasks' }]
    },
    { name: 'Profile', icon: 'account_circle', route: '/profile' }
  ],

  /** ------------------ RISK ROLE (Role ID 9) ------------------ */
  9: [
    { name: 'Dashboard', icon: 'dashboard', route: '/dashboard' },
    { name: 'Overview', icon: 'insights', route: '/overview' },

    {
      name: 'Clients Mgmt',
      icon: 'groups',
      subMenus: [
        { name: 'Clients', route: '/clients' },
        { name: 'Loans', route: '/clients/loans' },
        { name: 'Savings', route: '/clients/savings' },
        { name: 'Shares', route: '/clients/shares' },
        { name: 'Fixed Deposits', route: '/clients/fixeddeposits' },
        { name: 'Time Deposits', route: '/clients/timedeposits' }
      ]
    },
    {
      name: 'Operation Tasks',
      icon: 'pending_actions',
      subMenus: [
        { name: 'Collateral Mgmt', route: '/products/collaterals' },
        { name: 'Standing Order History', route: '/organization/standing-instructions-history' },
        { name: 'Pending Tasks', route: '/checker-inbox-and-tasks/checker-inbox' },
        { name: 'Collections', route: '/collections/collection-sheet' },
        { name: 'Individual Collection Sheet', route: '/collections/individual-collection-sheet' }
      ]
    },
    {
      name: 'Products Admin',
      icon: 'inventory',
      subMenus: [
        { name: 'Loan Products', route: '/products/loan-products' },
        { name: 'Saving Products', route: '/products/saving-products' },
        { name: 'Share Products', route: '/products/share-products' },
        { name: 'Fixed Deposit Products', route: '/products/fixed-deposit-products' },
        { name: 'Time Deposit', route: '/products/recurring-deposit-products' },
        { name: 'Product Mix', route: '/products/products-mix' },
        { name: 'Charges', route: '/products/charges' },
        { name: 'Tax Setup', route: '/products/tax-configurations' },
        { name: 'Floating/Base Rates', route: '/products/floating-rates' },
        { name: 'Delinquent Ranges', route: '/products/delinquency-bucket-configurations/ranges' },
        { name: 'Delinquent Buckets', route: '/products/delinquency-bucket-configurations/buckets' }
      ]
    },
    {
      name: 'Investors',
      icon: 'savings',
      subMenus: [{ name: 'Investors', route: '/organization/investors' }]
    },
    {
      name: 'Loan Settings',
      icon: 'settings_applications',
      subMenus: [
        { name: 'Loan Provisioning', route: '/organization/provisioning-criteria' },
        { name: 'Loan Reassignment (Bulk)', route: '/organization/bulkloan' }
      ]
    },
    {
      name: 'Reports',
      icon: 'analytics',
      subMenus: [
        { name: 'Clients', route: '/reports/Client' },
        { name: 'Loans', route: '/reports/Loan' },
        { name: 'Savings', route: '/reports/Savings' },
        { name: 'Funds', route: '/reports/Fund' },
        { name: 'All', route: '/reports' },
        { name: 'Portfolio', route: '#' },
        { name: 'Aging Analysis', route: '#' },
        { name: 'Installments', route: '#' }
      ]
    },
    { name: 'Profile', icon: 'account_circle', route: '/profile' }
  ],


  /** ------------------ DEFAULT ROLE ------------------ */
  default: [
    { name: 'Dashboard', icon: 'dashboard', route: '/dashboard' },
    { name: 'Overview', icon: 'insights', route: '/overview' },
    {
      name: 'Clients Mgmt',
      icon: 'groups',
      subMenus: [
        { name: 'Clients', route: '/clients' },
        { name: 'Loans', route: '/clients/loans' },
        { name: 'Savings', route: '/clients/savings' },
        { name: 'Shares', route: '/clients/shares' },
        { name: 'Fixed Deposits', route: '/clients/fixeddeposits' },
        { name: 'Time Deposits', route: '/clients/timedeposits' }
      ]
    },
    {
      name: 'Institution',
      icon: 'account_balance',
      subMenus: [
        { name: 'Branch Mgmt', route: '/organization/offices' },
        { name: 'Staff Mgmt', route: '/organization/employees' },
        { name: 'Standing Order History', route: '/organization/standing-instructions-history' }
      ]
    },
    {
      name: 'Users Admin',
      icon: 'manage_accounts',
      subMenus: [
        { name: 'Internal Users', route: '/appusers' },
        { name: 'External Users', route: '/self-service/users' }
      ]
    },
    {
      name: 'Finance Settings',
      icon: 'account_balance_wallet',
      subMenus: [
        { name: 'Chart of Account', route: '/accounting/chart-of-accounts' },
        { name: 'Charges', route: '/products/charges' },
        { name: 'Tax Setup', route: '/products/tax-configurations' },
        { name: 'Collateral Mgmt', route: '/products/collaterals' },
        { name: 'Floating/Base Rates', route: '/products/floating-rates' },
        { name: 'Delinquent Ranges', route: '/products/delinquency-bucket-configurations/ranges' },
        { name: 'Delinquent Buckets', route: '/products/delinquency-bucket-configurations/buckets' }
      ]
    },
    {
      name: 'Investors',
      icon: 'savings',
      subMenus: [
        { name: 'Investors', route: '/organization/investors' },
        { name: 'Manage Funds', route: '/organization/manage-funds' }
      ]
    },
    {
      name: 'Settings',
      icon: 'settings',
      subMenus: [
        { name: 'Holiday', route: '/organization/holidays' },
        { name: 'Working Days', route: '/organization/working-days' },
        { name: 'Currency', route: '/organization/currencies' },
        { name: 'SMS Campaign', route: '/organization/sms-campaigns' },
        { name: 'Adhoc Enquiry', route: '/organization/adhoc-query' }
      ]
    },
    {
      name: 'Bulk Upload',
      icon: 'cloud_upload',
      subMenus: [
        { name: 'Branches', route: '/organization/bulk-import/Offices' },
        { name: 'Staff', route: '/organization/bulk-import/Employees' },
        { name: 'Users', route: '/organization/bulk-import/Users' },
        { name: 'Clients/Customers', route: '/organization/bulk-import/Clients' },
        { name: 'Groups', route: '/organization/bulk-import/Groups' },
        { name: 'Centers', route: '/organization/bulk-import/Centers' },
        { name: 'Loan Accounts', route: '/organization/bulk-import/Loan Accounts' },
        { name: 'Savings', route: '/organization/bulk-import/Savings Accounts' },
        { name: 'Share Account', route: '/organization/bulk-import/Share Accounts' },
        { name: 'Fixed Deposits', route: '/organization/bulk-import/Fixed Deposit Accounts' },
        { name: 'Recurring Deposit', route: '/organization/bulk-import/Recurring Deposit Transactions' },
        { name: 'Chart Of Accounts', route: '/organization/bulk-import/Chart of Accounts' },
        { name: 'Guarantors', route: '/organization/bulk-import/Guarantors' },
        { name: 'Journal Entries', route: '/organization/bulk-import/Journal Entries' },
        { name: 'Loan Repayments', route: '/organization/bulk-import/Loan Repayments' },
        { name: 'Savings Transactions', route: '/organization/bulk-import/Savings Transactions' },
        { name: 'Fixed Deposits Transactions', route: '/organization/bulk-import/Fixed Deposit Transactions' },
        { name: 'Recurring Deposit Transactions', route: '/organization/bulk-import/Recurring Deposit Transactions' }
      ]
    },
    {
      name: 'General',
      icon: 'tune',
      subMenus: [
        { name: 'Roles and Permissions', route: '/system/roles-and-permissions' },
        { name: 'Marker Checker Settings', route: '/system/configure-mc-tasks' },
        { name: 'Entity Mapping', route: '/system/entity-to-entity-mapping' }
      ]
    },
    {
      name: 'Audit Activities',
      icon: 'fact_check',
      subMenus: [{ name: 'Audit Trails', route: '/system/audit-trails' }]
    },
    { name: 'Profile', icon: 'account_circle', route: '/profile' }
  ]
};

// Automatically add parent icon to all submenus if they don't already have one 
Object.keys(ROLE_MENU_MAP).forEach((roleId: string) => {
  ROLE_MENU_MAP[roleId].forEach((menuItem: any) => {
    if (menuItem.subMenus && menuItem.icon) {
      menuItem.subMenus = menuItem.subMenus.map((sub: any) => ({
        icon: menuItem.icon, // 👈 copy parent's icon
        ...sub
      }));
    }
  });
});
