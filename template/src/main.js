import Vue from 'vue'
import App from './App'

{{#router}}
import Router from './config/Router'
{{/router}}

new Vue({
  {{#router}}
  router: Router,
  {{/router}}
  el: '#app',
  render: h => h(App)
})

