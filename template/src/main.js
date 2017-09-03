import Vue from 'vue'
import App from './App'

{{#router}}
import Router from './config/Router'
{{/router}}

new Vue({
  {{#router}}
  router: Router,
  {{/router}}
  template: '<App/>',
  components: { App }
})

