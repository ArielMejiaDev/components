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
                {name: 'Claudia',         image: require('../assets/our-team/claudia.jpg'),           position: 'Presidenta',                         info: ''},
                {name: 'Marcela',         image: require('../assets/our-team/marcela.jpg'),           position: 'Directora creativa',                 info: ''},
                {name: 'Paul',            image: require('../assets/our-team/paul.jpg'),              position: 'Director SBT',                       info: ''},
                {name: 'Katina',          image: require('../assets/our-team/katina.jpg'),            position: 'Directora BIZÚ',                     info: ''},
                {name: 'Isabel',          image: require('../assets/our-team/isabel.jpg'),            position: 'Project Manager',                    info: ''},
                {name: 'Rocio',           image: require('../assets/our-team/rocio.jpg'),             position: 'Directora Ejecutiva',                info: ''},
                {name: 'Gabriela',        image: require('../assets/our-team/gabriela.jpg'),          position: 'Cordinadora de Recursos Humanos',    info: ''},
                {name: 'Eduardo',         image: require('../assets/our-team/eduardo.jpg'),           position: 'Chef Corporativo',                   info: ''},
                {name: 'Carmen',          image: require('../assets/our-team/carmen.jpg'),            position: 'Gerente Residente Casa Palopó',      info: ''},
                {name: 'Paula',           image: require('../assets/our-team/paula.jpg'),             position: 'Directora de Mercadeo',              info: ''},
                {name: 'Megan',           image: require('../assets/our-team/megan.jpg'),             position: 'Responsabilidad Social',             info: ''},

                {name: 'Anita',           image: require('../assets/our-team/anita.jpg'),             position: 'Asistente de SBT',                   info: ''},
                {name: 'Ariel',           image: require('../assets/our-team/ariel.jpg'),             position: 'Auxiliar de Mantenimiento',          info: ''},
                {name: 'Daniel',          image: require('../assets/our-team/daniel.jpg'),            position: 'Asistente en Contabilidad',          info: ''},
                {name: 'Edena',           image: require('../assets/our-team/edena.jpg'),             position: 'Auxiliar de Mantenimiento',          info: ''},
                {name: 'Ericka',          image: require('../assets/our-team/ericka.jpg'),            position: 'Gerente Comercial',                  info: ''},

                {name: 'Gabriela',        image: require('../assets/our-team/gabriela-rrhh.jpg'),     position: 'Coordinadora de Recusos Humanos',    info: ''},
                {name: 'Gerardo',         image: require('../assets/our-team/gerardo.jpg'),           position: 'Jefe de Contabilidad',               info: ''},
                {name: 'Griselda',        image: require('../assets/our-team/griselda.jpg'),          position: 'Modista Bizu',                       info: ''},
                {name: 'Hugo',            image: require('../assets/our-team/hugo.jpg'),              position: 'Director Financiero',                info: ''},
                {name: 'Isabel',          image: require('../assets/our-team/isabel-asesora.jpg'),    position: 'Asesora de Modas Bizu',              info: ''},

                {name: 'Jose Juan',       image: require('../assets/our-team/jose-juan.jpg'),         position: 'Asistente de Cuentas por Pagar',     info: ''},
                {name: 'Kevin',           image: require('../assets/our-team/kevin.jpg'),             position: 'Soporte IT',                         info: ''},
                {name: 'Maria Fernanda',  image: require('../assets/our-team/maria-fernanda.jpg'),    position: 'Diseñadora Gráfica',                 info: ''},
                {name: 'Rircardo',        image: require('../assets/our-team/ricardo.jpg'),           position: 'Diseñador Gráfico',                  info: ''},
                {name: 'Veronica',        image: require('../assets/our-team/veronica.jpg'),          position: 'Asistente-de-Dirección',             info: ''},
                
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
                    height: 383px;
                    object-fit: cover;
                    object-position: top;
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