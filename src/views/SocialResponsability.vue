<template>
    <div class="social-responsability">
        <SiteNavbar/>
        <SocialResponsabilityMain/>
        <Footer/>
    </div>
</template>

<script>
import SiteNavbar from '@/components/SiteNavbar'
import SocialResponsabilityMain from '@/components/SocialResponsabilityMain'
import Footer from "@/components/Footer"
export default {
    name: 'SocialResposability',
    components: {
        SiteNavbar,
        SocialResponsabilityMain,
        Footer
    }
}
</script>