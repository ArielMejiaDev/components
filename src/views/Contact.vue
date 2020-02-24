<template>
  <div class="contact active">
      <SiteNavbar></SiteNavbar>
      <ContactForm></ContactForm>
  </div>
</template>

<script>
import SiteNavbar from "@/components/SiteNavbar"
import ContactForm from "@/components/ContactForm"

export default {
    name: 'Contact',
    components: {
        SiteNavbar,
        ContactForm
    }
}
</script>