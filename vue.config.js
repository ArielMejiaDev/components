module.exports = {
  publicPath: '/grupo-alta-demo/',
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "~@/styles/_base.scss";` 
      },
    }
  }
}