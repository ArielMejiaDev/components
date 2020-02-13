<template>
  <div class="home">
    <NavbarMenu></NavbarMenu>
  </div>
</template>

<script>
// @ is an alias to /src
import NavbarMenu from '@/components/NavbarMenu'

export default {
  name: 'Home',
  components: {
    NavbarMenu
  }
}
</script>
