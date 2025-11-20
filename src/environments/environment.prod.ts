// Production environment configuration

import env from './.env';
const loadedEnv = window.env || {};

export const environment = {
  production: true,
  version: env.mifos_x.version,
  hash: env.mifos_x.hash,

  /** Tenant Info */
  fineractPlatformTenantId: 'default',
  fineractPlatformTenantIds: 'default',

  /** Multiple API endpoints for dropdown selection */
  baseApiUrls:
    loadedEnv.fineractApiUrls ||
    'https://pwdz.aheadbanker.com,https://sand.aheadbanker.com,https://sandbox.mifos.community,https://demo.mifos.community,https://localhost:8443',

  /** Default API URL */
  baseApiUrl:
    loadedEnv.fineractApiUrl ||
    (loadedEnv.fineractApiUrls?.length > 0
      ? loadedEnv.fineractApiUrls.split(',')[0]
      : 'https://pwdz.aheadbanker.com'),

  /** Allow user to select server in login page */
  allowServerSwitch: 'true',

  /** API paths */
  apiProvider: '/fineract-provider/api',
  apiVersion: '/v1',
  serverUrl: '',

  /** Auth & Session Config */
  enableRememberMe: false,
  oauth: {
    enabled: false,
    serverUrl: '',
    appId: ''
  },

  /** Warning Dialog */
  warningDialog: {
    title: 'Warning',
    content:
      'This system is for authorized use only. Unauthorized access will result in possible legal action. By accessing this system, you acknowledge that you are authorized to do so and that all data stored and processed here is confidential.',
    buttonText: 'Close'
  },

  /** Language */
  defaultLanguage: 'en-US',
  supportedLanguages: 'en-US',

  /** UI / Info Options */
  preloadClients: true,
  displayTenantSelector: 'true',
  displayBackEndInfo: 'true',

  /** Timing Configs */
  waitTimeForNotifications: 60,
  waitTimeForCOBCatchUp: 30,

  session: {
    timeout: {
      idleTimeout: 300000
    }
  },

  httpCacheEnabled: false,

  /** Password + Formatting Settings */
  minPasswordLength: 12,
  defaultCharDelimiter: ',',

  /** vNext API Settings (used by Transfers, etc.) */
  vNextApiUrl: 'https://apis.flexcore.mx',
  vNextApiProvider: '/vnext1',
  vNextApiVersion: '/v1.0',

  /** Feature Toggles */
  interbankTransfers: false,

  /** OIDC Auth (disabled) */
  OIDC: {
    oidcServerEnabled: false,
    oidcBaseUrl: '',
    oidcClientId: '',
    oidcApiUrl: '',
    oidcFrontUrl: ''
  }
};

/** Construct full API URL */
environment.serverUrl = `${environment.baseApiUrl}${environment.apiProvider}${environment.apiVersion}`;
