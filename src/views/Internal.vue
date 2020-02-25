<template>
  <div class="internal">
      <ImageHeader :image="'internal/banners/adela.jpg'" />
      <InternalBody />
      <Footer />
  </div>
</template>

<script>
import ImageHeader from "@/components/ImageHeader"
import InternalBody from "@/components/InternalBody"
import Footer from "@/components/Footer"

export default {
    name: 'Internal',
    components: {
        ImageHeader,
        InternalBody,
        Footer
    }
}
</script>