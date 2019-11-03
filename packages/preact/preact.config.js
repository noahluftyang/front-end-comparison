import DotenvWebpackPlugin from 'dotenv-webpack';

export default function(config, env, helpers) {
  // const { plugin } = helpers.getPluginsByName(config, 'DefinePlugin')[0];

  config.plugins = [
    ...config.plugins,
    new DotenvWebpackPlugin({
      path: '../../.env',
    }),
  ];
  // config.resolve.alias = {
  // 	...config.resolve.alias,
  // 	react: 'preact-compat',
  // 	'react-dom': 'preact-compat'
  // };
}
