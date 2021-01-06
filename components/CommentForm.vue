<template>
  <b-form>
    <b-form-group>
      <b-form-row>
        <label class="col-sm-1 col-lg-1">
          <b-avatar></b-avatar>
        </label>
        <b-form-input
            v-model="text"
            class="col-sm-11 col-lg-11"
            placeholder="공개 댓글을 입력하세요..."
            @keydown.enter.stop.prevent="addComment()"
        />
      </b-form-row>

    </b-form-group>
  </b-form>
</template>

<script>
export default {
  name: 'CommentForm',
  data() {
    return {
      text: '',
    };
  },
  methods: {
    addComment() {
      console.log(this.text);
    },
  },
};
</script>

<style scoped>

</style>