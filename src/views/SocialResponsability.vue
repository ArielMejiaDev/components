<template>
    <div class="social-responsability">
        <SiteNavbar/>
        <SocialResponsabilityMain/>
        <SiteFooter/>
    </div>
</template>

<script>
import SiteNavbar from '@/components/SiteNavbar'
import SocialResponsabilityMain from '@/components/SocialResponsabilityMain'
import SiteFooter from "@/components/SiteFooter"
export default {
    name: 'SocialResposability',
    components: {
        SiteNavbar,
        SocialResponsabilityMain,
        SiteFooter
    }
}
</script>

<style>

</style>