<template>
    <div class="social-responsability">
        <Navbar />
        <ImageHeader :background="'social-responsability/banner.jpg'" :backgroundPosition="'top center'" />
        <SocialResponsabilityMain/>
        <Footer/>
    </div>
</template>

<script>
import Navbar from "@/components/Navbar"
import ImageHeader from "@/components/ImageHeader"
import SocialResponsabilityMain from '@/components/SocialResponsabilityMain'
import Footer from "@/components/Footer"
export default {
    name: 'SocialResposability',
    components: {
        Navbar,
        ImageHeader,
        SocialResponsabilityMain,
        Footer
    }
}
</script>