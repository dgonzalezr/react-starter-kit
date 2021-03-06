module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-flow'],
  plugins: [
    'react-hot-loader/babel',
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-export-namespace-from',
    '@babel/plugin-proposal-throw-expressions',
    [
      'module-resolver',
      {
        root: ['./src']
      }
    ],
    [
      'babel-plugin-styled-components',
      {
        fileName: false,
        pure: true
      }
    ]
  ]
};
