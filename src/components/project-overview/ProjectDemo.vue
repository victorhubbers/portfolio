<template>
  <div id="demo">
    <video
      v-if="demo.type === `video` || demo.type === `image`"
      style="outline: 0"
      loop
      muted
      preload="none"
      width="100%"
      :controls="demo.type === `video`"
      :poster="coverImage"
    >
      <source
        v-if="demo.type === `video`"
        :src="demo.asset"
        type="video/webm"
      />
    </video>
  </div>
</template>

<script>
export default {
  name: "ProjectDemo",
  props: {
    coverImage: {
      type: String,
      required: true
    },
    demo: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
</style>