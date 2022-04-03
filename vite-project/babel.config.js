module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-react',
    '@babel/preset-typescript',
  ],

  // Babel >= 7.13.0 (https://babeljs.io/docs/en/assumptions)
  plugins: [['@babel/plugin-proposal-class-properties']],
  assumptions: {
    setPublicClassFields: false,
  },
}
