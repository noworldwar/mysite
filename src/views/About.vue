<template>
  <div class="about">
    <TopBar />
    <h1>This is an about page</h1>
  </div>
</template>

<script>
import TopBar from '@/components/TopBarComponent/index.vue'

export default {
  name:'AboutPage',
  components: {
    TopBar,
  }
}
</script>