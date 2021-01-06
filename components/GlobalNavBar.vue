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
          to="/"
      >Nuxt-Memo
      </b-navbar-brand>
      <b-navbar-nav class="ml-auto">
        <b-nav-item to="/">
          메모장
        </b-nav-item>
        <b-nav-item to="profile">
          프로필
        </b-nav-item>
        <b-nav-item to="login">
          로그인
        </b-nav-item>
      </b-navbar-nav>
    </b-container>
  </b-navbar>
</template>

<script>
export default {
  name: 'GlobalNavBar',
};
</script>

<style scoped>

</style>