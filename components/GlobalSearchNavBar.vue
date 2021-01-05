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

        <b-nav-form class="mr-2">
          <b-input-group size="sm">
            <b-form-input placeholder="검색"></b-form-input>
            <b-input-group-append>
              <b-input-group-text>
                <b-icon icon="search" />
              </b-input-group-text>
            </b-input-group-append>
          </b-input-group>
        </b-nav-form>
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
  name: "GlobalSearchNavBar"
}
</script>

<style scoped>

</style>