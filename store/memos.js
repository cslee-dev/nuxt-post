export const state = () => ({
  memos: [],
});

export const mutations = {
  setMemos(state, payload) {
    state.memos = payload;
  },
  addMemos(state, payload) {
    state.memos.unshift(payload);
  },
  concatMemos(state, payload) {
    state.memos = state.memos.concat(payload);
  },
};
const limit = 3;
const dummyMemos = Array(limit).fill(null).map(v => ({
  'id': Math.ceil(Math.random() * 100000),
  'content': Math.ceil(Math.random() * 100000) +
      '이 예제는 주어진 두 값 사이의 난수를 생성한다. 함수의 반환값은 min보다 크거나 같으며, max보다 작다.',
  'created_at': '2021-01-04',
  'nickname': '로스군',
}));

export const actions = {
  asyncMemo({commit}) {
    return new Promise((resolve, reject) => {
      setTimeout(function() {
        commit('setMemos', dummyMemos);
        resolve();
      }, 1000);
    });
  },
};