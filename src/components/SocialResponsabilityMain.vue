<template>
  <div class="social-responsability-main">

    <div class="social-responsability-main__container">

        <h1>Responsabilidad Social</h1>
        <p>
            En Grupo Alta estamos comprometidos a apoyar proyectos de nuestro país, 
            como Pintando Santa Catarina Palopó y Hogar Estuardo Mini.
        </p>

        <div class="social-responsability-main__container__grid">
            <figure v-for="beneficiary in beneficiaries" :key="beneficiary.id">
                <img :src="require(`@/assets/social-responsability/${beneficiary.image}`)" :alt="`${beneficiary.name} image`">
                <div class="overlay">
                    <img :src="require(`@/assets/social-responsability/${beneficiary.logo}`)" :alt="`${beneficiary.name} logo`">
                    <a :href="`${beneficiary.url}`" target="_blank">Ir a sitio web</a>
                </div>
            </figure>
        </div>

    </div>

  </div>
</template>

<script>
export default {
    name: 'SocialResponsabilityMain',
    data: function() {
        return {
            beneficiaries: [
                {
                    id: 1, 
                    name: 'Ayuvi',
                    image: 'ayuvi.jpg',
                    logo: 'ayuvi_logo.png',
                    url: 'https://ayuvi.org.gt/',
                },
                {
                    id: 2, 
                    name: 'Pintando a santa catarina palopo',
                    image: 'palopo.jpg',
                    logo: 'pintando_santa_catarina_palopo_logo.png',
                    url: 'https://pintandoelcambio.com/es/',
                },
            ]
        }
    }
}
</script>

<style lang="scss" scoped>

    .social-responsability-main {
        width: 100%;
        .social-responsability-main__container {
            @include generalMaxWidth;
            margin-bottom: 20px;
            h1 {
                margin-top: 89px;
                margin-bottom: 31px;
                @include goldTitle;
            }
            p {
                color: $color-gray;
                font-family: 'Montserrat', sans-serif;
                font-size: 16px;
                letter-spacing: 0.5px;
                line-height: 24px;
                text-align: center;
                width: 728px;
                @include tablet {
                    width: 100%;
                }
                margin: 0 auto;
                margin-bottom: 94px;
                @include tablet {
                    margin-bottom: 54px;
                }
            }
            .social-responsability-main__container__grid {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                @include mobile {
                    grid-template-columns: 1fr;
                }
                grid-gap: 10px;
                figure {
                    margin: 0;
                    width: 100%;
                    position: relative;
                    // &:hover .overlay {
                    //     visibility: visible;
                    //     opacity: 1;
                    // }
                    img {
                        width: 100%;
                        vertical-align: top;
                    }
                    .overlay {
                        position: absolute;
                        background-color: rgba($color: #000000, $alpha: .3);
                        top: 0;
                        right: 0;
                        bottom: 0;
                        left: 0;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        visibility: visible;
                        transition: all .3s;
                        opacity: 1;
                        @include tablet {
                            visibility: visible;
                            opacity: 1;
                        }
                        img {
                            width: 200px;
                            height: 90px;
                            @include mobile {
                                width: 100px;
                                height: 50px;
                            }
                            object-fit: contains;
                            margin-bottom: 63px;
                            @include tablet {
                                margin-bottom: 10px;
                            }
                        }
                        a {
                            display: block;
                            color: white;
                            border: 2px solid white;
                            text-align: center;
                            padding: 15px;
                            width: 80%;
                            @include mobile {
                                padding: 10px;
                                width: 60%;
                            }
                            font-family: 'Montserrat', sans-serif;
                            font-size: 14px;
                            font-weight: 700;
                            letter-spacing: 0.44px;
                            line-height: 17px;
                            text-transform: uppercase;
                            &:hover {
                                background-color: white;
                                color: black;
                                border: 2px solid white;
                            }
                        }
                    }
                }
            }
        }
    }

</style>