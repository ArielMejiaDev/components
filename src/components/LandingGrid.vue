<template>
    <div class="landing-grid">
        <div class="landing-grid__container">
            <figure>
                <img class="background" src="@/assets/landing/casa-palopo.jpg" alt="Casa palopo">
                <div class="overlay">
                    <img class="logo" src="@/assets/logos/logo_casa_palopo_white.svg" alt="Casa palopo logo">
                </div>
            </figure>
            <figure>
                <img class="background" src="@/assets/landing/la-esquina.jpg" alt="La esquina">
                <div class="overlay">
                    <img class="logo" src="@/assets/logos/logo_la_esquina_white.svg" alt="La esquina logo">
                </div>
            </figure>
            <figure>
                <img class="background" src="@/assets/landing/adela.jpg" alt="Casa palopo">
                <div class="overlay">
                    <img class="logo" src="@/assets/logos/logo_adela_white.svg" alt="Adela logo">
                </div>
            </figure>
            <figure>
                <img class="background" src="@/assets/landing/bizu.jpg" alt="Bizu palopo">
                <div class="overlay">
                    <img class="logo" src="@/assets/logos/logo_bizu_white.svg" alt="Bizu logo">
                </div>
            </figure>
            <figure>
                <img class="background" src="@/assets/landing/queseso.jpg" alt="Casa palopo">
                <div class="overlay">
                    <img class="logo" src="@/assets/logos/logo_queseso_white.svg" alt="Queseso logo">
                </div>
            </figure>
            <figure>
                <img class="background" src="@/assets/landing/sbt.jpg" alt="Sbt palopo">
                <div class="overlay">
                    <img class="logo" src="@/assets/logos/logo_sbt_white.svg" alt="Sbt logo">
                </div>
            </figure>
            <figure>
                <img class="background" src="@/assets/landing/sbt.jpg" alt="Villa Bokeh">
                <div class="overlay">
                    <img class="logo" src="@/assets/logos/logo_sbt_white.svg" alt="Villa Bokeh logo">
                </div>
            </figure>
        </div>
    </div>
</template>

<script>
export default {
    name: 'LandingGrid',
}
</script>

<style lang="scss" scoped>
    .landing-grid {
        width: 100%;
        margin-bottom: 130px;
        .landing-grid__container {
            // @include generalMaxWidth;
            padding: 0 10px;
            @include mobile {
                padding: 0;
            }
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            @include mobile {
                grid-template-columns: 1fr;
            }
            grid-column-gap: 10px;
            grid-row-gap: 10px;
            figure {
                width: 100%;
                height: 100%;
                margin: 0;
                padding: 0;
                position: relative;
                overflow: hidden;
                &:hover .overlay {
                    background-color: rgba($color: #000000, $alpha: 0);
                }
                &:hover .background {
                    transform: scale(1.3);
                }
                .background {
                    width: 100%;
                    height: 100%;
                    vertical-align: top;
                    transform: scale(1);
                    transition: all 2.0s;
                }
                .overlay {
                    background-color: rgba($color: black, $alpha: .3);
                    position: absolute;
                    top: 0;
                    right: 0;
                    bottom: 0;
                    left: 0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    .logo {
                        width: 110px;
                        height: 92px;
                    }
                }
            }
            // figure:last-child {
            //     grid-column: 1 / span 2;
            //     height: 500px;
            //     img {
            //         object-fit: cover;
            //     }
            // }
        }
    }
</style>