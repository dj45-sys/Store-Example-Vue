<template>  
  <Navbar/>
  <Cover/>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Cover from '@/components/Cover.vue'
export default {
  name: 'HoMe',
  components: {
    Navbar,
    Cover
  },
}
document.title = 'Home'
</script>