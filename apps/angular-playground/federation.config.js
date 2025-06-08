const { withNativeFederation, shareAll } = require('@angular-architects/native-federation/config');

const packageNamesToSkip = [];

module.exports = withNativeFederation({

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
    (packageName) => {
      const skip = packageNamesToSkip.find(p => packageName.startsWith(p));
      if (skip) {
        console.warn(`Skip package ${packageName}`);
      } else {
        console.warn(`Take package ${packageName}`);
      }
      return skip;
    }
    // Add further packages you don't need at runtime
  ]

  // Please read our FAQ about sharing libs:
  // https://shorturl.at/jmzH0

});
