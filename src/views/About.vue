<template>
  <div class="about">
    <h1>{{ title }}</h1>
    <p>{{ text }}</p>
    <p>{{ computedText }}</p>

    <button @click="plusFn">按钮1</button>
  </div>
</template>

<script>
import { ref, reactive, onMounted, computed, watch, watchEffect } from 'vue'
export default {
  name: 'About',

  setup() {
    const title = reactive('12321')

    const text = ref(0)

    const computedText = computed(() => {
      return text.value + 'computedText'
    })

    onMounted(() => {
      console.log('onMounted', title, this)
    })

    /**
     * 第一个参数要监听的属性，多个可用数组
     */
    watch(text, (newval, oldval) => {
      console.log('textWatch', newval, oldval)
    })

    const watchEffectStop = watchEffect(() => {
      console.log('watchEffect', text.value)
    })

    const plusFn = () => {
      text.value++

      if (text.value > 5) {
        watchEffectStop()
      }
    }

    return { text, title, plusFn, computedText }
  }
}
</script>
