<template>
  <div id='app'>
    {{#router}}
    <router-view></router-view>
    {{else}}
    <Hello></Hello>
    {{/router}}
  </div>
</template>

<script>
{{#unless router}}
import Hello from './components/Hello'
{{/unless}}

export default {
  name: 'app'{{#unless router}},
  components: {
    Hello
  }{{/unless}}
}
</script>

<style{{#less}} lang='less'{{/less}}>
</style>
