<template>
  <div class="home">
    <SiteNavbar></SiteNavbar>
    <SiteFooter></SiteFooter>
  </div>
</template>

<script>
// @ is an alias to /src
import SiteNavbar from '@/components/SiteNavbar'
import SiteFooter from "@/components/SiteFooter"

export default {
  name: 'Home',
  components: {
    SiteNavbar,
    SiteFooter
  }
}
</script>

<style lang="scss">
  
</style>
