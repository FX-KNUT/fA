const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname + "/build")
  },
  module: {
    rules: [
      {
         test: /\.js|jsx$/,
         exclude: /(node_modules)/,
         use: {
             loader: 'babel-loader',    
             options: {
                 presets: ['@babel/preset-env', '@babel/preset-react']
             }         
         }
      },
      {
          test: /\.html/,
          use: {
              loader: 'html-loader',
              options: {
                  minimize: true
              }
          }
      },
      {
          test: /\.css/,
          use: {
              loader: 'css-loader'
          }
      },
      {
          test: /\.png|jpg$/,
          use: {
              loader: 'file-loader'
          }
      }
    ]
  },
  mode: "production"
};  