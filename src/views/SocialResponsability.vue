<template>
    <div class="social-responsability">
        <ImageHeader :background="'social-responsability/banner.jpg'" :backgroundPosition="'top center'" />
        <SocialResponsabilityMain/>
        <Footer/>
    </div>
</template>

<script>
import ImageHeader from "@/components/ImageHeader"
import SocialResponsabilityMain from '@/components/SocialResponsabilityMain'
import Footer from "@/components/Footer"
export default {
    name: 'SocialResposability',
    components: {
        ImageHeader,
        SocialResponsabilityMain,
        Footer
    }
}
</script>