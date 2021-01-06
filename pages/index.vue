<template>
  <b-container>
    <b-row class="d-flex justify-content-center">
      <b-col
          lg="8"
          class="mt-sm-2 mt-lg-0"
      >
        <b-card
            title="메모 작성"
        >
          <b-form>
            <b-input-group>
              <b-form-textarea
                  id="textarea"
                  placeholder="무슨 생각을 하고 계신가요?"
                  rows="6"
                  max-rows="6"
                  no-resize
              ></b-form-textarea>
            </b-input-group>
            <b-input-group class="mt-2">
              <b-btn
                  block
                  variant="primary"
              >
                게시하기
              </b-btn>
            </b-input-group>
          </b-form>
        </b-card>
      </b-col>
      <b-col
          lg="8"
      >
        <memo-card
            v-for="memo in memos"
            :memo="memo"
            :key="memo.id"
        />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import MemoCard from '@/components/MemoCard';
import {mapState} from 'vuex';

export default {
  name: 'index',
  async asyncData({store}) {
    store.dispatch('memos/asyncMemo');
  },
  components: {
    MemoCard,
  },
  data() {
    return {
      text: '',
    };
  },
  computed: {
    ...mapState('memos', ['memos']),
  },
};
</script>

<style scoped>

</style>