<template>

    <div id="nav" :class="navBarObject">
      <div :class="optionsActive">

        <div class="container">

          <h2>Nuestras empresas</h2>

          <div class="internals">

            <ul>
              <li>La esquina</li>
              <li>BIZÚ</li>
            </ul>

            <ul>
              <li>Helados Adela</li>
              <li>SBT</li>
            </ul>

            <ul>
              <li>Casa Palopó</li>
              <li>Queseso</li>
            </ul>

          </div>

          <div class="main-menu">

            <ul>

              <li><a href="#">Nosotros</a></li>
              <li><a href="#">Responsabilidad social</a></li>
              <li><a href="#">Publicaciones</a></li>
              <li><a href="#">Contacto</a></li>

            </ul>

          </div>

          <div class="social-networks">

            <ul>
              <li>Redes Grupo Alta: </li>
              <li>
                <a href="#">Facebook</a>
              </li>
              <li>•</li>
              <li>
                <a href="#">Instagram</a>
              </li>
            </ul>

          </div>

          <div class="internals-logos">

            <ul>
              <li>
                <img src="../assets/logos/logo_la_esquina_white.svg" alt="Logo La esquina">
              </li>
              <li>
                <img src="../assets/logos/logo_bizu_white.svg" alt="Logo Bizu">
              </li>
              <li>
                <img src="../assets/logos/logo_casa_palopo_white.svg" alt="Logo Casa Palopo">
              </li>
              <li>
                <img src="../assets/logos/logo_queseso_white.svg" alt="Logo Queseso">
              </li>
              <li>
                <img src="../assets/logos/logo_adela_white.svg" alt="Logo Adela">
              </li>
              <li>
                <img src="../assets/logos/logo_sbt_white.svg" alt="Logo SBT">
              </li>
            </ul>

          </div>

        </div>

      </div>

      <div class="container flex items-center h-100 justify-between">
        <div class="logo">
          <img v-if="! toggle" src="../assets/logos/logo.svg" alt="Grupo alta logo">
          <img v-if="toggle" src="../assets/logos/logo_blanco.svg" alt="Grupo alta logo">
        </div>
        <ul class="logos">
          <li class="link" v-if="! toggle">
            <img src="../assets/logos/logo_la_esquina_black.svg" alt="Logo La esquina">
          </li>
          <li class="link" v-if="! toggle">
            <img src="../assets/logos/logo_bizu_black.svg" alt="Logo Bizu">
          </li>
          <li class="link" v-if="! toggle">
            <img src="../assets/logos/logo_casa_palopo_black.svg" alt="Logo Casa Palopo">
          </li>
          <li class="link" v-if="! toggle">
            <img src="../assets/logos/logo_queseso_black.svg" alt="Logo Queseso">
          </li>
          <li class="link" v-if="! toggle">
            <img src="../assets/logos/logo_adela_black.svg" alt="Logo Adela">
          </li>
          <li class="link" v-if="! toggle">
            <img src="../assets/logos/logo_sbt_black.svg" alt="Logo SBT">
          </li>
          <li class="link"><button @click="toggleNavbar()">{{ menuLabel }}</button></li>
        </ul>
      </div>
     
    </div>

</template>

<script>
export default {
  name: 'NavbarMenu',
  data: function() {
    return {
      toggle: false,
      menuLabel: 'Menu'
    }
  },
  computed: {
    navBarObject: function() {
      return {
        'navbar navbar-white': ! this.toggle,
        'navbar navbar-black': this.toggle
      }
    },
    optionsActive: function() {
      return {
        'options': ! this.toggle,
        'options active': this.toggle,
      }
    },
  },
  methods: {
    toggleNavbar: function() {
      this.toggle = ! this.toggle
      this.menuLabel = 'Menu'
      if (this.toggle) {
        this.menuLabel = 'Cerrar'
      }
    }
  }
}
</script>

