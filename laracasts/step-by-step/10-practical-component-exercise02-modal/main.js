Vue.component('modal', {
  props: ['body'],
  data() {
    return {     
      
    }
  },
  template: `
  
  <div class="modal is-active">
    <div class="modal-background"></div>
    <div class="modal-content">
      <!-- Any other Bulma elements you want -->
      
      <slot></slot>
      
    </div><!--/.modal-content-->
    <button class="modal-close is-large" aria-label="close" @click="$emit('close')"></button>    
  </div><!--/.modal-->
  
  `,
  methods: {
    
  },
})

var app = new Vue({
  el: '#app',
  data: {
    showModal: false
  },
  methods: {
  
  },
}) // end of app