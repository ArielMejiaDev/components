<template>
  <div class="hero">

  </div>
</template>

<script>
export default {
    name: 'LandingHero',
}
</script>

<style lang="scss" scoped>
    .hero {
        width: 100%;
        height: 100vh;
        background: url('../assets/landing/hero.jpg');
        background-position: top center;
        background-size: cover;
        background-repeat: no-repeat;
        margin-bottom: 100px;
        @include tablet {
            background-size: cover;
            background-position: center;
        }
    }    
</style>