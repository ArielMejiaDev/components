<template>
  <div class="out-team-title">
      <h2>Nuestro equipo</h2>
  </div>
</template>

<script>
export default {
    name: 'OurTeamTitle',
}
</script>

<style lang="scss" scoped>
    .out-team-title {
        width: 100%;
        h2 {
            @include goldTitle;
            margin-top: 79px;
            margin-bottom: 54px;
            @include mobile {
                margin-top: 46px;
                margin-bottom: 17px;
                font-size: 25px;
                font-weight: 700;
                line-height: 50px;
                text-align: center;
            }
        }
    }
</style>