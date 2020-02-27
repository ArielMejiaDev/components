<template>
  <div class="hero">

  </div>
</template>

<script>
export default {
    name: 'Hero',
}
</script>

<style lang="scss" scoped>
    .hero {
        width: 100%;
        height: 100vh;
        @include tablet {
            height: 300px;
        }
        background: url('../assets/landing/hero.jpg');
        background-position: center;
        margin-bottom: 100px;
    }    
</style>