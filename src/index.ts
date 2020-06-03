import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

declare const cordova: any;

export interface MsalLogEntry {
  timestamp: string;
  threadId: number;
  correlationId: string;
  logLevel: string;
  containsPII: boolean;
  message: string;
}

export enum MsalLogLevel {
  Verbose = 'VERBOSE',
  Error = 'ERROR',
  Warning = 'WARNING',
  Info = 'INFO',
}

/**
 * @name msal
 * @description
 * This plugin works with cordova-plugin-msal
 *
 * @usage
 * ...
 * import { Msal } from 'ionic-msal-native';
 * ...
 *
 *
 * ...
 * NgModule({
 *  imports: [
 *  ...
 *   ],
 *   providers:[Msal, ...]
 * })
 *
 * import { Msal } from 'ionic-msal-native';
 *
 * constructor(private msal: Msal) { }
 *
 */
@Injectable()
export class Msal {
  msalInit(config: any): Promise<any> {
    return new Promise((resolve, reject) => {
      if (!cordova) {
        return reject('Cordova not available');
      }
      var msalLocal = cordova.plugins['msalPlugin'];
      if (!msalLocal) {
        return reject('please install cordova-plugin-msal');
      }
      msalLocal.msalInit(
        () => {
          resolve('OK');
        },
        (err: any) => {
          reject(err);
        },
        config
      );
    });
  }

  signInInteractive(options?: any): Promise<any> {
    return new Promise((resolve, reject) => {
      if (!cordova) {
        return reject('Cordova not available');
      }
      const msalLocal = cordova.plugins['msalPlugin'];
      if (!msalLocal) {
        return reject('please install cordova-plugin-msal');
      }
      msalLocal.signInInteractive(
        (msg: any) => {
          resolve(msg);
        },
        (err: any) => {
          reject(err);
        },
        options
      );
    });
  }

  signInSilent(accountId?: string): Promise<any> {
    return new Promise((resolve, reject) => {
      if (!cordova) {
        return reject('Cordova not available');
      }
      const msalLocal = cordova.plugins['msalPlugin'];
      if (!msalLocal) {
        return reject('please install cordova-plugin-msal');
      }
      msalLocal.signInSilent(
        (msg: any) => {
          resolve(msg);
        },
        (err: any) => {
          reject(err);
        },
        accountId
      );
    });
  }

  signOut(accountId?: string): Promise<any> {
    return new Promise((resolve, reject) => {
      if (!cordova) {
        return reject('Cordova not available');
      }
      const msalLocal = cordova.plugins['msalPlugin'];
      if (!msalLocal) {
        return reject('please install cordova-plugin-msal');
      }
      msalLocal.signOut(
        (msg: any) => {
          resolve(msg);
        },
        (err: any) => {
          reject(err);
        },
        accountId
      );
    });
  }

  getAccounts(): Promise<any[]> {
    return new Promise((resolve, reject) => {
      if (!cordova) {
        return reject('Cordova not available');
      }
      const msalLocal = cordova.plugins['msalPlugin'];
      if (!msalLocal) {
        return reject('please install cordova-plugin-msal');
      }
      msalLocal.getAccounts(
        (accounts: any[]) => {
          resolve(accounts);
        },
        (err: any) => {
          reject(err);
        }
      );
    });
  }

  startLogger(logLevel: MsalLogLevel): Observable<MsalLogEntry> {
    return new Observable(observer => {
      if (!cordova) {
        return observer.error('Cordova not available');
      }
      const msalLocal = cordova.plugins['msalPlugin'];
      if (!msalLocal) {
        return observer.error('please install cordova-plugin-msal');
      }

      msalLocal.startLogger(
        (entry: MsalLogEntry) => {
          observer.next(entry);
        },
        (error: any) => {
          observer.error(error);
        },
        false,
        logLevel
      );
    });
  }
}
