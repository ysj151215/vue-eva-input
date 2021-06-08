<template>
  <div id="app">
    <div>
      <EvaInput placeholder="Type here..." v-model="strValue" />
    </div>
    <div style="display: block; background: #3366ff; max-width: 480px">
      <EvaInput placeholder="Type here..." primary v-model="strValue" />
    </div>
    <div>
      <EvaInput disabled placeholder="Disabled..." />
    </div>
    <div>
      <EvaInput readonly value="Readonly..." />
    </div>
    <div>
      <EvaInput placeholder="Type here..." status="info" suffix-icon="github" v-model="strValue" />
    </div>
    <div>
      <EvaInput placeholder="Type here..." status="warning" suffix-icon="github" v-model="strValue" />
    </div>
    <div>
      <EvaInput placeholder="Type here..." status="success" suffix-icon="github" v-model="strValue" />
    </div>
    <div>
      <EvaInput placeholder="Type here..." status="danger" suffix-icon="github" v-model="strValue" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import EvaInput from '../src/EvaInput.vue'

export default defineComponent({
  components: {
    EvaInput
  },
  setup() {
    let strValue = ref('')

    return {
      strValue
    }
  }
})
</script>

<style scoped>
#app {
  display: block;
  margin: 0 auto;
  text-align: center;
}

#app > div {
  max-width: 480px;
  margin-bottom: 20px;
  padding: 10px;
}

.eva-input {
  width: 100%;
}
</style>
