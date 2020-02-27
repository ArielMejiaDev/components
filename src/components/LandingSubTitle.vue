<template>
  <div class="secondary-title">
      <h2>Nuestras empresas</h2>
  </div>
</template>

<script>
export default {
    name: 'LandingSubTitle',
}
</script>

<style lang="scss" scoped>
    .secondary-title {
        margin-top: 108px;
        margin-bottom: 117.5px;
        display: flex;
        align-items: center;
        justify-content: center;
        h2 {
            color: black;
            font-family: 'Montserrat', sans-serif;
            font-size: 16px;
            letter-spacing: 1.78px;
            line-height: 20px;
            text-transform: uppercase;
            padding-bottom: 20px;
            border-bottom: 1px solid $color-gold;
            width: fit-content;
            text-align: center;
        }
    }
</style>