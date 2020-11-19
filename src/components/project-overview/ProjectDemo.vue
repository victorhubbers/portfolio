<template>
  <div id="demo">
    <video
      v-if="demo.type === `video` || demo.type === `image`"
      style="outline: 0"
      loop
      muted
      preload="none"
      playsinline
      width="100%"
      :controls="demo.type === `video`"
      :poster="coverImage"
    >
      <source
        v-for="(asset, type) in demo.assets"
        :key="type"
        :src="asset"
        :type="`video/${type}`"
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
      required: true,
    },
    demo: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped></style>
