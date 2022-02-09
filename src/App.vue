<template>
  <div id="app" class="app-container">
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'App'
})
</script>
<style lang="scss" scoped>
.app-container {
  margin: 50px auto;
  width: 1200px;
}
</style>
