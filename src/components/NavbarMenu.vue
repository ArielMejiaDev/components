<template>
    <div id="nav" class="navbar-white">
      <div class="container flex items-center h-100 justify-between">
        <div class="logo">
          <img src="../assets/logos/logo.png" alt="Grupo alta logo">
        </div>
        <ul class="logos">
          <li class="link">Menu</li>
          <li class="link">Menu</li>
          <li class="link">Menu</li>
          <li class="link">Menu</li>
          <li class="link">Menu</li>
          <li class="link">Menu</li>
          <li class="link">Menu</li>
        </ul>
      </div>
    </div>
</template>

<script>
export default {
    name: 'NavbarMenu'
}
</script>

<style scoped>
  .item {
    border: 1px solid red; 
  }
  .navbar-white {
    background-color: white;
    height: 150px;
    color: black;
    border-bottom: 1px solid black;
    width: 100%;
  }
  .container {
    max-width: 100%;
    padding: 0 100px;
    box-sizing: border-box;
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
  .navbar-white .logos {
    display: flex;
    align-items: center;
  }
  .navbar-white ul.logos li {
    list-style: none;
    margin: 0 20px;
  }
  .navbar-white ul.logos li:last-child {
    margin-left: 100px;
  }
  /* -------------------------------------------------------------------------- */
  /*                                 Extra Large                                */
  /* -------------------------------------------------------------------------- */
  @media only screen and (min-width: 1401px) {
    .navbar-white ul.logos li {
      margin: 0 40px;
    }
    .navbar-white ul.logos li:last-child {
      margin-left: 160px;
    }
  }
  /* -------------------------------------------------------------------------- */
  /*                                   Tablet                                   */
  /* -------------------------------------------------------------------------- */
  @media only screen and (max-width: 1080px) {
    .navbar-white ul.logos li {
      display: none;
    }
    .navbar-white ul.logos li:last-child {
      display: block;
    }
  }
  /* -------------------------------------------------------------------------- */
  /*                                   Mobile                                   */
  /* -------------------------------------------------------------------------- */
  @media only screen and (max-width: 600px) {

  }

</style>