<template>
    <div class="landing-grid" id="companies">
        <div class="landing-grid__container">
            <figure v-for="company in companies" :key="company.id">
                <router-link :to="`empresa/${company.slug}`">
                    <img class="background" :src="require(`@/assets/landing/${company.background}`)" :alt="company.name">
                    <div class="overlay">
                        <img class="logo" :src="require(`@/assets/logos/${company.logo}`)" :alt="`${company.logo} logo`">
                    </div>
                </router-link>
            </figure>
        </div>
    </div>
</template>

<script>
export default {
    name: 'LandingGrid',
    data: function() {
        return {
            companies: [
                {
                    id: 1, 
                    name: 'Casa palopo',
                    slug: 'casa-palopo',
                    background: 'casa-palopo.jpg',
                    logo: 'logo_casa_palopo_white.svg'
                },
                {
                    id: 2, 
                    name: 'La esquina',
                    slug: 'la-esquina',
                    background: 'la-esquina.jpg',
                    logo: 'logo_la_esquina_white.svg'
                },
                {
                    id: 3, 
                    name: 'Adela',
                    slug: 'helados-adela',
                    background: 'adela.jpg',
                    logo: 'logo_adela_white.svg'
                },
                {
                    id: 4, 
                    name: 'Bizu',
                    slug: 'bizu',
                    background: 'bizu.jpg',
                    logo: 'logo_bizu_white.svg'
                },
                {
                    id: 5, 
                    name: 'Queseso',
                    slug: 'queseso',
                    background: 'queseso.jpg',
                    logo: 'logo_queseso_white.svg'
                },
                {
                    id: 6, 
                    name: 'Sbt',
                    slug: 'sbt',
                    background: 'sbt.jpg',
                    logo: 'logo_sbt_white.svg'
                },
                {
                    id: 7, 
                    name: 'Villa Bokeh',
                    slug: 'villa-bokeh',
                    background: 'villa_bokeh.jpg',
                    logo: 'logo_villa_bokeh_white.svg'
                },
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
    .landing-grid {
        width: 100%;
        margin-bottom: 130px;
        .landing-grid__container {
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
            //     height: 393px;
            //     @include tablet {
            //         height: 264px;
            //     }
            //     .background {
            //         object-fit: cover;
            //         height: 100%;
            //         width: 100%
            //     }
            // }
        }
    }
</style>