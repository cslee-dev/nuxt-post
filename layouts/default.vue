<template>
  <div>
    <global-search-nav-bar />
    <nuxt />
  </div>
</template>

<script>
import GlobalSearchNavBar from "@/components/GlobalSearchNavBar";

export default {
  name: "default",
  components: {
    GlobalSearchNavBar,
  }
}
</script>

<style scoped>

</style>