<style scoped>
  .navbar {
    height: 150px;
    width: 100%;
    position: relative;
    z-index: 1;
  }
  .navbar .logo img {
    height: 60px;
    width: 220px;
  }
  ul.logos .link:first-child img {
    width: 89px;
    height: 30px;
  }
  ul.logos .link:nth-child(2) img {
    width: 52px;
    height: 30px;
  }
  ul.logos .link:nth-child(3) img {
    width: 52px;
    height: 50px;
  }
  ul.logos .link:nth-child(4) img {
    width: 52px;
    height: 54px;
  }
  ul.logos .link:nth-child(5) img {
    width: 98px;
    height: 30px;
  }
  ul.logos .link:nth-child(6) img {
    width: 95px;
    height: 30px;
  }
  .navbar-white {
    background-color: white;
    color: black;
    border-bottom: 1px solid black;
  }
  .navbar-black {
    background-color: black !important;
    color: white !important;
  }
  .navbar-black .container:nth-child(2) {
    border-bottom: 1px solid goldenrod !important;
  }
  .container {
    max-width: 100%;
    padding: 0 100px;
    box-sizing: border-box;
    z-index: 2;
    position: relative;
  }
  .flex {
    display: flex;
  }
  .items-center {
    align-items: center;
  }
  .justify-between {
    justify-content: space-between;
  }
  .h-100 {
    height: 100%;
  }
  .navbar .logos {
    display: flex;
    align-items: center;
  }
  .navbar ul.logos li {
    list-style: none;
    margin: 0 20px;
  }
  .navbar ul.logos li:last-child {
    margin-left: 100px;
  }
  .navbar ul.logos li:last-child button {
    border: 0;
    padding: 0;
    font-size: 14px;
    font-family: 'Montserrat', sans-serif;
    outline-color: transparent;
    background-color: transparent;
    text-transform: uppercase;
    cursor: pointer;
  }
  .navbar-black ul.logos li:last-child button {
    color: white !important;
  }
  .item {
    border: 1px solid red; 
  }
  .options {
    position: absolute;
    height: 100vh;
    top: 0;
    transform: translateY(-100%);
    right: 0;
    bottom: 0;
    left: 0;
    background-color: black;
    z-index: 2;
    transition: .3s;
  }
  .options.active {
    transform: translateY(0);
  }
  .options .container {
    width: 912px;
    margin: 150px auto 0 auto;
  }
  .options .container:nth-of-type(1) h2 {
    color: #FFF;
    font-family: 'Montserrat', sans-serif;
    font-size: 20px;
    letter-spacing: 2px;
    line-height: 60px;
    text-align: center;
    padding-top: 49px;
  }
  .options .container:nth-child(1) .internals {
    color: #B08434;
    font-family: 'Montserrat', sans-serif;
    font-size: 20px;
    letter-spacing: 2px;
    line-height: 60px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .options .container:nth-child(1) .main-menu {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  .options .container:nth-child(1) .main-menu a {
    color: #FFF;
    font-family: 'Montserrat', sans-serif;
    font-size: 20px;
    letter-spacing: 2px;
    line-height: 60px;
  }
  .options .container:nth-child(1) .social-networks {
    font-family: 'Montserrat', sans-serif;
    font-size: 20px;
    letter-spacing: 2px;
    line-height: 70px;
    text-align: center;
    display: flex;
  }
  .options .container:nth-child(1) .social-networks ul li {
    display: inline-block;
  }
  .options .container:nth-child(1) .social-networks ul li:nth-child(2),
  .options .container:nth-child(1) .social-networks ul li:nth-child(3) {
    margin: 0 30px;
  }
  .options .container:nth-child(1) .social-networks ul li a {
    color: #FFF;
  }
  .options .container:nth-child(1) .internals-logos ul {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .options .container:nth-child(1) .internals-logos img:first-child {
    width: 95px;
    height: 33px;
  }
  .options .container:nth-child(1) .internals-logos img:nth-child(2) {
    width: 56px;
    height: 33px;
  }
  .options .container:nth-child(1) .internals-logos img:nth-of-type(3) {
    width: 56px;
    height: 55px;
  }
  .options .container:nth-child(1) .internals-logos img:nth-of-type(4) {
    width: 56px;
    height: 58px;
  }
  .options .container:nth-child(1) .internals-logos img:nth-of-type(5) {
    width: 105px;
    height: 33px;
  }
  .options .container:nth-child(1) .internals-logos img:nth-of-type(6) {
    width: 101px;
    height: 33px;
  }
  /* -------------------------------------------------------------------------- */
  /*                                 Extra Large                                */
  /* -------------------------------------------------------------------------- */
  @media only screen and (min-width: 1401px) {
    .navbar ul.logos li {
      margin: 0 40px;
    }
    .navbar ul.logos li:last-child {
      margin-left: 160px;
    }
  }
  /* -------------------------------------------------------------------------- */
  /*                                   Tablet                                   */
  /* -------------------------------------------------------------------------- */
  @media only screen and (max-width: 1080px) {
    .navbar ul.logos li {
      display: none;
    }
    .navbar ul.logos li:last-child {
      display: block;
    }
    .options .container:nth-child(1) .internals-logos {
      display: none
    }
    .options .container:nth-child(1) .social-networks ul li:nth-child(3) {
      display: none;
    }
    .options .container:nth-child(1) .social-networks {
      justify-content: center;
    }
    .options .container:nth-child(1) .internals {
      flex-direction: column;
    }
  }
  /* -------------------------------------------------------------------------- */
  /*                                   Mobile                                   */
  /* -------------------------------------------------------------------------- */
  @media only screen and (max-width: 600px) {
    .container {
      padding: 0 5px;
    }
    .navbar .logo img {
      height: 30px;
      width: 110px;
    }
    .navbar .navbar-black {
      font-size: 14px;
    }
    .options .container:nth-child(1) .social-networks {
      flex-direction: column;
    }
  }
</style>