const autoprefixer = require('autoprefixer');

module.exports = {
  entry: [
    './app/sign_in.html',
    './app/sign_up.html',
    './app/dashboard_live.html',
    './app/manage_employee.html',
    './app/add_employee.html',
    './app/blank_group.html',
    './app/manage_group.html',
    './app/add_group.html',
    './app/group_add_employee.html',
    './app/src/scss/style.scss', 
    './app/src/js/script.js',
    './app/add_shift.html',
    './app/manage_shift.html'
  ],
  output: {
    filename: 'app/assets/js/bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: "raw-loader"
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'app/assets/css/bundle.css',
            },
          },
          {loader: 'extract-loader'},
          {loader: 'css-loader'},
          {loader: 'postcss-loader',
            options: {
              plugins: () => [autoprefixer()],
            },
          },
          {
            loader: 'sass-loader',
            options: {
              includePaths: ['./node_modules'],
            },
          }
        ],
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015'],
          plugins: ['transform-object-assign']
        },
      }
    ],
  },
  devServer: {
    port: 8080,
    contentBase: 'app',
    watchContentBase: true
  } 
};
