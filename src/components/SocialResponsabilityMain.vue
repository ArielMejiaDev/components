<template>
  <div class="social-responsability-main">

    <div class="social-responsability-main__container">

        <div class="social-responsability-main__container__image">
            <img class="social-responsability-main__background" src="../assets/social-responsability/hero.png" alt="Social responsability image">
        </div>

        <div class="social-responsability-main__container__text">

            <div class="social-responsability-main__container__text__centerwrapper">
                
                <h1>Responsabilidad Social</h1>
                <p>
                    Creemos en un por lo tanto, apoyamos proyectos de sostenibilidad y 
                    compromiso con nuestra comunidad como Pintando Santa Catarina Palopo y Hogar Estuardo Mini.
                </p>

            </div>

            <div class="cards">

                <div class="card">

                    <img src="../assets/social-responsability/ayuvi.png" alt="Ayuvi picture">

                    <div class="overlay">
                        <img src="../assets/social-responsability/ayuvi-logo.png" alt="Ayuvi picture">
                        <a href="#" target="_blank">Ir al sitio web</a>
                    </div>

                </div>

                <div class="card">

                    <img src="../assets/social-responsability/ayuvi.png" alt="Ayuvi logo">

                    <div class="overlay">
                        <img src="../assets/social-responsability/ayuvi-logo.png" alt="Ayuvi picture">
                        <a href="#" target="_blank">Ir al sitio web</a>
                    </div>

                </div>

            </div>

        </div>

    </div>

  </div>
</template>

<script>
export default {
    name: 'SocialResponsabilityMain',
}
</script>

<style lang="scss" scoped>
    .social-responsability-main {
        width: 100%;
        position: relative;
        .social-responsability-main__container {
            @include generalMaxWidth();
            padding-left: 0;
            @include tablet {
                padding: 0;
            }
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: 800px;
            grid-template-areas: "social-responsability-main__container__image social-responsability-main__container__text";
            @include tablet {
                grid-template-columns: 1fr;
                grid-template-rows: 1fr;
                grid-template-areas: "social-responsability-main__container__image" "social-responsability-main__container__text";
            }
            grid-column-gap: 108px;
            .social-responsability-main__container__image {
                grid-area: social-responsability-main__container__image;
                img {
                    width: 100%;
                    object-fit: cover;
                }
            }
            .social-responsability-main__container__text {
                grid-area: social-responsability-main__container__text;
                position: relative;
                @include tablet {
                    @include generalMaxWidth();
                    margin: 23px 0 52px 0;                }
                .social-responsability-main__container__text__centerwrapper {
                    height: 50%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                }
                h1 {
                    @include goldTitle;
                    @include mobile {
                        text-align: center;
                        font-size: 30px;
                    }
                    @include sm-mobile {
                        text-align: center;
                        font-size: 25px;
                    }
                }
                p {
                    color: #797979;
                    font-family: 'Montserrat', sans-serif;
                    font-size: 16px;
                    letter-spacing: 0.5px;
                    line-height: 24px;
                    margin-bottom: 50px;
                }
                .cards {
                    position: absolute;
                    left: -250px;
                    bottom: 150px;
                    display: flex;
                    @include tablet {
                        position: initial;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        margin: 0;
                    }
                    .card {
                        width: 50%;
                        height: 350px;
                        margin: 0 10px 0 0;
                        position: relative;
                        @include tablet {
                            height: auto;
                            margin: 0 0 20px 0;
                        }
                        @include mobile {
                            width: 100%;
                        }
                        img {
                            width: 100%;
                            height: 100%;
                            object-fit: cover;
                            vertical-align: top;
                        }
                        .overlay {
                            height: 100%;
                            position: absolute;
                            top: 0;
                            right: 0;
                            bottom: 0;
                            left: 0;
                            background-color: rgba($color: #000000, $alpha: 0.3);
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            justify-content: center;
                            img {
                                width: 184.45px;
                                height: 89.71px;
                            }
                            a {
                                margin-top: 64px;
                                color: #FFF;
                                font-family: 'Montserrat', sans-serif;
                                font-size: 14px;
                                font-weight: 700;
                                letter-spacing: 0.44px;
                                line-height: 17px;
                                text-align: center;
                                border: 2px solid white;
                                padding: 14px 92.5px;
                                @include tablet {
                                    padding: 15px 30px;
                                    margin-top: 32px;
                                }
                                &:hover {
                                    background-color: white;
                                    color: black;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
</style>