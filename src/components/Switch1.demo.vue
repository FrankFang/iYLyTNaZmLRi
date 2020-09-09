<template>
<div>
  <Switch v-model:value="bool" />
</div>
</template>

<script lang="ts">
import Switch from '../lib/Switch.vue'
import {
  ref
} from 'vue'
export default {
  components: {
    Switch
  },
  setup() {
    const bool = ref(false)
    return {
      bool
    }
  }
}
</script>

<demo hi="frank">
第一个例子
</demo>
