module.exports = {
  publicPath: '/test/',
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "~@/styles/_base.scss";` 
      },
    }
  }
}