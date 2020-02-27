<template>
  <div class="internal">
      <InternalHeader :background="'internal/banners/adela.jpg'" :logo="'internal/brands/adela.jpg'" />
      <InternalMain />
      <Footer />
  </div>
</template>

<script>
import InternalHeader from "@/components/InternalHeader"
import InternalMain from "@/components/InternalMain"
import Footer from "@/components/Footer"

export default {
    name: 'Internal',
    components: {
        InternalHeader,
        InternalMain,
        Footer
    }
}
</script>