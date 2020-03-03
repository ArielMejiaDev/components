<template>
  <div class="our-team-grid">
    <div class="our-team-grid__container">

        <div class="our-team-grid__container__picture" v-for="member in members" :key="member.name">
            <img :src="member.image" :alt="member.name">
            <div class="our-team-grid__container__picture__overlay"></div>
            <div class="our-team-grid__container__picture__data">
                <div class="our-team-grid__container__picture__data__name">
                    <h2>{{ member.name }}</h2>
                    <legend>{{ member.position }}</legend>
                </div>
                <div v-show="member.info" class="our-team-grid__container__picture__data__bio">
                    {{ member.info }}
                </div>
            </div>
        </div>

    </div>
  </div>
</template>

<script>
export default {
    name: 'OurTeamGrid',
    data: function() {
        return {
            members: [
                {name: 'Claudia Bosch',     image: require('../assets/our-team/claudia.jpg'),  position: 'Presidenta',                         info: 'Nuestra fundadora, la cabeza del grupo. Emprendedora y líder de un grupo experto en nuevas experiencias.'},
                {name: 'Marcela Bosch',     image: require('../assets/our-team/marcela.jpg'),  position: 'Directora creativa',                 info: ''},
                {name: 'Paul Bosch',        image: require('../assets/our-team/paul.jpg'),     position: 'Director SBT',                       info: ''},
                {name: 'Katina Bosch',      image: require('../assets/our-team/katina.jpg'),   position: 'Directora BIZÚ',                     info: ''},
                {name: 'Isabel Bosch',      image: require('../assets/our-team/isabel.jpg'),   position: 'Project Manager',                    info: ''},
                {name: 'Rocio de la peña',  image: require('../assets/our-team/rocio.jpg'),    position: 'Directora Ejecutiva',                info: ''},
                {name: 'Gabriela Estrada',  image: require('../assets/our-team/gabriela.jpg'), position: 'Cordinadora de Recursos Humanos',    info: 'Mejora Continua'},
                {name: 'Eduardo Gonzales',  image: require('../assets/our-team/eduardo.jpg'),  position: 'Chef Corporativo',                   info: 'Transparencia'},
                {name: 'Carmen Ochoa',      image: require('../assets/our-team/carmen.jpg'),    position: 'Gerente Residente Casa Palopó',      info: 'Salud Integral'},
                {name: 'Paula Lehnoff',     image: require('../assets/our-team/paula.jpg'),    position: 'Directora de Mercadeo',              info: 'Transparencia'},
                {name: 'Megan Skinner',     image: require('../assets/our-team/megan.jpg'),     position: 'Responsabilidad Social',             info: 'Agradecimiento'},
                
            ],
        }
    }
}
</script>

<style lang="scss" scoped>
    .our-team-grid {
        width: 100%;
        margin-bottom: 180px;
        @include mobile {
            margin-bottom: 72px;
        }
        .our-team-grid__container {
            @include generalMaxWidth();
            @include mobile {
                padding: 0;
            }
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(315px, 1fr));
            @include mobile {
                grid-template-columns: repeat(auto-fit, minmax(80%, 1fr));
            }
            grid-column-gap: 25px;
            grid-row-gap: 40px;
            @include mobile {
                grid-gap: 0;
            }
            .our-team-grid__container__picture {
                position: relative;
                width: 100%;
                overflow: hidden;
                img {
                    width: 100%;
                    vertical-align: top;
                }
                .our-team-grid__container__picture__overlay {
                    position: absolute;
                    top: 0;
                    right: 0;
                    bottom: 0;
                    left: 0;
                    background: linear-gradient(to bottom, transparent, rgba(0,0,0,.6));
                }
                .our-team-grid__container__picture__data {
                    position: absolute;
                    top: 0;
                    right: 0;
                    bottom: 0;
                    left: 0;
                    z-index: 2;
                    color: #fff;
                    padding: 20px;
                    box-sizing: border-box;
                    transition: all 0.4s;
                    transform: translateY(65%);
                    .our-team-grid__container__picture__data__name {
                        margin-bottom: 45%;
                        h2 {
                            color: #FFF;
                            font-family: 'Montserrat', sans-serif;
                            font-weight: 100;
                            font-size: 20px;
                            letter-spacing: 0.67px;
                            line-height: 22px;
                        }
                        legend {
                            color: #DBDBDB;
                            font-family: 'Montserrat', sans-serif;
                            font-size: 13px;
                            letter-spacing: 1px;
                            line-height: 22px;
                        }
                    }
                    .our-team-grid__container__picture__data__bio {
                        position: relative;
                        color: #C1C1C1;
                        font-family: 'Montserrat', sans-serif;
                        font-size: 14px;
                        letter-spacing: 0.5px;
                        line-height: 20px;
                        padding-top: 30px;
                        &::before {
                            content: '';
                            border: 1px solid $color-gold;
                            position: absolute;
                            top: 0;
                            left: 0;
                            width: 40%;
                        }
                        @include tablet {
                            display: none;
                        }
                    }
                }
                &:hover .our-team-grid__container__picture__data {
                    display: block;
                    position: absolute;
                    transform: translateY(0%);
                    @include tablet {
                        transform: translateY(65%);
                    }
                }
            }
        }
    }
</style>