<template>
  <div class="internal">
      <ImageInternalHeader :background="'internal/banners/adela.jpg'" :logo="'internal/brands/adela.jpg'" />
      <InternalBody />
      <Footer />
  </div>
</template>

<script>
import ImageInternalHeader from "@/components/ImageInternalHeader"
import InternalBody from "@/components/InternalBody"
import Footer from "@/components/Footer"

export default {
    name: 'Internal',
    components: {
        ImageInternalHeader,
        InternalBody,
        Footer
    }
}
</script>