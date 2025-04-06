module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-standard-scss',
    'stylelint-config-sass-guidelines',
    'stylelint-prettier/recommended',
  ],
  rules: {
    '@stylistic/function-parentheses-space-inside': 'never-single-line',
    'max-nesting-depth': 2,
    'no-descending-specificity': null,
    'selector-max-compound-selectors': 4,
    'selector-max-id': 1,
    'selector-no-qualifying-type': [
      true,
      {
        ignore: ['id','class'],
      },
    ],
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: ['ng-deep'],
      },
    ],
    "prettier/prettier": [
      true,
      {
        "singleQuote": true,
        "tabWidth": 2
      }
    ]
  },
};
