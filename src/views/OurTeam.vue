<template>
    <div class="our-team">
        <SiteNavbar/>
        <OurTeamCompanyBio/>
        <OurTeamCompanyTitle/>
        <OurTeamGrid/>
        <JoinOurTeamSection/>
        <SiteFooter/>
    </div>
</template>

<script>
import SiteNavbar from '@/components/SiteNavbar'
import OurTeamCompanyBio from '@/components/OurTeamCompanyBio'
import OurTeamCompanyTitle from '@/components/OurTeamTitle'
import OurTeamGrid from '@/components/OurTeamGrid'
import JoinOurTeamSection from '@/components/JoinOurTeamSection'
import SiteFooter from "@/components/SiteFooter"
export default {
    name: 'OurTeam',
    components: {
        SiteNavbar,
        OurTeamCompanyBio,
        OurTeamCompanyTitle,
        OurTeamGrid,
        JoinOurTeamSection,
        SiteFooter
    }
}
</script>

<style lang="scss" scoped>

</style>