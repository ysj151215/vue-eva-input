<template>
  <div id="app">
    <div>
      <eva-input placeholder="Type here..." />
    </div>
    <div style="display: inline-block; background: #3366ff">
      <eva-input placeholder="Type here..." primary />
    </div>
    <div>
      <eva-input disabled placeholder="Disabled..." />
    </div>
    <div>
      <eva-input readonly value="Readonly..." />
    </div>
    <div>
      <eva-input placeholder="Type here..." status="info" suffix-icon="github" />
    </div>
    <div>
      <eva-input placeholder="Type here..." status="warning" suffix-icon="github" />
    </div>
    <div>
      <eva-input placeholder="Type here..." status="success" suffix-icon="github" />
    </div>
    <div>
      <eva-input placeholder="Type here..." status="danger" suffix-icon="github" />
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import EvaInput from '@/EvaInput.vue'

export default Vue.extend({
  name: 'ServeDev',
  components: { EvaInput },
})
</script>

<style scoped>
#app > div {
  margin-bottom: 20px;
  padding: 10px;
}
</style>
