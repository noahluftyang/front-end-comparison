const { resolve } = require('path');

module.exports = {
  extends: resolve(__dirname, '.babelrc'),
  env: {
    test: {
      presets: [
        [
          '@babel/preset-env',
          {
            targets: {
              node: 'current',
            },
          },
        ],
      ],
    },
  },
};
