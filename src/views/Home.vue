<template>
  <div class="home">
    <Navbar />
    <LandingHero />
    <LandingTitle />
    <LandingBio />
    <LandingSubTitle />
    <LandingGrid />
    <LandingSocialLinks />
    <Footer/>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar"
import LandingHero from "@/components/LandingHero"
import LandingTitle from "@/components/LandingTitle"
import LandingBio from "@/components/LandingBio"
import LandingSubTitle from "@/components/LandingSubTitle"
import LandingGrid from "@/components/LandingGrid"
import LandingSocialLinks from "@/components/LandingSocialLinks"
import Footer from "@/components/Footer"

export default {
  name: 'Home',
  components: {
    Navbar,
    LandingHero,
    LandingTitle,
    LandingBio,
    LandingSubTitle,
    LandingGrid,
    LandingSocialLinks,
    Footer
  }
}
</script>
