<template>
  <div class="publications">
    <SiteNavbar></SiteNavbar>
    <PublicationsTitle></PublicationsTitle>
    <PublicationsGrid/>
    <Footer />
  </div>
</template>

<script>
import SiteNavbar from '@/components/SiteNavbar'
import PublicationsTitle from '@/components/PublicationsTitle'
import PublicationsGrid from '@/components/PublicationsGrid'
import Footer from "@/components/Footer"
export default {
    name: 'Publications',
    components: {
        SiteNavbar,
        PublicationsTitle,
        PublicationsGrid,
        Footer
    }
}
</script>