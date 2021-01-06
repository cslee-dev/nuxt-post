<template>
  <div>
    <b-card no-body>
      <b-card-body>
        <b-card-title>
          로스군
        </b-card-title>
        <b-card-sub-title>
          2021-01-06
        </b-card-sub-title>
        <b-card-text>
          안녕하세요. nuxt memo 서비스를 만들어 볼까요?
        </b-card-text>
      </b-card-body>
      <b-list-group flush>
        <b-list-group-item>
          <b-button-group
              class="d-flex"
              size="sm"
          >
            <b-button
                variant="white"
                type="button"
            >
              <b-icon-hand-thumbs-up color="black"></b-icon-hand-thumbs-up>
              좋아요
            </b-button>
            <b-button
                variant="white"
                type="button"
            >
              <b-icon-chat-left-text color="black"></b-icon-chat-left-text>
              댓글쓰기
            </b-button>
            <b-button
                variant="white"
                type="button"
            >
              <b-icon-three-dots color="black"></b-icon-three-dots>
              메뉴
            </b-button>
          </b-button-group>
        </b-list-group-item>
        <b-list-group-item>
          <comment-form />
        </b-list-group-item>
      </b-list-group>
    </b-card>
  </div>
</template>

<script>
import CommentForm from '@/components/CommentForm';

export default {
  name: 'MemoCard',
  components: {
    CommentForm,
  },
};
</script>

<style scoped>
button:hover {
  background-color: rgba(0, 0, 0, 0.25)
}
</style>