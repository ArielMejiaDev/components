module.exports = {
  publicPath: '/grupo-alta/',
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "~@/styles/_base.scss";` 
      },
    }
  }
}