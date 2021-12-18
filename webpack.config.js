const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

module.exports = (_, { mode = 'development' }) => {
  return {
    mode,
    entry: {
      main: './src/main.ts',
    },

    output: {
      path: __dirname + '/build/',
      filename: 'js/main.js',
    },

    resolve: {
      extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js'],
      plugins: [new TsconfigPathsPlugin()],
    },

    plugins: [
      new CopyWebpackPlugin({
        patterns: [{ from: 'public' }],
      }),
    ],

    module: {
      rules: [
        {
          test: /\.(glsl|vert|tesc|tese|geom|frag|comp)$/,
          loader: 'ts-shader-loader',
        },
        {
          test: /\.tsx?$/,
          loader: 'ts-loader',
          options: {
            transpileOnly: mode === 'development',
          },
        },
      ],
    },

    devServer: {
      static: {
        directory: path.join(__dirname, 'public'),
      },
      client: {
        logging: 'info',
        overlay: true,
        progress: true,
        reconnect: true,
      },
      open: true,
      bonjour: true,
      compress: true,
      port: 3000,
    },
  }
}
