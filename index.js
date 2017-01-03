'use strict';

module.exports.rules = {
  'no-impure': require(__dirname + '/rules/purecheck.js')
};

module.exports.configs = {
  'recommended': {
    'rules': {
      'purecheck/no-impure': 'warn'
    },
  }
};
