const { withNativeFederation, shareAll } = require('@angular-architects/native-federation/config');

module.exports = withNativeFederation({

  name: 'angular-playground-mfe',

  exposes: {
    './AppComponent': './apps/angular-playground-mfe/src/app/app.ts',
    './appRoutes': './apps/angular-playground-mfe/src/app/app-routes.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

  skip: [
    '@fontsource/roboto',
    '@fontsource/material-symbols-outlined',
    'rxjs/ajax',
    'rxjs/fetch',
    'rxjs/testing',
    'rxjs/webSocket',
    // Add further packages you don't need at runtime
  ]

  // Please read our FAQ about sharing libs:
  // https://shorturl.at/jmzH0

});
