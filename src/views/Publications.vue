<template>
  <div class="publications">
    <SiteNavbar></SiteNavbar>
    <PublicationsTitle></PublicationsTitle>
    <PublicationsGrid/>
    <SiteFooter></SiteFooter>
  </div>
</template>

<script>
import SiteNavbar from '@/components/SiteNavbar'
import PublicationsTitle from '@/components/PublicationsTitle'
import PublicationsGrid from '@/components/PublicationsGrid'
import SiteFooter from "@/components/SiteFooter"
export default {
    name: 'Publications',
    components: {
        SiteNavbar,
        PublicationsTitle,
        PublicationsGrid,
        SiteFooter
    }
}
</script>

<style lang="scss" scoped>

</style>