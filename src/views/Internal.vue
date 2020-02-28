<template>
    <div class="internal">
        <Navbar />
        <InternalHeader :background="currentCompany.images.banner.image" :backgroundPosition="currentCompany.images.banner.position" :logo="currentCompany.images.square" />
        <InternalMain :company="currentCompany" />
        <Footer />
    </div>
</template>

<script>
import Navbar from "@/components/Navbar"
import InternalHeader from "@/components/InternalHeader"
import InternalMain from "@/components/InternalMain"
import Footer from "@/components/Footer"
import companies from "@/data/companies.js"

export default {
    name: 'Internal',
    components: {
        Navbar,
        InternalHeader,
        InternalMain,
        Footer
    },
    data: function() {
        return {
            selected: this.$route.params.empresa,
            companies: companies
        }
    },
    computed: {
        currentCompany: function() {
            return this.companies.find(company => company.slug == this.selected)
        }
    },
}
</script>