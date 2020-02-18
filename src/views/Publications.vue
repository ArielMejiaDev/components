<template>
  <div class="publications">
    <SiteNavbar></SiteNavbar>
    <PublicationsTitle></PublicationsTitle>
    <SiteFooter></SiteFooter>
  </div>
</template>

<script>
import SiteNavbar from '@/components/SiteNavbar'
import PublicationsTitle from '@/components/PublicationsTitle'
import SiteFooter from "@/components/SiteFooter"
export default {
    name: 'Publications',
    components: {
        SiteNavbar,
        PublicationsTitle,
        SiteFooter
    }
}
</script>

<style lang="scss" scoped>

</style>