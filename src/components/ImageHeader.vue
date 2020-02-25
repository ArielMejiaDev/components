<template>
  <div class="image-header">
      <img :src="require(`@/assets/${image}`)" alt="">
  </div>
</template>

<script>
export default {
    name: 'ImageHeader',
    props: {
        image: String
    }
}
</script>

<style lang="scss" scoped>

    .image-header {
        height: 600px;
        width: 100%;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

</style>