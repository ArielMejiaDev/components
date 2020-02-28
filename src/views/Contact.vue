<template>
  <div class="contact active">
      <Navbar />
      <ContactForm />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar"
import ContactForm from "@/components/ContactForm"

export default {
    name: 'Contact',
    components: {
        Navbar,
        ContactForm
    }
}
</script>