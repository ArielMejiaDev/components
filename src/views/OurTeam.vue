<template>
    <div class="our-team">
        <Navbar />
        <ImageHeader :background="'our-team/banner.png'" :backgroundPosition="'center'" />
        <OurTeamTitle/>
        <OurTeamGrid/>
        <Footer/>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import ImageHeader from '@/components/ImageHeader'
import OurTeamTitle from '@/components/OurTeamTitle'
import OurTeamGrid from '@/components/OurTeamGrid'
import Footer from "@/components/Footer"
export default {
    name: 'OurTeam',
    components: {
        Navbar,
        ImageHeader,
        OurTeamTitle,
        OurTeamGrid,
        Footer
    }
}
</script>