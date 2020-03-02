<template>
    <footer>
        <div class="footer__container">
            <div class="footer__container__site-map">
                <h3>Mapa del sitio</h3>
                <ul>
                    <li>
                        <router-link to="/nosotros">Nosotros</router-link>
                    </li>
                    <li>
                        <router-link to="/responsabilidad-social">Responsabilidad social</router-link>
                    </li>
                    <li>
                        <router-link to="/publicaciones">Publicaciones</router-link>
                    </li>
                    <li>
                        <router-link to="/contacto">Contacto</router-link>
                    </li>
                </ul>
            </div>
            <div class="footer__container__contact">
                <h3>Contacto</h3>
                <ul>
                    <li>
                        <a href="tel:502-2373-5000">(+502) 2373-5000</a>
                    </li>
                    <li>
                        <a href="mailto:administracion@grupoalta.net">administracion@grupoalta.net</a>
                    </li>
                    <li>
                        <a href="#">2 calle 10-59 zona 14, Guatemala</a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="@/assets/footer/waze_logo.svg" alt="Waze">
                        </a>
                    </li>
                </ul>
            </div>
            <div class="footer__container__credits">
                <p>
                    <span>Grupo Alta 2020.</span> Todos los derechos reservados Made by <span>Buildawow</span>
                </p>
            </div>
            <img class="footer__container__isotype" src="@/assets/footer/footer-isotype.png" alt="Footer isotype">
        </div>
    </footer>
</template>

<script>
export default {
    name: 'Footer',
}
</script>

<style lang="scss" scoped>
    footer {
        position: relative;
        overflow: hidden;
        height: 525px;
        @include tablet {
            height: fit-content;
            padding: 40px 0;
        }
        background-color: black;
        color: white;
        .footer__container {
            @include generalMaxWidth;
            display: grid;
            grid-template-columns: 25% 25% 50%;
            grid-template-rows: 1fr 40px;
            @include tablet {
                grid-template-columns: 1fr 1fr;
                grid-template-rows: 1fr 100px;
            }
            @include mobile {
                grid-template-columns: 1fr;
                grid-template-rows: 1fr 1fr 100px;
            }
            .footer__container__site-map {
                grid-column: 1;
                @include mobile {
                    text-align: center;
                }
            }
            .footer__container__contact {
                grid-column: 2;
                @include tablet {
                    grid-column: 2;
                }
                @include mobile {
                    grid-column: 1;
                    text-align: center;
                }
                @include mobile {
                    ul li:last-child {
                        display: flex;
                        justify-content: center;
                    }
                }
                ul li:last-child a {
                    margin-top: 30px;
                    width: 100%;
                    height: 50px;
                    display: flex;
                    align-items: center;
                    @include tablet {
                        justify-content: center;
                    }
                    justify-content: flex-start;
                    max-width: 244px;
                    img {
                        height: 20px;
                        width: 95px;
                    }
                }
            }
            .footer__container__site-map, 
            .footer__container__contact {
                margin-top: 79px;
                @include tablet {
                    margin-top: 20px;
                }
                h3 {
                    color: #A67D32;
                    font-family: 'Montserrat', sans-serif;
                    font-size: 16px;
                    line-height: 20px;
                    margin-bottom: 38px;
                    font-weight: lighter;
                }
                ul li {
                    margin: 10px 0;
                }
                ul li a {
                    color: white;
                    font-family: 'Montserrat', sans-serif;
                    font-size: 13px;
                    letter-spacing: 1.04px;
                    line-height: 35px;
                }
            }
            .footer__container__credits {
                margin-top: 79px;
                @include tablet {
                    margin-top: 20px;
                }
                height: 40px;
                grid-column: 1/3;
                @include mobile {
                    grid-column: 1;
                    text-align: center;
                }
                color: #717171;
                font-family: 'Montserrat', sans-serif;
                font-size: 12px;
                letter-spacing: 0.8px;
                line-height: 20px;
                display: flex;
                align-items: center;
                justify-content: flex-start;
                span {
                    color: white;
                }
            }
            .footer__container__isotype {
                position: absolute;
                bottom: 0;
                right: 0;
                @include tablet {
                    display: none;
                }
            }
        }
    }
</style>