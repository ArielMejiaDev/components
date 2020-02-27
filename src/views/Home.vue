<template>
  <div class="home">
    <Hero/>
    <LandingTitle />
    <Bio />
    <SecondaryTitle />
    <LandingGrid />
    <SocialLinks />
    <Footer/>
  </div>
</template>

<script>
import Hero from "@/components/Hero"
import LandingTitle from "@/components/LandingTitle"
import Bio from "@/components/Bio"
import SecondaryTitle from "@/components/SecondaryTitle"
import LandingGrid from "@/components/LandingGrid"
import SocialLinks from "@/components/SocialLinks"
import Footer from "@/components/Footer"

export default {
  name: 'Home',
  components: {
    Hero,
    LandingTitle,
    Bio,
    SecondaryTitle,
    LandingGrid,
    SocialLinks,
    Footer
  }
}
</script>
