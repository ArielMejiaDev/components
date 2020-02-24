<template>
    <div class="our-team">
        <SiteNavbar/>
        <OurTeamCompanyBio/>
        <OurTeamCompanyTitle/>
        <OurTeamGrid/>
        <JoinOurTeamSection/>
        <Footer/>
    </div>
</template>

<script>
import SiteNavbar from '@/components/SiteNavbar'
import OurTeamCompanyBio from '@/components/OurTeamCompanyBio'
import OurTeamCompanyTitle from '@/components/OurTeamTitle'
import OurTeamGrid from '@/components/OurTeamGrid'
import JoinOurTeamSection from '@/components/JoinOurTeamSection'
import Footer from "@/components/Footer"
export default {
    name: 'OurTeam',
    components: {
        SiteNavbar,
        OurTeamCompanyBio,
        OurTeamCompanyTitle,
        OurTeamGrid,
        JoinOurTeamSection,
        Footer
    }
}
</script>