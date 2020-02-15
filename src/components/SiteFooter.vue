<template>

    <footer>

        <div class="container">

            <div class="site-map">
                <h2>Mapa del sitio</h2>
                <ul>
                    <li>
                        <a href="#">Nosotros</a>
                    </li>
                    <li>
                        <a href="#">Nuestras empresas</a>
                    </li>
                    <li>
                        <a href="#">Responsabilidad social</a>
                    </li>
                    <li>
                        <a href="#">Publicaciones</a>
                    </li>
                    <li>
                        <a href="#">Contacto</a>
                    </li>
                </ul>
            </div>

            <div class="contact">
                <h2>Contacto</h2>

                <ul>
                    <li>
                        <a href="#">(+502) 2373-5000</a>
                    </li>
                    <li>
                        <a href="#">administracion@grupoalta.net</a>
                    </li>
                    <li>
                        <a href="#">2 calle 10-59 zona 14, Guatemala</a>
                    </li>

                    <li>
                        <a href="#" class="btn-gold">Waze</a>
                    </li>
                </ul>
                
            </div>

            <div class="logo"></div>

            <div class="credits">
                <p>
                    <span class="text-white">Grupo Alta 2020.</span> Todos los derechos reservados
                    Made by <span class="text-white">Buildawow</span>
                </p>
            </div>

        </div>

    </footer>
  
</template>

<script>
    export default {
    name: 'SiteFooter'
}
</script>

<style scoped>
    ul {
        margin: 0;
        padding: 0;
    }
    footer {
        width: 100%;
        height: 600px;
        background-color: black;
    }
    .container {
        max-width: 1278px;
        margin: 0 auto;
        height: 100%;
        padding: 0 40px;
        display: grid;
        grid-auto-columns: 25% 25% 50%;
        grid-column-gap: 20px;
        grid-template-areas: "site-map contact logo" "credits credits credits";
    }
    .site-map {
        grid-area: site-map;
    }
    .contact {
        grid-area: contact;
        z-index: 1;
    }
    .credits {
        grid-area: credits;
        color: #717171;
        font-family: 'Montserrat', sans-serif;
        font-size: 15px;
        letter-spacing: 1px;
        line-height: 30px;
    }
    .logo {
        grid-area: logo;
        background: url(../assets/footer/footer-desktop.jpg);
        background-position: center center;
        background-size: 80%;
        background-repeat: no-repeat;
    }
    footer h2 {
        color: #A67D32;
        font-family: 'Montserrat', sans-serif;
        font-size: 20px;
        line-height: 24px;
        margin-bottom: 34px;
    }
    footer ul a {
        color: #FFF;
        font-family: Montserrat;
        font-size: 16px;
        letter-spacing: 1.29px;
        line-height: 50px;

    }
    footer ul li {
        border-bottom: 1px solid #A67D32;
    }
    footer a.btn-gold {
        margin: 5px 0;
        padding: 5px 30px;
        display: block;
        text-align: center;
        background-color: #A67D32;
        border: none;
    }
    footer .contact ul li:last-child,
    footer .contact ul li:nth-child(3),
    footer .contact ul li:nth-child(4) {
        border: none;
    }
    .text-white {
        color: white;
    }
    /* -------------------------------------------------------------------------- */
    /*                                   Tablet                                   */
    /* -------------------------------------------------------------------------- */
    @media only screen and (max-width: 1080px) {
        footer {
            height: 800px;
        }
        .container {
            padding: 0 20px;
            grid-auto-columns: 50% 50%;
            grid-column-gap: 10px;
            grid-template-areas: "logo logo" "site-map contact" "credits credits";
        }
        .logo {
            height: 280px;
            background: url(../assets/footer/footer-mobile.jpg);
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center center;
        }
    }
    @media only screen and (max-width: 600px) {
        footer {
            height: 1000px;
        }
        footer .site-map a,
        footer .contact a {
            font-size: 12px;
        }
        .container {
            padding: 0;
            margin: 0 20px;
            grid-auto-columns: 100%;
            grid-template-areas: "logo" "site-map" "contact"  "credits";
        }
        .credits p {
            text-align: center;
        }
        .logo {
            height: 250px;
        }
    }
</style>