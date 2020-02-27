<template>
    <div class="social-links">
        <div class="social-links__container">
            <div class="text">
                <p>Nuestras redes</p>
                <h5>
                    Síguenos en nuestras redes y conoce más de Grupo Alta
                </h5>
                <p class="tags">
                    Facebook  •  Instagram   #GrupoAltaGt
                </p>
            </div>
            <figure>
                <img src="@/assets/landing/rectangle-1.png" alt="grid item">
            </figure>
            <figure>
                <img src="@/assets/landing/rectangle-2.png" alt="grid item">
            </figure>
            <figure>
                <img src="@/assets/landing/rectangle-3.png" alt="grid item">
            </figure>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SocialLinks',
}
</script>

<style lang="scss" scoped>
    .social-links {
        width: 100%;
        margin-bottom: 130px;
        .social-links__container {
            @include generalMaxWidth;
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            grid-gap: 40px;
            @include tablet {
                grid-template-columns: repeat(2, 1fr);
            }
            @include mobile {
                grid-template-columns: 1fr;
                grid-gap: 0;
            }
            figure {
                margin: 0;
                img {
                    width: 100%;
                    height: 100%;
                    vertical-align: top;
                }
            }
            .text {
                p {
                    color: $color-gray;
                    font-family: 'Montserrat', sans-serif;
                    font-size: 16px;
                    line-height: 20px;
                }
                h5 {
                    color: $color-gold;
                    font-family: 'Gelasio', sans-serif;
                    font-size: 20px;
                    font-style: italic;
                    line-height: 25px;
                }
                .tags {
                    color: $color-gray;
                    font-family: 'Montserrat', sans-serif;
                    font-size: 16px;
                    font-weight: 500;
                    line-height: 24px;
                    text-transform: capitalize;
                }
            }
        }
    }
</style>