<template>
  <b-container style="height:90vh">
    <b-row class="d-flex justify-content-center "
      align-v="center"
      style="height:100%">
      <b-col
        sm="12"
        lg="6"
      >
        <b-card
          no-body
        >
          <b-card-body>
            <b-card-title>
              로그인
            </b-card-title>
            <b-card-sub-title>
              서비스를 이용하기 위해서 계정이 필요합니다.
            </b-card-sub-title>
          </b-card-body>
          <b-card-body>
            <b-form>
              <b-form-group
                id="input-group-1"
                label="아이디 :"
                label-for="input-1"
                description="회원가입시 입력한 유저명을 입력해주세요."
              >
                <b-form-input
                  id="input-1"
                  v-model="form.username"
                  type="text"
                  placeholder="아이디"
                  required
                ></b-form-input>
              </b-form-group>

              <b-form-group
                id="input-group-2"
                label="비밀번호 :"
                label-for="input-2"
              >
                <b-form-input
                  id="input-2"
                  type="password"
                  v-model="form.password"
                  placeholder="비밀번호"
                  required
                ></b-form-input>
              </b-form-group>
              <b-button
                type="submit"
                variant="primary"
              >
                로그인
              </b-button>
            </b-form>
          </b-card-body>
        </b-card>

        <b-card class="mt-2">
          <b-card-sub-title>
            메모 서비스를 이용하기 위해 가입하기. <b-link>회원가입</b-link>
          </b-card-sub-title>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'login',
  layout: 'general',
  data() {
    return {
      form: {
        username: '',
        password: '',
      },
    };
  },
};
</script>

<style scoped>
html {
  height: 100% !important;
}
</style>