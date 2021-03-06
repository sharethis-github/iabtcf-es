var webpack = require('webpack');
var path = require('path');

module.exports = [
	{
    
    entry: {
      'cmpapi': './modules/cmpapi/lib/index.js',
      'stub': './modules/stub/lib/stub.js'
		},
    
    output: {
			path: path.resolve(__dirname, 'build'),
			publicPath: './',
			filename: '[name].bundle.js'
		},
    
    context: path.resolve(__dirname, ''),
    
    resolve: {
      extensions: ['.js'],
      modules: [
        path.resolve(__dirname, 'node_modules'),
        'node_modules'
      ],
    },
  
    module: {
      rules: [
        {
          test: /\.js?$/,
          exclude: /node_modules/,
          use: 'babel-loader'
        }
      ]
    },
    
    node: {
      global: true,
      process: false,
      Buffer: false,
      __filename: false,
      __dirname: false,
      setImmediate: false
    },
  
    optimization: {
      minimize: true
    },

		plugins: [
			new webpack.ProvidePlugin({
				'Promise': 'promise-polyfill'
      })
    ]
    
	}
];
