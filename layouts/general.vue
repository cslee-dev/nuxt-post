<template>
  <div>
    <global-nav-bar />
    <nuxt />
  </div>
</template>

<script>
import GlobalNavBar from "@/components/GlobalNavBar";

export default {
  name: "default",
  components: {
    GlobalNavBar,
  }
}
</script>

<style scoped>

</style>