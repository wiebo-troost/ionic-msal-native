# Ionic MSAL Native

This is a simple Ionic Native plugin for [cordova-plugin-msal](https://github.com/wrobins/cordova-plugin-msal)

It can be used in similar fashion as the @ionic-native plugins for use on Android and iOS.

# Installation

You'll need to install both this Ionic plugin and the cordova plugin. cordova-plugin-msal takes variables from your MSAL configuration on the command line for it's installation. Please refer to [their README](https://github.com/wrobins/cordova-plugin-msal) for details.

```
$ ionic cordova plugin add cordova-plugin-msal --VARIABLE ....
$ npm install ionic-msal-native
```

# Usage

Provide Msal in the module:

```
...
import { Msal } from 'ionic-msal-native';
...


...
NgModule({
  imports: [
  ...
  ],
  providers:[Msal, ...]
})
```

```
// Msal is injected into the component or service
constructor(private msal: Msal) { }
```

Handling an interactive login.

```
    const options: any = {
      authorities: [
        {
          type: 'AAD',
          audience: 'AzureADMultipleOrgs',
          authorityUrl: "https://login.microsoftonline.com/organizations",
          default: true
        }
      ]
      , scopes: ['User.Read']
    }


    this.msal.msalInit(options).then((initResult) => {
      console.log("success result", initResult); //"OK"
      return initResult;
      },
      (err) => {
        console.log("error result", err);
      })
      .then(() => {
        return this.msal.signInInteractive()
      })
      .then((jwt) => {
        console.log("Signin Result", jwt)
      });
```

Please refer to the [Microsoft's Msal documentation](https://docs.microsoft.com/en-us/azure/active-directory/develop/msal-overview) as well as the [cordova-plugin-msal](https://github.com/wrobins/cordova-plugin-msal) for details on the configuation of Msal and the appropriate use of signInInteractive and signInSilent.

# Full API

```
interface MsalLogEntry {
    timestamp: string;
    threadId: number;
    correlationId: string;
    logLevel: string;
    containsPII: boolean;
    message: string;
}

enum MsalLogLevel {
    Verbose = "VERBOSE",
    Error = "ERROR",
    Warning = "WARNING",
    Info = "INFO"
}

class Msal {
    msalInit(config: any): Promise<any>;
    signInInteractive(options?: any): Promise<any>;
    signInSilent(accountId?: string): Promise<any>;
    signOut(accountId?: string): Promise<any>;
    getAccounts(): Promise<any[]>;
    startLogger(logLevel: MsalLogLevel): Observable<MsalLogEntry>;
}
```
