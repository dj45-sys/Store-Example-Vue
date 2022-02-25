<template>
  <NavBar/>
  <Categories/>
</template>

<script>
import NavBar from '@/components/Navbar.vue'
import Categories from '@/components/Categories.vue'
export default {
    name: 'StoRe',
    components: {
        NavBar,
        Categories
    }
}
document.title = 'Store'
</script>