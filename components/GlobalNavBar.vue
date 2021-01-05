<template>
  <b-navbar
    class="mb-2"
    variant="dark"
    type="dark"
  >
    <b-container>
      <b-navbar-brand
        tag="h1"
        class="mb-0"
      >Nuxt-Memo
      </b-navbar-brand>
      <b-navbar-nav class="ml-auto">
        <b-nav-item>
          프로필
        </b-nav-item>
        <b-nav-item>
          로그인
        </b-nav-item>
      </b-navbar-nav>
    </b-container>
  </b-navbar>
</template>

<script>
export default {
  name: "GlobalNavBar"
}
</script>

<style scoped>

</style>