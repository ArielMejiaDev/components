module.exports = {
    css: {
      loaderOptions: {
        scss: {
          prependData: `@import "~@/styles/_base.scss";` 
        },
      }
    },
    publicPath: '/grupo-alta-demo/'
  }