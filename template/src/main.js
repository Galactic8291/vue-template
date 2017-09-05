import Vue from 'vue'
import App from './App'

{{#router}}
import Router from './config/Router'
{{/router}}

new Vue({
  el: '#app',
  {{#router}}
  router: Router,
  {{/router}}
  template: '<App/>',
  components: { App }
})

