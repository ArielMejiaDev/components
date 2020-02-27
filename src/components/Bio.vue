<template>
    <div class="bio">
        <div class="bio__container">
            <h3>GRUPO EN LA INDUSTRIA DE LA HOSPITALIDAD.</h3>
            <p>
                Tenemos el fin de crear marcas energéticas. 
                Constantemente a la vanguardia de la gastronomía, 
                el diseño, la moda y el entretenimiento.
                A través del trabajo en equipo cultivamos caminos de 
                innovación y curamos <strong>experiencias únicas</strong> para los ciudadanos del mundo.
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Bio',
}
</script>

<style lang="scss" scoped>
    .bio {
        height: 800px;
        width: 100%;
        background: url('../assets/landing/piscina.jpg');
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        .bio__container {
            @include generalMaxWidth;
            width: 729px;
            background-color: rgba($color: white, $alpha: .9);
            padding: 100px 90px 93px 90px;
            @include tablet {
                width: 80%;
                padding: 120px 20px;
            }
            @include mobile {
                width: 80%;
                padding: 60px 20px;
            }
            h3 {
                color: $color-gold;
                font-family: 'Montserrat', sans-serif;
                font-size: 16px;
                font-weight: 500;
                letter-spacing: 1.78px;
                line-height: 20px;
                text-align: center;
            }
            p {
                color: black;
                font-family: 'Montserrat', sans-serif;
                font-size: 14px;
                font-weight: 500;
                letter-spacing: 0.5px;
                line-height: 22px;
                text-align: center;
            }
        }
    }
</style>