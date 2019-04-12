module.exports = {
  presets: [
    '@vue/app'
  ],
  devServer: {
      proxy: 'http://cors-anywhere.herokuapp.com/',
  }
}
