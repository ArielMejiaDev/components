<template>
  <div class="image-header" :style="{background: `url(${ require(`@/assets/${background}`) })`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }">
    <div class="image-header__container">
        <div class="image-header__container__company-logo">
            <img :src="require(`@/assets/${logo}`)" alt="">
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'ImageInternalHeader',
    props: {
        background: String,
        logo: String
    }
}
</script>

<style lang="scss" scoped>

    .image-header {
        height: 600px;
        @include tablet {
            height: 300px;
        }
        width: 100%;
        .image-header__container {
            @include generalMaxWidth;
            display: flex;
            align-items: flex-end;
            justify-content: flex-end;
            @include tablet {
                align-items: center;
                justify-content: center;
                width: 80%;
            }
            height: 100%;
            position: relative;
            .image-header__container__company-logo {
                position: absolute;
                bottom: -150px;
                @include sm-mobile {
                    width: 80%;
                }
                img {
                    height: 350px;
                    width: 350px;
                    @include tablet {
                        max-width: 350px;
                        object-fit: cover;
                    }
                    @include mobile {
                        height: 264px;
                        width: 264px;
                    }
                    @include sm-mobile {
                        height: auto;
                        width: 100%;
                    }
                    vertical-align: top;
                }
            }
        }
    }

</style>