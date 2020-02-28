<template>
  <div class="publications">
    <Navbar/>
    <ImageHeader :background="'publications/banner.jpg'" :backgroundPosition="'center'" />
    <PublicationsTitle></PublicationsTitle>
    <PublicationsGrid/>
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar"
import ImageHeader from "@/components/ImageHeader"
import PublicationsTitle from '@/components/PublicationsTitle'
import PublicationsGrid from '@/components/PublicationsGrid'
import Footer from "@/components/Footer"
export default {
    name: 'Publications',
    components: {
      Navbar,
        ImageHeader,
        PublicationsTitle,
        PublicationsGrid,
        Footer
    }
}
</script>