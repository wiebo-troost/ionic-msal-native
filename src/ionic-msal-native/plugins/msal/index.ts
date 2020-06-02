/**
 * This is a template for new plugin wrappers
 *
 * TODO:
 * - Add/Change information below
 * - Document usage (importing, executing main functionality)
 * - Remove any imports that you are not using
 * - Remove all the comments included in this template, EXCEPT the @Plugin wrapper docs and any other docs you added
 * - Remove this note
 *
 */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

/**
 * @name msal
 * @description
 * This plugin works with cordova-plugin-msal
 *
 * @usage
 * ```typescript
 * import { msal } from 'ionic-msal-native/msal';
 *
 *
 * constructor(private msal: msal) { }
 *
 * ...
 *
 *
 * this.msal.functionName('Hello', 123)
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
// @Plugin({
//   pluginName: 'Cordova MSAL Plugin',
//   plugin: 'cordova-plugin-msal', // npm package name, example: cordova-plugin-camera
//   pluginRef: 'cordova.plugins.msalPlugin', // the variable reference to call the plugin, example: navigator.geolocation
//   repo: 'https://github.com/wrobins/cordova-plugin-msal', // the github repository URL for the plugin
//   install: '', // OPTIONAL install command, in case the plugin requires variables
//   installVariables: [], // OPTIONAL the plugin requires variables
//   platforms: ['Android'] // Array of platforms supported, example: ['Android', 'iOS']
// })

declare const cordova:

@Injectable()
export class Msal {

  /**
   * This function does something
   * @param config {object} Some param to configure something
   * @return {Promise<any>} Returns a promise that resolves when something happens
   */

  msalInit(config: any): Promise<any> {
    return new Promise((resolve, reject) => {
      if (!cordova) {
        return reject("Cordova not available");
      }
      var msalLocal = cordova.plugins["msalPlugin"];
      if (!msalLocal) {
        return reject("please install cordova-plugin-msal");
      }
      msalLocal.msalInit(() => {
        resolve("OK")
      }, (err: any) => {
        reject(err);
      }, config)
    });
  }


  signInInteractive(options?: any): Promise<any> {
    return new Promise((resolve, reject) => {
      if (!cordova) {
        return reject("Cordova not available");
      }
      var msalLocal = cordova.plugins["msalPlugin"];
      if (!msalLocal) {
        return reject("please install cordova-plugin-msal");
      }
      msalLocal.signInInteractive((msg: any) => {
        resolve(msg)
      }, (err: any) => {
        reject(err);
      }, options)

    })
  }

  signInSilent(accountId?: string): Promise<any> {
    return new Promise((resolve, reject) => {
      if (!cordova) {
        return reject("Cordova not available");
      }
      var msalLocal = cordova.plugins["msalPlugin"];
      if (!msalLocal) {
        return reject("please install cordova-plugin-msal");
      }
      msalLocal.signInSilent((msg: any) => {
        resolve(msg)
      }, (err: any) => {
        reject(err);
      }, accountId)

    })
  }

  signOut(accountId?: string): Promise<any> {
    return new Promise((resolve, reject) => {
      if (!cordova) {
        return reject("Cordova not available");
      }
      var msalLocal = cordova.plugins["msalPlugin"];
      if (!msalLocal) {
        return reject("please install cordova-plugin-msal");
      }
      msalLocal.signOut((msg: any) => {
        resolve(msg)
      }, (err: any) => {
        reject(err);
      }, accountId)

    })
  }

}
