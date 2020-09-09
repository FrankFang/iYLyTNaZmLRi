<template>
<div class="demo-wrapper">
  <div class="demo">
    <component :is="SwitchDemo1" />
  </div>
  <div class="demo-actions">
    <Button theme="text" size="small">查看代码</Button>
  </div>
  <div class="demo-code">
    <pre v-text="SwitchDemo1.__demo"></pre>
  </div>
</div>
</template>

<script lang="ts">
import SwitchDemo1 from './Switch1.demo.vue'
import Button from '../lib/Button.vue'
export default {
  components: {
    Button
  },
  setup() {
    return {
      SwitchDemo1
    }
  }
}
</script>

<style lang="scss" scoped>
$border-color: #d9d9d9;

.demo {
  padding: 16px;

  &-wrapper {
    border: 1px solid $border-color;
  }

  &-actions {
    padding: 4px;
  }

  &-code {
    border-top: 1px dashed $border-color;
    padding: 4px;
    line-height: 1.1;
  }
}
</style>
