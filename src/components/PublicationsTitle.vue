<template>
  <div class="publications-title">
      <h1>Publicaciones</h1>
  </div>
</template>

<script>
export default {
    name: 'PublicationsTitle'
}
</script>

<style lang="scss" scoped>
    .publications-title {
        h1 {
            @include goldTitle;
            width: 100%;
            text-align: center;
        }
    }
</style>