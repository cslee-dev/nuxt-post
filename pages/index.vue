<template>
  <b-container>
    <b-row>
      <b-col
        lg="4"
        sm="12"
      >
        <b-card
          title="최근 메모"
        >

        </b-card>
      </b-col>
      <b-col class="mt-sm-2 mt-lg-0">
        <b-card
          title="메모 작성"
        >
          <b-form>
            <b-input-group>
              <b-form-textarea
                id="textarea"
                placeholder="Enter something..."
                rows="3"
                max-rows="6"
                no-resize
              ></b-form-textarea>
            </b-input-group>
            <b-input-group class="mt-2">
              <b-btn>기록</b-btn>
            </b-input-group>
          </b-form>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      text: '',
    }
  }
}
</script>

<style scoped>

</style>