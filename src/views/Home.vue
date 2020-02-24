<template>
  <div class="home">
    <SiteNavbar></SiteNavbar>
    <h1 class="title">Landing page coming soon... 🔨</h1>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import SiteNavbar from '@/components/SiteNavbar'
import Footer from "@/components/Footer"

export default {
  name: 'Home',
  components: {
    SiteNavbar,
    Footer
  }
}
</script>

<style lang="scss">
  .title {
    width: 100%;
    text-align: center;
    @include goldTitle;
    margin: 85px 0;
  }
</style>
